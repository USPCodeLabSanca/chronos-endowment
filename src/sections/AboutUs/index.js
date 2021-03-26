import React from 'react'
import * as S from "./styled"

import caaso from '../../images/caaso.jpeg';

const AboutUs = () => {

  return (
    <S.AboutUs>
        <S.Graphism/>
        <S.Wrapper>
            <S.Title>Sobre Nós</S.Title>
            <S.SecondTitle>Nosso Propósito</S.SecondTitle>
            <S.ContentWrapper>
                <S.TextTitle>Visão</S.TextTitle>
                <S.TextTitle>Missão</S.TextTitle>
                <S.TextTitle>Valores</S.TextTitle>
                <S.Text>
                    Ser o fundo patrimonial, com 
                    estrutura exemplar de governança, 
                    que gere o melhor impacto edicado 
                    ao apoio do ensino superior público no Brasil.
                </S.Text>
                <S.Text>
                    Investir no desenvolvimento humano e inovador da USP 
                    de São Carlos, contribuindo com a consolidação de um 
                    universidade de ponto a nível mundial no Brasil.
                </S.Text>
                <S.Text>
                    Ética, governança, transparência, confiabilidade, 
                    perenidade,  independência, contribuição à 
                    sociedade e inovação.
                </S.Text>
            </S.ContentWrapper>
            <S.SecondTitle2>A USP São Carlos</S.SecondTitle2>
            <S.ContentWrapper2>
                <S.CAASO src={caaso}/>
                <S.Text2>
                A USP atualmente se encontra na 115ª posição entre as melhores 
                universidades do mundo, no 1° lugar na América Latina e na 7ª
                posição como universidade com maior produção de pesquisa. 
                Nossa universidade evolui todos os dias e o campus São Carlos 
                hoje conta com uma comunidade de mais de 8.000 alunos, 
                professores e funcionários. Ainda assim, estamos longe de 
                atingir nosso potencial máximo.
                </S.Text2>
            </S.ContentWrapper2>
        </S.Wrapper>
    </S.AboutUs>
  )
}

export default AboutUs