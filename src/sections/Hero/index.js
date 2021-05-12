import React, { useEffect, useRef } from 'react'
import lottie from 'lottie-web'
import * as S from "./styled"

import Button from '../../components/Button'

const Hero = () => {

  const animation = useRef(null)

  useEffect(() => {
    lottie.loadAnimation({
      container: animation.current,
      renderer: 'svg',
      loop: false,
      autoplay: true,
      animationData: require('../../components/HeroAnimation.json')
    })
  }, [])

  return (
    <S.Hero>
        <S.Banner>
          <S.ImageWrapper>
            <S.LogoAnimation ref={animation}/>
          </S.ImageWrapper>
          <S.Wrapper>
            <S.Title>Somos o <S.Bold>Fundo Patrimonial</S.Bold> da USP São Carlos</S.Title>
            <Button fontSize='2rem' fontColor='#FFFFFF' width='45%'>Quero Doar</Button>
            <Button fontSize='2rem' fontColor='#FFFFFF' width='45%'>Quero ser voluntário</Button>
          </S.Wrapper> 
        </S.Banner>
    </S.Hero>
  )
}

export default Hero