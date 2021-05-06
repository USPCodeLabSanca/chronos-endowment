import styled from "styled-components"

export const Item = styled.a`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: var(--navbar-height);
    flex-grow: 1;

    cursor: pointer;
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

export const NavbarMenu = styled(Item)`
    justify-content: space-evenly;
    height: 100%;
`

export const List = styled.ul`
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

    &.clicked{
        display: none;
    }
`
