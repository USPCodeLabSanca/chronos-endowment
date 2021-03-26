import styled from "styled-components"

export const Wrapper = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    height: ${props => props.height ? props.height : "auto"};
    width: ${props => props.width};
    border: 3px solid ${props => props.fontColor};
    box-sizing: border-box;
    border-radius: 20px;
    padding: 1.5rem 0;
    margin: 1rem 0;

    background: ${props => props.backgroundColor ? props.backgroundColor : "none"};
    text-transform: uppercase; 
    font-size: ${props => props.fontSize};;
    color: ${props => props.fontColor};
`