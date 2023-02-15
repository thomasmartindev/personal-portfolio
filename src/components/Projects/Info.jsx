import styled from 'styled-components'
import { Arrow, ButtonWrapper } from '../utilities/Button'

export const Info = ({ 
  github,
  itemOne, 
  itemTwo, 
  itemThree,
  website
}) => {
  return (
    <Container>
      <p>
        {itemOne}
      </p>
      <p>
        {itemTwo}
      </p>
      <p>
        {itemThree}
      </p>
      <Links>
        <ButtonWrapper
          as='a'
          href={website}
          target='_blank'
        >
          Live Preview
          <Arrow />
        </ButtonWrapper>
        <ButtonWrapper
          as='a'
          href={github}
          target='_blank'
        >
          View Code
          <Arrow />
        </ButtonWrapper>
      </Links>
    </Container>
  )
}

const Container = styled.div`
  background-color: #151515;
  color: #FFFFFF;
  display: flex;
  flex: 1;
  flex-direction: column;
  font-size: 1.8rem;
  justify-content: space-between;
  line-height: 1.6;
  padding: 4rem;
  row-gap: 4rem;

  @media (max-width: 1200px) {
    font-size: 1.6rem;
  }

  @media (max-width: 1100px) {
    font-size: 1.8rem;
  }

  @media (max-width: 700px) {
    font-size: 1.6rem;
    padding: 3rem;
    row-gap: 3rem;
  }

  @media (max-width: 400px) {
    font-size: 1.5rem;
  }
`

const Links = styled.div`
  column-gap: 2rem;
  display: flex;
  justify-content: flex-end;
`