import { Minus, Plus, ShoppingCart, Trash } from "phosphor-react"
import { useContext, useState } from "react";
import { ShoppingCartContext } from "../../contexts/ShoppingCartContext";
import { Counter } from "../Counter";
import { CardContainer } from "./styles";

interface Coffees {
    id: string,
    name: string,
    tags: string[],
    description: string,
    img: string,
    price: number
}

interface CoffeesCheckout {
    id:string,
    name:string,
    img: string,
    price: number,
    initialValue: number
}

//pode ser movido para utils
function convertToBRL(number: number) {
    const curatedNumber = number / 100;
    return (
        new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2 }).format(curatedNumber)
    )
}

export function Card(props: Coffees) {
    const [numberOrder, setNumberOrder] = useState(1)
    const { includeCoffee } = useContext(ShoppingCartContext)

    function getNumber(coffees: number) {
        return setNumberOrder(coffees)
    }

    function orderCoffee(idCoffee: string, nameCoffee: string, img:string, price: number) {
        includeCoffee(idCoffee, nameCoffee, img, price ,numberOrder )
    }

    return (
        <CardContainer>
            <div className="card" key={props.id}>
                <img src={`/coffeeIcons/${props.img}`} alt="" />
                <span className="alignTags">
                    {props.tags.map(tag => <span className="tag" key={props.name + tag}> {tag} </span>)}
                </span>
                <h3>{props.name}</h3>
                <p className="coffeeDescription">{props.description}</p>
                <div className="order">
                    <p>R$ <span className="price">{convertToBRL(props.price)}</span></p>
                    <Counter initialValue={1} getNumber={getNumber} isCheckout={false} id={props.id}/>
                    <button onClick={() => orderCoffee(props.id, props.name, props.img, props.price)}>
                        <ShoppingCart weight="fill" />
                    </button>
                </div>
            </div>
        </CardContainer>
    )
}

export function CardCheckout(props: CoffeesCheckout) {
    const [numberOrder, setNumberOrder] = useState(1)
    const { removeCoffee } = useContext(ShoppingCartContext)

    function getNumber(coffees: number) {
        return setNumberOrder(coffees)
    }

    return (
        <div className="coffee" key={props.id}>
            <img src={`/coffeeIcons/${props.img}`} alt="" />
            <div className="info">
                <p>{props.name}</p>
                <div className="buttonInfo">
                    <Counter initialValue={props.initialValue} getNumber={getNumber} isCheckout={true} id={props.id}/>
                    <div className="remove" onClick={() => removeCoffee(props.id)}>
                        <Trash size={16} />
                        <span>REMOVER</span>
                    </div>
                </div>
            </div>
            <span>R$ {convertToBRL(props.price)}</span>
        </div>
    )
}