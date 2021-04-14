import React from 'react'

import * as S from "./styled"
import Button from '../../components/Button'

const Form = () => {

  return (
    <S.Form>
        <S.Container>
            <S.Title>Alguma dúvida?</S.Title>
            <S.Subtitle>Entre em contato!</S.Subtitle>
            <S.FormContainer>
                <S.Field type="email" name="email" id="email" placeholder="Seu melhor e-mail"/>
                <S.FieldContainer>
                    <S.Field type="text" name="name" id="nome" placeholder="Seu nome"/>
                    <S.Select
                        id="subject"
                        type="number"
                        name="subject"
                        placeholder="cvc"
                        >
                        <option value="1" selected disabled>Escolher</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                    </S.Select>
                </S.FieldContainer>
                <S.Area name="letter" cols="40" rows="5"></S.Area>
                <Button
                    fontColor='#fff'
                    backgroundColor='#13294B'
                    fontSize='1.5rem' 
                    width='50%'
                >
                    Enviar
                </Button>
            </S.FormContainer>
        </S.Container>
    </S.Form>
  )
}

export default Form