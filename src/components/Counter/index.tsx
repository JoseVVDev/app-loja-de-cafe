import { ShoppingCartContext } from "../../contexts/ShoppingCartContext";
import { Minus, Plus } from "phosphor-react";
import { useContext, useEffect, useState } from "react";
import { CounterContainer } from "./styles";

interface CounterProps {
    initialValue: number,
    getNumber: (arg: number) => void,
    isCheckout: boolean, //usado para ativar funções especificas da pagina de checkout
    id: string
}

export function Counter(props: CounterProps) {

    const [numberOfCoffees, setNumberOfCoffees] = useState(props.initialValue);

    const { handleAddOrder, handleDecreaseOrder } = useContext(ShoppingCartContext)

    function increaseCount() {
        setNumberOfCoffees(numberOfCoffees + 1)

        if (props.isCheckout) {
            handleAddOrder(props.id)
        }
    }

    function decreaseCount() {
        numberOfCoffees > 1 ? setNumberOfCoffees(numberOfCoffees - 1) : setNumberOfCoffees(numberOfCoffees)

        if (props.isCheckout) {
            handleDecreaseOrder(props.id)
        }
    }

    //useEffect passando o valor do campo pro getNumber quando o numberOfCoffees é atualizado 
    useEffect(() => {
        props.getNumber(numberOfCoffees);
    }, [numberOfCoffees])

    return (
        <CounterContainer>
            <Minus weight="bold" onClick={decreaseCount} />
            <span className="numberOfItems">{numberOfCoffees}</span>
            <Plus weight="bold" onClick={increaseCount} />
        </CounterContainer>
    )
}