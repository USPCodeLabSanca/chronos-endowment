import React from 'react'
import * as S from "./styled"

const Button = ({children, fontColor, backgroundColor, fontSize, height, width}) => {

  return (
  <S.Wrapper fontColor={fontColor} backgroundColor={backgroundColor} fontSize={fontSize} height={height} width={width}>
    {children}
  </S.Wrapper>
  )
}

export default Button