import styled from 'styled-components'
import { decode } from 'html-entities'

export const Footer = () => {
  return (
    <Container>
      <p>
        {decode('&#169;')} Copyright 2023, Thomas Martin
      </p>
      <Link
        href='https://github.com/thomasmartindev/personal-portfolio'
        target='_blank'
      >
        My portfolio is open source
      </Link>
    </Container>
  )
}

const Container = styled.footer`
  align-items: center;
  display: flex;
  flex-direction: column;
  font-family: 'Open Sans';
  font-size: 1.6rem;
  font-weight: 400;
  justify-content: center;
  margin: 0 auto;
  max-width: 1400px;
  padding: 2rem 0;
  row-gap: 1rem;

  @media (max-width: 700px) {
    font-size: 1.4rem;
  }
`

const Link = styled.a`
  color: #FFFFFF;
  text-decoration: underline;
`