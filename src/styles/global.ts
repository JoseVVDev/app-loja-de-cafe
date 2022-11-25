import { createGlobalStyle } from "styled-components";
import { MyProps } from "./themes/default";

export const GlobalStyle = createGlobalStyle<MyProps>`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        width: 100vw;
        overflow-y: scroll;
    }

    body {
        background-color: ${props => props.theme.background};
        font-family: 'Roboto', sans-serif;
        -webkit-font-smoothing: antialiased;
        color: ${props => props.theme.baseText};
    }

    input[type=number] {
        -moz-appearance: textfield;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
`   