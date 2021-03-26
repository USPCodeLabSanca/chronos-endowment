import styled from "styled-components"

export const Menu = styled.div`
    width: 100%;
    position: absolute;
    top: var(--navbar-height);
    display: flex;
    flex-direction: column;
    align-items: stretch;
    overflow: hidden;

    background: white;
    text-transform: uppercase; 
    font-size: 1.2rem;
`

export const Item = styled.a`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: var(--navbar-height);
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