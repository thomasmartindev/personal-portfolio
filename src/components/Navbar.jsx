import { useContext } from 'react'
import { MenuContext } from '../App'
import styled from 'styled-components'
import { Link } from 'react-scroll'
import { RxHamburgerMenu } from 'react-icons/rx'

export const Navbar = () => {
  const menu = useContext(MenuContext)

  return (
    <Container>
      <MenuButton
        onClick={() => menu.setIsMenuOpen(true)}
      />
      <StyledLink
        smooth={true}
        to='about'
      >
        About
      </StyledLink>
      <StyledLink
        smooth={true}
        to='projects'
      >
        Projects
      </StyledLink>
      <StyledLink
        smooth={true}
        to='contact'
      >
        Contact
      </StyledLink>
    </Container>
  )
}

const Container = styled.nav`
  column-gap: 15rem;
  display: flex;
  font-family: 'Sora';
  font-size: 2rem;
  justify-content: center;
  margin: 0 auto;
  max-width: 1400px;
  padding: 4rem 16rem 0;
  -webkit-animation: slide-in-top 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	        animation: slide-in-top 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  
  @-webkit-keyframes slide-in-top {
    0% {
      -webkit-transform: translateY(-75px);
              transform: translateY(-75px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateY(0);
              transform: translateY(0);
      opacity: 1;
    }
  }
  
  @keyframes slide-in-top {
    0% {
      -webkit-transform: translateY(-75px);
              transform: translateY(-75px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateY(0);
              transform: translateY(0);
      opacity: 1;
    }
  }

  @media (max-width: 1200px) {
    font-size: 1.8rem;
    column-gap: 10rem;
    padding: 3rem 16rem 0;
  }

  @media (max-width: 1000px) {
    font-size: 1.6rem;
    column-gap: 8rem;
  }

  @media (max-width: 800px) {
    justify-content: flex-end;
    max-width: 87.5vw;
    padding: 4rem 5vw 0;
  }

  @media (max-width: 600px) {
    padding-top: 2rem;
  }

  @media (max-width: 400px) {
    padding-top: 1.5rem;
  }
`

const MenuButton = styled(RxHamburgerMenu)`
  cursor: pointer;
  height: 25px;
  width: 25px;

  &:hover {
    opacity: 0.7;
  }

  @media (min-width: 801px) {
    display: none;
  }

  @media (max-width: 400px) {
    height: 20px;
    width: 20px;
  }
`

const StyledLink = styled(Link)`
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }

  @media (max-width: 800px) {
    display: none;
  }
`