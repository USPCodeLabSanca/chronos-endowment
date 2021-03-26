import React from 'react'
import * as S from "./styled"

const DropdownMenu = ({children}) => {
  
    return (
        <S.Menu>
            {children}
        </S.Menu>
    )
}

export default DropdownMenu

const DropdownItem = ({children}) => {
  
    return (
        <S.Item>
            {children}
        </S.Item>
    )
}

export {
    DropdownItem
}
  
