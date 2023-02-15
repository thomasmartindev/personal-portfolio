import { createContext, useState } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Divider } from './components/utilities/Divider'
import { About } from './components/About/About'
import { Projects } from './components/Projects/Projects'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Menu } from './components/Menu'

export const MenuContext = createContext()

export const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  return (
    <>
      <MenuContext.Provider 
        value={{
          isMenuOpen,
          setIsMenuOpen
        }}
      >
        <Navbar />
        <Menu />
      </MenuContext.Provider>
      <Hero />
      <Divider />
      <About />
      <Projects />
      <Divider />
      <Contact />
      <Footer />
    </>
  )
}