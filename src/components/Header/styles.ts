import styled from "styled-components";

export const HeaderContainer = styled.header`
    height: 105px;

    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    width: 100%;
    background-color: ${props => props.theme.background};
    z-index: 2;


    nav {
        display: flex;
        max-width: 60%;
        width: 100%;
        flex-direction: row;
        justify-content: space-between;

        img {
            height: 100%;
            width: 85px;
        }

        div {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;

            div {
                display: flex;
                flex-direction: row;
                align-items: center;
                background-color: ${props => props.theme.purpleLight};
                color: ${props => props.theme.purple};
                margin-right: 12px;
                padding: 8px;
                border-radius: 6px;
                font-size: 0.875rem;

                span {
                    color: ${props => props.theme.purpleDark};
                    margin-left: 5px;
                }
            }

            a {
                background-color: ${props => props.theme.yellowLight};
                color: ${props => props.theme.yellowDark};
                position: relative;
                display: flex;
                align-items: center;
                border-radius: 6px;
                padding: 8px;

                span {
                    border-radius: 100%;
                    padding: 3px;
                    background-color: ${props => props.theme.yellowDark};
                    color: ${props => props.theme.white};
                    font-size: 0.75rem;
                    position: absolute;
                    width: 20px;
                    height: 20px;
                    right: -8.35px;
                    top: -8px;
                    text-align: center;
                }
            }
        }
    }
`