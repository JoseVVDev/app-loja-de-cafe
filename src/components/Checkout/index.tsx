import { useContext, useEffect, useState } from "react";
import { ShoppingCartContext } from "../../contexts/ShoppingCartContext";
import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";
import { CheckoutContainer } from "./styles";
import * as RadioGroup from '@radix-ui/react-radio-group';
import { NavLink } from "react-router-dom";
import { CardCheckout } from "../Card";

interface inputInfo {
    value: string
    id: string
}

interface inputObject {
    target: inputInfo
}

export function Checkout() {
    const { orderAddress, coffees, products, convertToBRL, changeAddress } = useContext(ShoppingCartContext)
    const [total, setTotal] = useState(0)

    useEffect(() => {
        setTotal(coffees?.reduce((sumTotal, coffee) => sumTotal + (coffee.numberOrders * coffee.price), 0) || 0);
    }, [coffees])

    //função funciona para todos os campos
    function handleChangeAddress({ target: { value, id } }: inputObject) {
        let address = orderAddress
        //https://stackoverflow.com/questions/57086672/element-implicitly-has-an-any-type-because-expression-of-type-string-cant-b
        address[id as keyof typeof address] = value
        changeAddress(address)
    }
    //utilizo o ID do campo para especificar qual propriedade do objeto devo alterar

    function handlePaymentOption(value: string) {
        let address = orderAddress
        address.pagamento = value
        changeAddress(address)
    }

    return (
        <CheckoutContainer>
            <div>
                <div>
                    <h3>Complete seu pedido</h3>
                    <form action="">
                        <div className="address">
                            <div className="textIconBox">
                                <span><MapPinLine size={20} /></span>
                                <div className="textBox">
                                    <span>Endereço de entrega</span>
                                    <p>Informe o endereço onde deseja receber seu pedido</p>
                                </div>
                            </div>
                            <div className="formInputs">
                                <input type="text" name="" id="CEP" placeholder="CEP" className="CEP" onChange={handleChangeAddress} />
                                <input type="text" name="" id="rua" placeholder="Rua" className="Rua" onChange={handleChangeAddress} />
                                <input type="number" name="" id="numero" placeholder="Número" className="Numero" onChange={handleChangeAddress} />
                                <div className="opcional Complemento" data-placeholder="Opcional">
                                    <input type="text" name="" id="" placeholder="Complemento" className="Complemento" />
                                </div>
                                <input type="text" name="" id="bairro" placeholder="Bairro" className="Bairro" onChange={handleChangeAddress} />
                                <input type="text" name="" id="cidade" placeholder="Cidade" className="Cidade" onChange={handleChangeAddress} />
                                <input type="text" name="" id="uf" placeholder="UF" className="UF" onChange={handleChangeAddress} />
                            </div>
                        </div>
                        <div className="payment">
                            <div className="textIconBox">
                                <span><CurrencyDollar size={20} /></span>
                                <div className="textBox">
                                    <span>Pagamento</span>
                                    <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                                </div>
                            </div>
                            <div className="payMethod">
                                <RadioGroup.Root onValueChange={handlePaymentOption}>
                                    <RadioGroup.Item value="Cartão de Crédito" id="r1">
                                        <RadioGroup.Indicator />
                                        <CreditCard size={16} />
                                        <p>CARTÃO DE CRÉDITO</p>
                                    </RadioGroup.Item>
                                    <RadioGroup.Item value="Cartão de débito" id="r2">
                                        <RadioGroup.Indicator />
                                        <Bank size={16} />
                                        <p>CARTÃO DE DÉBITO</p>
                                    </RadioGroup.Item>
                                    <RadioGroup.Item value="Dinheiro" id="r3">
                                        <RadioGroup.Indicator />
                                        <Money size={16} />
                                        <p>DINHEIRO</p>
                                    </RadioGroup.Item>
                                </RadioGroup.Root>
                            </div>
                        </div>
                    </form>
                </div>
                <div>
                    <h3>Cafés selecionados</h3>
                    <div className="selectedCoffees">
                        <div className="coffees">
                            {coffees?.map(filteredProduct =>
                                <CardCheckout
                                    id={filteredProduct.id}
                                    img={filteredProduct.img}
                                    name={filteredProduct.name}
                                    price={filteredProduct.price * filteredProduct.numberOrders}
                                    key={filteredProduct.id}
                                    initialValue={filteredProduct.numberOrders} />
                            )}


                        </div>
                        <div className="total">
                            <div>
                                <div>
                                    <p>Total de items</p>
                                    <span>R$ {convertToBRL(total)} </span>
                                </div>
                                <div>
                                    <p>Entrega</p>
                                    <span>R$ 3,50</span>
                                </div>
                                <div>
                                    <p>Total</p>
                                    <span>R$ {convertToBRL(total + 350)}</span>
                                </div>
                            </div>
                            <NavLink to="/success">
                                <button>CONFIRMAR PEDIDO</button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </CheckoutContainer>
    )
}