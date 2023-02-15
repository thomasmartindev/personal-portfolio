import styled from 'styled-components'

export const Divider = styled.hr`
  background-color: ${({ theme }) => theme.border};
  border: none;
  height: 1px;
  margin: 0 auto;
  width: 1200px;

  @media (max-width: 1400px) {
    max-width: 85vw;
  }
`