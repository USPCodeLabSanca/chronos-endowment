import React from 'react'
import * as S from "./styled"

import MenuItem from '../../components/MenuItem'
import DropdownMenu, {DropdownItem} from '../../components/DropdownMenu'

const Navbar = () => {

  return (
    <S.Navbar>

      <S.Brand/>

      <S.NavbarMenus>
        
          <S.Menu>Como Funciona</S.Menu>

          <S.Menu>Sobre Nós</S.Menu>

          <MenuItem name={'Doadores ▼'}>
            <DropdownMenu>
              <DropdownItem>Tipos e Beneficios</DropdownItem>
              <DropdownItem>Conheça os nossos</DropdownItem>
            </DropdownMenu>
          </MenuItem>

          <MenuItem name={'Voluntariado ▼'}>
            <DropdownMenu>
              <DropdownItem>Voluntários e Parceiros</DropdownItem>
              <DropdownItem>Quero me voluntariar</DropdownItem>
            </DropdownMenu>
          </MenuItem>

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