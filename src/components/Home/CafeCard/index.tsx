import { CafeCardContainer } from "./styles";
import { ShoppingCart } from "phosphor-react";
import { useEffect, useState } from "react";
import { Counter } from "../../Counter";

interface Coffees {
    id: number,
    name: string,
    tags: string[],
    description: string,
    img: string,
    price: number
}

function convertToBRL(number: number) {
    const curatedNumber = number / 100;
    return (
        new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2 }).format(curatedNumber)
    )
}

export function CafeCard() {
    //carrega o json com os produtos
    const [products, setProducts] = useState<Coffees[]>([]);

    async function loadProducts() {
        const response = await fetch('http://localhost:3333/products')
        const data = await response.json()
        setProducts(data)
    }

    useEffect(() => {
        loadProducts()
    }, [])

    //função para pegar o numero que está dentro do contador, passo para o filho.
    function getNumber(coffees: number) {
        return coffees
    }

    //função que será usada para levar os dados ate o carrinho
    function orderCoffee(idCoffee: number, nameCoffee: string, tags: string[]) {
        return (
            console.log(`${getNumber} order(s) of ${nameCoffee} that is ${tags.map(tag => tag)} with the ${idCoffee} ID`)
        )
    }

//https://stackoverflow.com/questions/44607396/importing-multiple-files-in-react
    return (
        <CafeCardContainer>
            <div>
                <div className="cardList">

                    {products.map(product => {
                        return (
                            <div className="card" key={product.id}>
                                <img src={`/coffeeIcons/${product.img}`} alt="" />
                                <span className="alignTags">
                                    {product.tags.map(tag => <span className="tag" key={product.name + tag}> {tag} </span>)}
                                </span>
                                <h3>{product.name}</h3>
                                <p className="coffeeDescription">{product.description}</p>
                                <div className="order">
                                    <p>R$ <span className="price">{convertToBRL(product.price)}</span></p>

                                    <Counter initialValue={1} getNumber={getNumber}/>
                                    
                                    <button onClick={() => orderCoffee(product.id, product.name, product.tags)}>
                                        <ShoppingCart weight="fill" />
                                    </button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </CafeCardContainer>
    )
}