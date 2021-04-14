import React from 'react'
import * as S from "./styled"

import governanceSVG from '../../images/SVG/governance.svg'
import Button from '../../components/Button'

const Governance = () => {

  return (
    <S.Governance>
        <S.Graphism/>
        <S.Wrapper>
            <S.Title>Sobre Nós</S.Title>
            <S.TextTitle>Nossa associação possui uma estrutura robusta e transparente de governança corporativa</S.TextTitle>
            <S.govImg src={governanceSVG}/>
            <Button
                    fontColor='#13294B'
                    backgroundColor='#fff'
                    fontSize='1.5rem' 
                    width='50%'
                >
                    Baixe o nosso estatuto
            </Button>
        </S.Wrapper>
    </S.Governance>
  )
}

export default Governance