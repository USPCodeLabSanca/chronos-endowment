import styled from "styled-components"

import captacao from '../../images/SVG/captacao.svg'
import impacto from '../../images/SVG/impacto.svg'
import perpetuidade from '../../images/SVG/perpetuidade.svg'

export const HowItWorks = styled.section`
    height: 120vh;
    display: flex;
    justify-content: center;
    position: relative;
    width: 100%;
    background-color: white;
`

export const Title = styled.h1`
    margin-bottom: 5rem;
    text-transform: uppercase; 
    font-size: 5rem;
    color: var(--light-blue);
    font-weight: 700;
`

export const SecondTitle = styled.h2`
    text-transform: uppercase; 
    font-size: 2rem;
    color: var(--lighter-blue);
    justify-self: center;
    align-self: center;
    font-weight: 600;
`

export const MoneyTitle = styled.h1`
    text-transform: uppercase; 
    font-size: 3rem;
    color: var(--light-blue);
    font-weight: 800;
    padding: 1rem 0;
`

export const Text = styled.p`
    text-align: justify;
    text-justify: inter-word;
    font-size: 1.4rem;
    line-height: 40px;
`

export const MoneyText = styled.p`
    text-align: justify;
    text-justify: inter-word;
    font-size: 1.5rem;
`

export const Wrapper = styled.div`
    width: 70%;
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
    height: 50%;
    display: grid;
    grid: 1fr 0.5fr 2fr/1fr 1fr 1fr;
    column-gap: 10%;
    margin: 3rem 0;
`

export const Captacao = styled.div`
    width: 10rem;
    height: 10rem;
    background-image: url(${captacao});
    background-position: center; 
    background-size: cover;
    justify-self: center;
`

export const Impacto = styled.div`
    width: 10rem;
    height: 10rem;
    background-image: url(${impacto});
    background-position: center; 
    background-size: cover;
    justify-self: center;
`

export const Perpetuidade = styled.div`
    width: 10rem;
    height: 10rem;
    background-image: url(${perpetuidade});
    background-position: center; 
    background-size: cover;
    justify-self: center;
`