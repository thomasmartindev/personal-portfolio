import { useContext } from 'react'
import { MenuContext } from '../App'
import styled from 'styled-components'
import { MdClose } from 'react-icons/md'
import { Link } from 'react-scroll'


export const Menu = () => {
  const menu = useContext(MenuContext)

  return (
    <>
      <Container
        isMenuOpen={menu.isMenuOpen}
      >
        <ButtonWrapper>
          <CloseButton
            onClick={() => menu.setIsMenuOpen(false)}
          />
        </ButtonWrapper>
        <LinkWrapper>
          <StyledLink
              onClick={() => menu.setIsMenuOpen(false)}
              to='about'
            >
              About
          </StyledLink>
          <StyledLink
            onClick={() => menu.setIsMenuOpen(false)}
            to='projects'
          >
            Projects
          </StyledLink>
          <StyledLink
            onClick={() => menu.setIsMenuOpen(false)}
            to='contact'
          >
            Contact
          </StyledLink>
        </LinkWrapper>
      </Container>
      <Overlay
        isMenuOpen={menu.isMenuOpen}
        onClick={() => menu.setIsMenuOpen(false)}
      />
    </>
  )
}

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`

const CloseButton = styled(MdClose)`
  cursor: pointer;
  height: 25px;
  width: 25px;

  &:hover {
    opacity: 0.7;
  }
`

const Container = styled.div`
  background-color: ${({ theme }) => theme.background};
  display: flex;
  flex-direction: column;
  height: 100%;
  left: ${({ isMenuOpen }) => isMenuOpen ? '0' : '-110%'};
  padding: 2.5rem;
  position: fixed;
  top: 0;
  transition: left 0.75s ease-in-out;
  width: 250px;
  z-index: 2;
`

const LinkWrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  row-gap: 5rem;
`

const Overlay = styled.div`
  background-color: #000000;
  height: 100%;
  opacity: 0.6;
  position: fixed;
  right: ${({ isMenuOpen }) => isMenuOpen ? '0' : '-100%'};
  top: 0;
  transition: right 0.75s ease-in-out;
  width: 100%;
  z-index: 1;
`

const StyledLink = styled(Link)`
  cursor: pointer;
  font-family: 'Sora';
  font-size: 2rem;
  padding-left: 1rem;

  &:hover {
    opacity: 0.7;
  }
`