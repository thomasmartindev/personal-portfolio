import styled from 'styled-components'

export const Heading = styled.h2`
  font-family: 'Sora';
  font-weight: 400;

  & span:nth-child(1) {
    font-size: 2rem;

    @media (max-width: 1200px) {
      font-size: 1.8rem;
    }

    @media (max-width: 700px) {
      font-size: 1.6rem;
    }
  }

  & span:nth-child(2) {
    font-size: 3.5rem;
    margin-left: 0.4rem;

    @media (max-width: 1200px) {
      font-size: 3.2rem;
    }

    @media (max-width: 700px) {
      font-size: 2.8rem;
    }
  }
`