import styled from "styled-components";

export const CheckoutContainer = styled.div`
    margin-top: 152px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    h3 {
        font-size: 1.125rem;
        font-family: ${props => props.theme.title};
        color: ${props => props.theme.baseSubtitle};
        font-weight: 800;
        width: 100%;
    }

    div {

        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: row;
        width: 100%;
        max-width: 60%;

        div:nth-child(1) {
            width: 60%;
            display: flex;
            flex-direction: column;
            align-self: flex-start;

            svg {
                color: ${props => props.theme.yellowDark};
            }

            form {
                width: 100%;
                

                div {
                    background: ${props => props.theme.baseCard};
                    min-width: 100%;
                    padding: 40px;

                    .formInputs {

                        margin-top: 32px!important;

                        .CEP {
                            grid-area: cep;
                        }

                        .Rua {
                            grid-area: rua;
                        }

                        .Numero {
                            grid-area: num;
                        }

                        .Complemento {
                            grid-area: com;
                            width: 100%;
                            padding-right: 70px;
                        }

                        .opcional {
                            padding: 0px;
                            position: relative;
                            display: inline-block;
                        }

                        .opcional::after {
                            position: absolute;
                            right: 10px;
                            top: 13px;
                            content: attr(data-placeholder);
                            pointer-events: none;
                            opacity: 0.6;
                            color: ${props => props.theme.baseLabel};
                            font-weight: 400;
                            font-size: 0.875rem;
                        }

                        .Bairro {
                            grid-area: bai;
                        }

                        .Cidade {
                            grid-area: cid;
                        }

                        .UF {
                            grid-area: uf;
                        }

                        padding: 0;
                        display: grid;
                        grid-template-columns: repeat(9, 1fr);
                        grid-template-areas: 
                            "cep cep cep . . . . . ."
                            "rua rua rua rua rua rua rua rua rua"
                            "num num num com com com com com com"
                            "bai bai bai cid cid cid cid cid uf"
                        ;
                        column-gap: 12px;
                        row-gap: 16px;


                        input {
                            background: ${props => props.theme.baseInput};
                            border: 1px solid ${props => props.theme.baseButton};
                            border-radius: 4px;
                            height: 42px;
                            padding: 0px 12px;
                            overflow: clip;
                            box-sizing: border-box;
                            font-weight: 400;
                            font-size: 0.875rem;
                            color: ${props => props.theme.baseText};
                            transition: 0.2s;

                            input::placeholder {
                                color: ${props => props.theme.baseLabel};
                                font-weight: 400;
                                font-size: 0.875rem;
                            }
                            
                            :focus{
                                outline: none!important;
                                border: 1px solid ${ props => props.theme.yellowDark };
                            }
                            
                            :active {
                                outline: none!important;
                                border: 1px solid ${ props => props.theme.yellowDark };
                            }
                        } 
                    }

                    .textIconBox{
                        padding: 0px;
                        display: flex;
                        flex-direction: row;
                        align-items: center;

                        span {
                            align-self: flex-start;
                        }

                        .textBox{
                            margin-top: 0px;
                            margin-left: 10px;
                            padding: 0px;
                            display: flex;
                            flex-direction: column;

                            span {
                                width: 100%;
                                font-size: 1rem;
                                color: ${props => props.theme.baseSubtitle};
                                margin-bottom: 6px;
                            }

                            p {
                                width: 100%;
                                color: ${props => props.theme.baseText};
                                font-size: 0.875rem;
                            }
                        }
                    }
                }

                .payment {
                    margin-top: 20px;
                    display: flex;
                    flex-direction: column;
                    border-radius: 0px;

                    svg {
                        color: ${props => props.theme.purple};
                    }
                }

                .payMethod {
                    padding: 0px;

                    div {
                        padding: 0px;
                        margin-top: 32px;
                        display: grid;
                        grid-template-columns: 1fr 1fr 1fr;
                        column-gap: 12px;

                        button {
                            cursor: pointer;
                            padding: 16px;
                            display: flex;
                            flex-direction: row;
                            align-items: center;
                            color: ${props => props.theme.purple};
                            background: ${props => props.theme.baseButton};
                            border: 1px solid ${props => props.theme.baseButton};
                            border-radius: 6px;
                            transition: 0.2s;

                            :hover {
                                background: ${props => props.theme.baseHover};
                            }

                            :focus {
                                background-color: ${props => props.theme.purpleLight};
                                border: 1px solid ${props => props.theme.purple};
                            }

                            :active {
                                background-color: ${props => props.theme.purpleLight};
                                border: 1px solid ${props => props.theme.purple};
                            }

                            p {
                                margin-left: 12px;
                                color: ${props => props.theme.baseText};
                                
                            }
                        }

                        button[data-state="checked"] {
                            background-color: ${props => props.theme.purpleLight};
                            border: 1px solid ${props => props.theme.purple};
                        }
                    }
                }
            }
        }

        div:nth-child(2) {
            width: 38%;
            display: flex;
            flex-direction: column;
            align-items: center;
            align-self: flex-start;
            border-radius: 6px 44px;

            .selectedCoffees {
                width: 100%;
                background: ${props => props.theme.baseCard};
                min-width: 100%;
                padding: 40px;

                .coffees{
                    width: 100%;
                    min-width: 100%;
                    
                    .coffee{
                        width: 100%;
                        min-width: 100%;
                        display: flex;
                        flex-direction: row;
                        border-bottom: 1px solid ${props => props.theme.baseButton};
                        border-radius: 0px;
                        padding-bottom: 24px;

                        //todos os elementos a partir do segundo
                        :nth-child(n+2) {
                            margin-top: 24px;
                        }

                        img {
                            width: 64px;
                            height: 64px;
                        }

                        span {
                            align-self: flex-start;
                            font-weight: bold;
                        }

                        .info {
                            width: 100%;
                            min-height: 100%;
                            align-self: stretch;

                            p {
                                min-width: 100%;
                            }

                            .buttonInfo{

                                width: 100%;
                                min-width: 100%;
                                align-items: flex-start;
                                flex-direction: row;
                                justify-content: flex-start;
                                gap: 10px;
                                
                                .counter {
                                    display: flex;
                                    justify-content: space-around;
                                    flex-direction: row;
                                    align-items: center;
                                    height: 32px;
                                    width: 72px;
                                    background: ${props => props.theme.baseButton};
                                    padding: 8px 2px;
                                    border-radius: 6px;
                                    cursor: default;

                                    svg {
                                        color: ${props => props.theme.purple};
                                        cursor: pointer;
                                        transition: 0.2s;

                                        :hover {
                                            color: ${props => props.theme.purpleDark};
                                        }
                                    }
                                }

                                .remove {
                                    width: 92px;
                                    display: flex;
                                    justify-content: space-around;
                                    flex-direction: row;
                                    align-items: center;
                                    height: 32px;
                                    background: ${props => props.theme.baseButton};
                                    padding: 8px 2px;
                                    border-radius: 6px;
                                    transition: 0.2s;
                                    cursor: pointer;
                                    margin-left: 20px;

                                    svg {
                                        color: ${props => props.theme.purple};
                                    }

                                    span {
                                        color: ${props => props.theme.baseSubtitle};
                                        font-size: 0.75rem;
                                        align-self: center;
                                        font-weight: 400;
                                    }

                                    :hover {
                                        background: ${props => props.theme.baseHover};
                                    }
                                }
                            }
                        }
                    }
                }

                .total {
                    width: 100%;
                    min-width: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    margin-top: 24px;

                    div {
                        width: 100%;
                        min-width: 100%;
                        display: flex;

                        div {
                            display: flex;
                            flex-direction: row;
                            justify-content: space-between;
                            line-height: 160%;
                            color: ${props => props.theme.baseText};
                            margin-bottom: 10px;

                            p {
                                font-size: 0.875rem;
                            }

                            span {
                                font-size: 1rem;
                            }
                        }

                        div:nth-child(3) {
                            font-weight: bold;

                            p {
                                font-size: 1.25rem;
                            }

                            span {
                                font-size: 1.25rem;
                            }
                        }
                    }

                    a {
                        width: 100%;
                    }

                    button {
                        background: ${props => props.theme.yellow};
                        border: 1px solid ${props => props.theme.yellow};
                        color: ${props => props.theme.white};
                        border-radius: 6px;
                        width: 100%;
                        padding: 12px 0px;
                        font-weight: 700;
                        font-family: 'Roboto',sans-serif;
                        margin-top: 24px;
                        cursor: pointer;
                        transition: 0.2s;

                        :hover {
                            background: ${props => props.theme.yellowDark};
                            border: 1px solid ${props => props.theme.yellowDark};
                        }
                    }
                }
            }
        }
    }
    
`

