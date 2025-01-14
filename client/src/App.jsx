import { useState } from 'react'

import { Outlet } from 'react-router-dom'

import HeaderContainer from './components/layout/HeaderContainer'
import MenuContainer from './components/layout/MenuContainer'
import FooterContainer from './components/layout/FooterContainer'

function App () {
  const [ menuActive, setMenuActive ] = useState(false)
  return (
    <div className="App">
      <h1>livingtheOKlife</h1>
      <HeaderContainer menuActive={menuActive} setMenuActive={setMenuActive} />
      <MenuContainer menuActive={menuActive} />
      <Outlet />
      <FooterContainer />
    </div>
  )
}

export default App
