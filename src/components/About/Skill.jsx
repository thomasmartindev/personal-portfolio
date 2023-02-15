import styled from 'styled-components'

export const Skill = ({ logo, name }) => {
  return (
    <Container
      name={name}
    >
      <img
        alt={name}
        src={logo}
      />
      <p>
        {name}
      </p>
    </Container>
  )
}

const Container = styled.div`
  border: 1px solid ${({ theme }) => theme.border};
  border-style: dotted;
  display: flex;
  flex-direction: column;
  font-size: 1.2rem;
  height: 120px;
  width: 120px;

  & img:nth-child(1) {
    align-self: center;
    flex: 1;
    height: 50%;
    padding: 1rem 0;
    width: ${({ name }) => name === 'STYLED-COMPONENTS' ? '50%' : '60%'};

    @media (max-width: 1000px) {
      padding: ${({ name }) => name === 'STYLED-COMPONENTS' ? '1rem 0' : '0.5rem 0'};
      width: ${({ name }) => name === 'STYLED-COMPONENTS' ? '40%' : '60%'};
    }
  }

  & p:nth-child(2) {
    margin-bottom: 1rem;
    text-align: center;

    @media (max-width: 1000px) {
      margin-bottom: 0.5rem;
    }
  }

  @media (max-width: 1000px) {
    height: 100px;
    width: 100px;
  }

  @media (max-width: 438px) {
    height: 90px;
    width: 90px;
  }
`