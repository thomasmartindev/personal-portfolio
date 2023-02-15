import styled from 'styled-components'
import { BsArrowLeft } from 'react-icons/bs'

export const Arrow = styled(BsArrowLeft)`
  height: 25px;
  rotate: calc(135deg);
  transition: rotate 0.1s ease-in-out;
  width: 25px;

  @media (max-width: 1200px) {
    height: 22.5px;
    width: 22.5px;
  }

  @media (max-width: 1100px) {
    height: 25px;
    width: 25px;
  }

  @media (max-width: 700px) {
    height: 22.5px;
    width: 22.5px;
  }

  @media (max-width: 500px) {
    height: 20px;
    width: 20px;
  }

  @media (max-width: 400px) {
    height: 17.5px;
    width: 17.5px;
  }
`

export const ButtonWrapper = styled.button`
  align-items: center;
  background: none;
  border: none;
  color: #FFFFFF;
  column-gap: 0.5rem;
  cursor: pointer;
  display: flex;
  font-family: 'Open Sans';
  font-size: 2rem;
  outline: none;
  width: fit-content;

  &:hover {
    opacity: 0.7;

    & ${Arrow}:nth-child(1) {
      rotate: calc(180deg);
    }
  }

  @media (max-width: 1200px) {
    font-size: 1.8rem;
  }

  @media (max-width: 1100px) {
    font-size: 2rem;
  }

  @media (max-width: 700px) {
    font-size: 1.8rem;
  }

  @media (max-width: 500px) {
    font-size: 1.6rem;
  }

  @media (max-width: 400px) {
    font-size: 1.5rem;
  }
`