import styled from "styled-components"

import ChronosGraphism from '../../components/ChronosGraphism';
//import {ReactComponent as ChronosGraphism} from '../../images/SVG/chronos-graphism.svg';

export const AboutUs = styled.section`
    height: 160vh;
    display: flex;
    justify-content: center;
    position: relative;
    width: 100%;
    background-color: var(--blue);
    overflow: hidden;
`

export const Graphism = styled(ChronosGraphism)`
    position: absolute;
    width: 100%;
    height: 100%;
    left: 20%;
    top: 30%;
    transform: translate(-50%,-50%);
    opacity: 0.4;

`

export const Title = styled.h1`
    text-transform: uppercase; 
    font-size: 5rem;
    color: white;
    font-weight: 800;
`

export const SecondTitle = styled.h1`
    position: relative;
    align-self: flex-start;
    margin: 5rem 0;
    text-transform: uppercase; 
    font-size: 4rem;
    color: white;
    font-weight: 800;

    &::before{
        display: block;
        position:absolute;
        width: 100%;
        height: 60%;
        background-color: var(--orange);
        content: '';
        z-index: -1;
        transform: translateY(100%);
    }
`
export const SecondTitle2 = styled(SecondTitle)`
    align-self: flex-end;
`

export const TextTitle = styled.h2`
    text-transform: uppercase; 
    font-size: 3rem;
    color: white;
    justify-self: center;
    align-self: center;
    font-weight: 600;
`

export const Text = styled.p`
    text-align: center;
    color: white;
    font-size: 1.4rem;
    line-height: 40px;
`

export const Text2 = styled(Text)`
    text-align: justify;
    text-justify: inter-word;
`

export const Wrapper = styled.div`
    width: 80%;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    top: 50%;
    left: 50%;  
    transform: translate(-50%, -50%);
`

export const ContentWrapper = styled.div`
    position: relative;
    width: 100%;
    display: grid;
    grid: 0.5fr 2fr/1fr 1fr 1fr;
    column-gap: 15%;
    row-gap: 10%;
`

export const ContentWrapper2 = styled(ContentWrapper)`
    width: 90%;
    grid: 1fr/2fr 1fr;
    grid-gap: 0;
`

export const CAASO = styled.img`
    position: relative;
    width: 80%;
    height: auto;
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)), drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 53px;
`