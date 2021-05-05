import React, { useState } from 'react'
import * as S from './styled'

const Dropdown = ({children, name}) => {

    const [open, setOpen] = useState(false)

    return (
        <S.NavbarButton onClick={() => setOpen(!open)}>
            {name}
            {open &&
                <S.List>
                    {children}
                </S.List>
            }
        </S.NavbarButton>
    );
}

const DropdownItem = ({children}) => {
  
    return (
        <S.Item>
            {children}
        </S.Item>
    )
}

export {
    Dropdown, 
    DropdownItem
}