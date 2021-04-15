import styled from "styled-components"

import ChronosGraphism from '../../components/ChronosGraphism';
//import {ReactComponent as ChronosGraphism} from '../../images/SVG/chronos-graphism.svg';

export const Governance = styled.section`
    height: 160vh;
    display: flex;
    justify-content: center;
    position: relative;
    width: 100%;
    background-color: white;
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
    color: var(--light-blue);
    font-weight: 700;
`

export const TextTitle = styled.h2`
    margin-top: 1rem;
    font-size: 2rem;
    color: var(--blue);
    justify-self: center;
    align-self: center;
`

export const Text = styled.p`
    text-align: center;
    color: white;
    font-size: 1.4rem;
    line-height: 40px;
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

export const GovImg = styled.img`
    position: relative;
    width: 80%;
    height: auto;
    margin: 5rem 0;
`