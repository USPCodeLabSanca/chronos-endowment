import styled from "styled-components"

export const Menu = styled.a`
    position: relative;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 100%;
    flex-grow: 1;

    background: white;
    text-transform: uppercase; 
    color: var(--blue);
    font-size: 1.2rem;
    transition: background 0.5s ease-in-out;

    &:hover{
        background: var(--blue);
        color: white;
    }
`