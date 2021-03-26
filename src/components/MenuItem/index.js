import React, { useState } from 'react'
import * as S from "./styled"

const MenuItem = ({children, name}) => {
    const [open, setOpen] = useState(false);
  
    return (
        <S.Menu onClick={() => setOpen(!open)}>
            {name}
            {open && children}
        </S.Menu>
    )
}

export default MenuItem