import React from 'react'
import * as S from "./styled"

const HowItWorks = () => {

  return (
    <S.HowItWorks>
        <S.Wrapper>
        <S.Title>Como funciona?</S.Title>
        <S.ContentWrapper>
            <S.Captacao/>
            <S.Impacto/>
            <S.Perpetuidade/>
            <S.SecondTitle>Captação</S.SecondTitle>
            <S.SecondTitle>Impacto</S.SecondTitle>
            <S.SecondTitle>Perpetuidade</S.SecondTitle>
            <S.Text>
                Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit, sed do 
                eiusmod tempor incididunt ut labore et 
                dolore magna aliqua. Ut enim ad minim 
                veniam, quis nostrud exercitatio.
            </S.Text>
            <S.Text>
                Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit, sed do 
                eiusmod tempor incididunt ut labore et 
                dolore magna aliqua. Ut enim ad minim 
                veniam, quis nostrud exercitatio.
            </S.Text>
            <S.Text>
                Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit, sed do 
                eiusmod tempor incididunt ut labore et 
                dolore magna aliqua. Ut enim ad minim 
                veniam, quis nostrud exercitatio.
            </S.Text>
        </S.ContentWrapper>
        <S.MoneyText>Atualmente, temos</S.MoneyText>
        <S.MoneyTitle>R$1.132.500,75</S.MoneyTitle>
        <S.MoneyText>Ajude a construir nosso fundo patrimonial doando <b>qualquer quantia!</b></S.MoneyText>
        </S.Wrapper>
    </S.HowItWorks>
  )
}

export default HowItWorks