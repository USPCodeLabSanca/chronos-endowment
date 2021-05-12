import styled from "styled-components"

import background from '../../images/Background.jpg';
import logo from '../../images/Chronos_RGB_Simbolo_lnvertido.png';
import graphism from '../../images/Grafismo_Chronos_Branco_RGB.png';

import ChronosSymbolGraphism from '../../components/ChronosSymbolGraphism';

export const Hero = styled.section`
    --navbar-height: 120px;
    --blue: #13294B;

    height: calc(100vh - var(--navbar-height));
    display: flex;
    flex-direction:column;
    position: relative;
    width: 100%;
    background-color: black;
`

export const Banner = styled.div`
    position: relative;
    overflow: hidden;
    width: 100%;
    height: calc(100vh - var(--navbar-height));
    background-image: url(${background});
    background-size: cover;
`

export const Wrapper = styled.div`
    max-width: 55%;
    position: absolute;
    display: flex;
    flex-direction: column;
    top: 6.4rem;
    left: 9.5rem;
`

export const Title = styled.h1`
    margin: 0;
    color: white;
    text-transform: uppercase; 
    font-size: 4rem;
    margin-bottom: 6.25rem;
`

export const Bold = styled.span`
    font-weight: 800;
`

export const ImageWrapper = styled.div`
    position: absolute;
    width: 150vh;
    height: 150vh;
    right: -15rem;
    top: 50%;
    transform: translateY(-45%);
`

export const Graphism = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    background-image: url(${graphism});
    background-position: center; 
    background-size: cover;
    opacity: 0.3;
`

export const Logo = styled.div`
    position: relative;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    background-image: url(${logo});
    background-position: center; 
    background-size: cover;
    width: 80vh;
    height: 80vh;
    opacity: 1;
`

export const LogoGraphism = styled(ChronosSymbolGraphism)`
    position: absolute;
    width: 70%;
    height: 70%;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);

    #Graphism{
        opacity: 0.5;
    }
`

export const LogoAnimation = styled.div`
    position: absolute;
    width: 70vw;
    height: 70vw;
    right: -50%;
    top: 50%;
    transform: translate(-50%,-50%);
`
