import styled from "styled-components"
import brand from '../../images/Chronos_RGB_Marca_Horizontal_Original.png';

export const Navbar = styled.nav`
    position:relative;
    z-index: 2;
    width: 100%;
    height: var(--navbar-height);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    display: static;
    top: 0%;
    background-color: white;
`

export const Brand = styled.div`
    position: relative;
    background-image: url(${brand});
    background-position: center; 
    background-size: contain;
    background-repeat: no-repeat;
    height: 100%;
    width: 15%;
    margin: 0 3rem;
`
export const NavbarMenus = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    height: 100%;
    flex-grow: 1;
`
export const Menu = styled.a`
    position: relative;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 100%;
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

export const SideButtons = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    height: 100%;
    width: 35rem;
    margin: 0rem 5rem 0rem 2rem;
`

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    height: 50%;
    width: auto;
    border: 3px solid var(--blue);
    box-sizing: border-box;
    border-radius: 20px;
    padding: 1.5rem 3rem;

    background: ${props => props.backgroundColor};
    text-transform: uppercase; 
    font-size: 1.2rem;
    color: ${props => props.fontColor};
`