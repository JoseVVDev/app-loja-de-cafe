import styled from "styled-components";

export const SuccessContainer = styled.div`
    margin-top: 152px;
    display: flex;
    align-items: center;
    justify-content: center;
    
    div {
        width: 100%;
        max-width: 60%;
        display: flex;
        flex-direction: column;

        .message {
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;

            h2 {
                font-family: 'Baloo 2';
                color: ${props => props.theme.yellowDark};
                font-size: 2rem;
            }

            h4 {
                font-weight: 400;
                font-size: 1.25rem;
            }
        }

        .info {
            margin-top: 40px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            min-width: 100%;
            gap: 102px;

            .borderGradient {         
                /* border-image: linear-gradient(to bottom right, #DBAC2C 0%, #8047F8 100%) 1; */
                padding: 1px;
                border-radius: 6px 36px;
                background-image: linear-gradient(${props => props.theme.background}, ${props => props.theme.background}),linear-gradient(to bottom right, #DBAC2C 0%, #8047F8 100%);
                background-origin: border-box;
                background-clip: content-box,border-box;
            }
        }
    }

`

export const IconContainer = styled.section`
    border: 0px;
    min-height: 100%;
    min-width: 100%;
    padding: 39px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .infoLine {
        min-width: 100%;
        display: flex;
        flex-direction: row;
        gap: 12px;
        align-items: center;

        .infoText {
            min-width: fit-content;
            font-size: 1rem;
            line-height: 20.8px;
        }
    }
`

interface IconProps {
    bgColor : string
}

export const Icon = styled.label<IconProps>`
    height: 32px;
    width: 32px;
    background: ${props => props.theme[props.bgColor]};
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${props => props.theme.white};
`