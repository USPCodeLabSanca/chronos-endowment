import React, { useState } from 'react'
import * as S from './styled'

import { MenuItems } from './MenuItems'

function Dropdown() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <S.List
        onClick={handleClick}
        className={click ? 'clicked' : ''}
      >
        {MenuItems.map((item, index) => {
          return (
            <S.Item key={index}>
              <S.Link
                to={item.path}
                onClick={() => setClick(false)}
              >
                {item.title}
              </S.Link>
            </S.Item>
          );
        })}
      </S.List>
    </>
  );
}

export default Dropdown;