import { Icon, IconContainer, SuccessContainer } from "./styles";
import illustration from '../../assets/illustration.png'
import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { useContext } from "react";
import { ShoppingCartContext } from "../../contexts/ShoppingCartContext";

export function Success() {
    const { orderAddress } = useContext(ShoppingCartContext)
    return (
        <SuccessContainer>
            <div>
                <div className="message">
                    <h2>Uhu! Pedido confirmado</h2>
                    <h4>Agora é só aguardar que logo o café chegará até você</h4>
                </div>
                <div className="info">
                    <div className="borderGradient">
                        <IconContainer>
                            <div className="infoLine">
                                <Icon bgColor="purple">
                                    <MapPin weight="fill"/>
                                </Icon>
                                <div className="infoText">
                                    <span>Entrega em <strong>{orderAddress.rua}, {orderAddress.numero}</strong></span>
                                    <p>{orderAddress.bairro} - {orderAddress.cidade}, {orderAddress.uf}</p>
                                </div>
                            </div>

                            <div className="infoLine">
                                <Icon bgColor="yellow">
                                    <Timer weight="fill"/>
                                </Icon>
                                <div className="infoText">
                                    <span>Previsão de Entrega</span>
                                    <strong>20 - 30 min</strong>
                                </div>
                            </div>

                            <div className="infoLine">
                                <Icon bgColor="yellowDark">
                                    <CurrencyDollar weight="fill" />
                                </Icon>
                                <div className="infoText">
                                    <span>Pagamento na entrega</span>
                                    <strong>{orderAddress.pagamento}</strong>
                                </div>
                            </div>
                        </IconContainer>
                    </div>
                    <img src={illustration} alt="" />
                </div>
            </div>
        </SuccessContainer>

    )
}