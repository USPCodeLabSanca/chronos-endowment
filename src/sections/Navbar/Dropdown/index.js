import React, { useState } from 'react'
import * as S from './styled'

import { MenuItems } from './MenuItems'

function Dropdown() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
      >
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <a
                to={item.path}
                onClick={() => setClick(false)}
              >
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown;