import React, { useState } from 'react'
import * as S from './styled'

const Dropdown = ({children, name}) => {

    const [open, setOpen] = useState(false)

    const [dropdown, setDropdown] = useState(false)

    return (
        <S.NavbarMenu 
            onClick={() => setOpen(!open)}
            onMouseLeave={() => setOpen(false)}
        >
            {name}
            {open &&
                <S.List>
                    {children}
                </S.List>
            }
        </S.NavbarMenu>
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