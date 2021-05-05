import React, { useState } from 'react'
import * as S from './styled'

const Dropdown = ({children, name}) => {

    const [open, setOpen] = useState(false)

    return (
        <S.Menu onClick={() => setOpen(!open)}>
            {name}
            {open &&
                <S.List>
                    {children}
                </S.List>
            }
        </S.Menu>
    );
}

export default Dropdown;