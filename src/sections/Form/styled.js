import styled from "styled-components"

export const Form = styled.section`
    height: 120vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    position: relative;
    width: 100%;
    background-color: #EAEAEB;
    overflow: hidden;
`

export const Container = styled.div`
    width: 80%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Title = styled.h1`
    margin: 0 0 2rem 0;
    text-transform: uppercase; 
    font-size: 4rem;
    font-weight: 600;
    color: var(--light-blue);
`

export const Subtitle = styled.h1`
    margin-bottom: 3rem;
    text-transform: uppercase; 
    font-size: 2rem;
    font-weight: 600;
    color: var(--light-blue);
`

export const FormContainer = styled.form`
    position: relative;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 60rem;
    padding: 1rem;
    margin: 1rem 1rem;
    border-radius: 2rem;
`

export const Field = styled.input`
    display: block;
    width: 100%;
    height: 4rem;
    padding: 0.75rem 0.75rem;
    margin: 0.5rem 0;
    font-size: 1rem;
    line-height: 1.5;
    color: #000;
    background-color: transparent;
    background-clip: padding-box;
    border: 3px solid #a2aeb9;
    border-radius: 0.8rem;
    box-shadow:0 0.5rem 1rem rgba(0, 0, 0, 0.15);
`

export const FieldContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
    justify-content: stretch;
    justify-items: stretch;
    width: 100%;

    @media only screen and (max-width: 620px) {
        grid-template-columns: 1fr;
    }
`

export const Select = styled.select`
    width: 100%;
    height: 4rem;
    padding: 0.75rem 0.75rem;
    margin: 0.5rem 0;
    font-size: 1rem;
    line-height: 1.5;
    color: #000;
    background-color: transparent;
    background-clip: padding-box;
    border: 3px solid #a2aeb9;
    border-radius: 0.8rem;
    box-shadow:0 0.5rem 1rem rgba(0, 0, 0, 0.15);
`

export const Area = styled.textarea`
    display: block;
    width: 100%;
    height: 20rem;
    padding: 0.75rem 0.75rem;
    margin: 0.5rem 0;
    font-size: 1rem;
    line-height: 1.5;
    color: #000;
    background-color: transparent;
    background-clip: padding-box;
    border: 3px solid #a2aeb9;
    border-radius: 0.8rem;
    box-shadow:0 0.5rem 1rem rgba(0, 0, 0, 0.15);
`