import { ShoppingCartContext } from "../../contexts/ShoppingCartContext";
import { useContext } from "react";
import { HeaderContainer } from "./styles";
import LogoCafe from '../../assets/LogoCafe.svg'
import { MapPin, ShoppingCart } from "phosphor-react";
import { NavLink } from "react-router-dom";


export function Header() {
    const { orderAddress, coffees } = useContext(ShoppingCartContext)

    return (
        <HeaderContainer>
            <nav>
                <NavLink to="/">
                    <img src={LogoCafe} alt="Logo Cafe" />
                </NavLink>
                <div>
                    <div>
                        <MapPin size={23} weight="fill" />
                        <span>{orderAddress.cidade}, {orderAddress.uf}</span>
                    </div>
                    <NavLink to="/checkout">
                        <ShoppingCart size={23} weight="fill" />

                        {coffees!.length > 0 ? <span>{coffees!.length}</span> : ""}
                    </NavLink>
                </div>
            </nav>
        </HeaderContainer>
    )
}