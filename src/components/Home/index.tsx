import { CoffeeListContainer, HomeContainer, TitleContainer } from "./styles";
import coffeeCup from '../../assets/coffeeCup.svg'
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { useEffect, useState } from "react";
import { Card } from "../Card";

interface Coffees {
    id: string,
    name: string,
    tags: string[],
    description: string,
    img: string,
    price: number
}

export function Home() {
    const [products, setProducts] = useState<Coffees[]>([]);

    async function loadProducts() {
        const response = await fetch('http://localhost:3333/products')
        const data = await response.json()
        setProducts(data)
    }

    useEffect(() => {
        loadProducts()
    }, [])

    return (
        <>
            <HomeContainer>
                <div className="background"></div>
                <div className="info">
                    <div className="text">
                        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                        <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
                        <div className="itemsCoffee">
                            <div>
                                <div><ShoppingCart weight="fill" size={18} /></div>
                                <span>Compra simples e segura</span>
                            </div>
                            <div>
                                <div><Package weight="fill" size={18} /></div>
                                <span>Embalagem mantém o café intacto</span>
                            </div>
                            <div>
                                <div><Timer weight="fill" size={18} /></div>
                                <span>Entrega rápida e rastreada</span>
                            </div>
                            <div>
                                <div><Coffee weight="fill" size={18} /></div>
                                <span>O café chega fresquinho até você</span>
                            </div>
                        </div>
                    </div>
                    <img src={coffeeCup} alt="" />
                </div>
            </HomeContainer>
            <TitleContainer>
                <h2>Nossos Cafés</h2>
            </TitleContainer>
            <CoffeeListContainer>
                {products.map(product => {
                    return (
                        <Card
                            key={product.id}
                            id={product.id}
                            name={product.name}
                            tags={product.tags}
                            description={product.description}
                            img={product.img}
                            price={product.price}
                        />
                        )
                })}

            </CoffeeListContainer>
        </>
    )
}