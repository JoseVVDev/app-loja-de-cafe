import styled from "styled-components";
import background from '../../assets/Background.svg'

export const HomeContainer = styled.div`
    margin-top: 102px;
    height: 544px;
    display: flex;
    align-items: center;
    justify-content: center;
    
    .background {
        height: inherit;
        width: 100%;
        background: url(${background});
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        filter: blur(80px);
        background-position: right 20px bottom -210px;
        position: absolute;
        border: 3px solid black;
        z-index: -1;
    }

    .info {
        
        max-width: 60%;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap: 100px;
        
        .text {
            
        
            h1 {
                font-family: ${props => props.theme.title};
                color: ${props => props.theme.baseTitle};
                font-size: 3rem;
                font-weight: 800;
                line-height: 130%;
                margin-bottom: 24px;
            }

            p {
                font-size: 1.25rem;
                font-weight: 400;
                line-height: 130%;
                color: ${props => props.theme.baseSubtitle};
            }

            .itemsCoffee {
                display: grid;
                grid-template-columns: 1fr 1fr;
                row-gap: 25px;
                column-gap: 5px;
                margin-top: 66px;

                div {
                    display: flex;
                    align-items: center;

                   div {
                        margin-right: 12px;
                        border-radius: 100%;
                        height: 32px;
                        width: 32px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        color: ${props => props.theme.white};
                   }

                   :nth-child(1) div {
                        background: ${props => props.theme.yellowDark};
                   }

                   :nth-child(2) div {
                        background: ${props => props.theme.baseText};
                   }

                   :nth-child(3) div {
                        background: ${props => props.theme.yellow};
                   }

                   :nth-child(4) div {
                        background: ${props => props.theme.purple};
                   }

                   span {
                    font-size: 1rem;
                    font-weight: 400;
                   }
                }
            }
        }

        img {
            height: 420px;
            max-height: 100%;
            width: 450px;
            z-index: 1;
        }
    }
`

export const TitleContainer = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;

    h2 {
        width: 100%;
        max-width: 60%;
        margin-bottom: 65px;

        font-size: 2rem;
        font-family: ${props => props.theme.title};
        color: ${props => props.theme.baseSubtitle};
        font-weight: 800;
        margin-bottom: 54px;
    }
`

export const CoffeeListContainer = styled.section`
    width: 60%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(4, 256px);
    justify-content: space-between;
    row-gap: 40px;
    margin-bottom: 120px;
`