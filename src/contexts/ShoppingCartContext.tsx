import { createContext, ReactNode, useEffect, useState } from "react";

interface orderContext {
    orderAddress: orderType,
    coffees: orderCoffees[] | undefined,
    includeCoffee: (id: string, name: string, img: string, price: number, numberOfOrders: number) => void,
    removeCoffee: (id: string) => void,
    products: Coffees[],
    convertToBRL: (number: number) => string,
    handleAddOrder: (id: string) => void,
    handleDecreaseOrder: (id: string) => void,
    changeAddress: (newAddress: orderType) => void,
}

interface orderType {
    CEP: string,
    rua: string,
    numero: string,
    complemento: string,
    bairro: string,
    cidade: string,
    uf: string,
    pagamento: string
}

interface Coffees {
    id: string,
    name: string,
    tags: string[],
    description: string,
    img: string,
    price: number
}

interface orderCoffees {
    id: string,
    name: string,
    img: string,
    price: number,
    numberOrders: number
}

export const ShoppingCartContext = createContext({} as orderContext)

interface ShoppingCartContextProviderProps {
    children: ReactNode
}

export function convertToBRL(number: number) {
    const curatedNumber = number / 100;
    return (
        new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2 }).format(curatedNumber)
    )
}

export function ShoppingCardContextProvider({ children }: ShoppingCartContextProviderProps) {

    const [orderAddress, setOrderAddress] = useState(
        {
            CEP: "",
            rua: "Rua das ruas",
            numero: "111",
            complemento: "",
            bairro: "Bairros",
            cidade: "Cidade",
            uf: "UF",
            pagamento: "Cartão de crédito",

        }
    )
    const [products, setProducts] = useState<Coffees[]>([]);
    const [coffees, setCoffees] = useState<orderCoffees[]>(() => {
        const coffeesInStorage = JSON.parse(localStorage.getItem("Pedido") || "[]");
        return coffeesInStorage;
    });

    async function loadProducts() {
        const response = await fetch('http://localhost:3333/products')
        const data = await response.json()
        setProducts(data)
    }
    //Função para adicionar um pedido, logica para somente adicionar produtos sem repetir
    function includeCoffee(idCoffee: string, nameCoffee: string, imgCoffee: string, priceCoffee: number, numberOfOrders: number) {
        if (!(coffees.filter(cafe => cafe.id === idCoffee).length > 0)) {
            setCoffees(coffees => [...coffees, { id: idCoffee, name: nameCoffee, img: imgCoffee, price: priceCoffee, numberOrders: numberOfOrders }])
        }
    }

    function removeCoffee(id: string) {
        setCoffees(coffees.filter(cafe => cafe.id !== id))
    }

    function handleAddOrder(id: string) {
        setCoffees(coffees.map(coffee => coffee.id === id ? { ...coffee, numberOrders: coffee.numberOrders + 1 } : coffee))
    }

    function handleDecreaseOrder(id: string) {
        setCoffees(coffees.map(coffee => coffee.id === id && coffee.numberOrders > 1 ? { ...coffee, numberOrders: coffee.numberOrders - 1 } : coffee))
    }

    function changeAddress(newAddress: orderType) {
        setOrderAddress(newAddress)
    }


    useEffect(() => {
        loadProducts()
    }, [])

    //colocando os pedidos no localStorage
    useEffect(() => {
        localStorage.setItem('Pedido', JSON.stringify(coffees))
        console.log(coffees)
    }, [coffees])

    return (
        <ShoppingCartContext.Provider value={{ orderAddress, coffees, includeCoffee, products, convertToBRL, handleAddOrder, changeAddress, removeCoffee, handleDecreaseOrder }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}

