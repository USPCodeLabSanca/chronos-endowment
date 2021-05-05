import React from 'react'
import * as S from "./styled"

import MenuItem from '../../components/MenuItem'
import {Dropdown, DropdownItem} from './Dropdown'

const Navbar = () => {

  return (
    <S.Navbar>

      <S.Brand/>

      <S.NavbarMenus>
        
          <S.Menu>Como Funciona</S.Menu>

          <S.Menu>Sobre Nós</S.Menu>

          <Dropdown name={'Doadores ▼'}>
              <DropdownItem>Tipos e Beneficios</DropdownItem>
              <DropdownItem>Conheça os nossos</DropdownItem>
          </Dropdown>

          <Dropdown name={'Voluntariado ▼'}>
              <DropdownItem>Voluntários e Parceiros</DropdownItem>
              <DropdownItem>Quero me voluntariar</DropdownItem>
          </Dropdown>

          <S.Menu>Contato</S.Menu>

      </S.NavbarMenus>

      <S.SideButtons>
          <S.Button backgroundColor='#FFFFFF' fontColor='#13294B'>Entrar</S.Button>
          <S.Button backgroundColor='#13294B' fontColor='#FFFFFF'>Quero doar</S.Button>
      </S.SideButtons> 

    </S.Navbar>
  )
}

export default Navbar