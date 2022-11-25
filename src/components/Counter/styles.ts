import styled from "styled-components";

export const CounterContainer = styled.div`
    display: flex;
    justify-content: space-around!important;
    align-items: center;
    height: 32px;
    width: 72px !important;
    background: ${props => props.theme.baseButton};
    padding: 8px 2px;
    border-radius: 6px;
    margin-right: -20px;
    flex-direction: row!important;

    svg {
        color: ${props => props.theme.purple}!important;
        cursor: pointer;
        transition: 0.2s;

        :hover {
            color: ${props => props.theme.purpleDark}!important;
        }
    }
`;