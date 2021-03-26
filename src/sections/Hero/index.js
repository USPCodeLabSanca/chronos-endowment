import React from 'react'
import * as S from "./styled"

import Button from '../../components/Button'

const Hero = () => {

  return (
    <S.Hero>
        <S.Banner>
          <S.ImageWrapper>
            <S.LogoGraphism/>
          </S.ImageWrapper>
          <S.Wrapper>
            <S.Title>Somos o <b>Fundo Patrimonial</b> da USP São Carlos</S.Title>
            <Button fontSize='2rem' fontColor='#FFFFFF' width='45%'>Quero Doar</Button>
            <Button fontSize='2rem' fontColor='#FFFFFF' width='45%'>Quero ser voluntário</Button>
          </S.Wrapper> 
        </S.Banner>
    </S.Hero>
  )
}

export default Hero