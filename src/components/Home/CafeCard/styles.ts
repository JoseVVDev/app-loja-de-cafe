import styled from "styled-components";

export const CafeCardContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 50px;

    div {
        max-width: 60%;
        width: 100%;

        .cardList {
            display: grid;
            max-width: 100%;
            width: 100%;
            grid-template-columns: repeat(4, 256px);
            justify-content: space-between;
            row-gap: 40px;

            .card {
                border-radius: 6px 36px 6px 36px;
                background: ${props => props.theme.baseCard};
                min-width: 256px;
                padding: 0px 20px 20px 20px;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                height: 310px;

                img {
                    width: 120px;
                    height: 120px;
                    margin-top: -20px;
                    margin-bottom: 15px;
                }
                .alignTags {

                    display: flex;
                    gap: 5px;

                    .tag {
                        font-weight: 700;
                        font-size: 0.625rem;
                        color: ${props => props.theme.yellowDark};
                        background: ${props => props.theme.yellowLight};
                        padding: 4px 8px;
                        border-radius: 25px;
                    }
                }

                h3 {
                    text-align: center;
                    margin-top: 10px;
                    font-family: ${props => props.theme.title};
                    font-size: 1.25rem;
                }

                .coffeeDescription {

                    font-weight: 400;
                    margin-top: 8px;
                    text-align: center;
                    font-size: 0.875rem;
                    color: ${props => props.theme.baseLabel};
                }

                .order {
                    padding-left: 4px;
                    padding-right: 4px;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: center;
                    max-width: 100%;
                    width: 100%;
                    margin-top: auto;
                    
                    p {
                        font-size: 0.875rem;
                        margin: 0px;
                        .price {
                            font-family: ${props => props.theme.title};
                            font-size: 1.5rem;
                        }
                    }

                    button {
                        border: 0px;
                        font-size: 1.1rem;
                        height: 32px;
                        width: 32px;
                        padding: 7px;
                        border-radius: 6px;
                        background: ${props => props.theme.purpleDark};
                        color: ${props => props.theme.white};
                        cursor: pointer;
                        transition: 0.2s;

                        :hover {
                            background: ${props => props.theme.purple};
                        }
                    }
                }
            }
        }
    }
`