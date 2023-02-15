import styled from 'styled-components'
import { Info } from './Info'

export const Project = ({
  github,
  image,
  info,
  title,
  website
}) => {
  return (
    <Container
      title={title}
    >
      <Image
        alt={title}
        src={image}
      />
      <Description
        title={title}
      >
        <Title>
          {title}
        </Title>
        <Info
          github={github}
          itemOne={info[0]}
          itemTwo={info[1]}
          itemThree={info[2]}
          website={website}
        />
      </Description>
    </Container>
  )
}

const Container = styled.li`
  box-shadow: ${({ title }) => title === 'CV Creator'
    ? 'rgba(21, 21, 21, 0.4) 5px 5px, rgba(21, 21, 21, 0.3) 10px 10px, rgba(21, 21, 21, 0.2) 15px 15px, rgba(21, 21, 21, 0.1) 20px 20px, rgba(21, 21, 21, 0.05) 25px 25px'
    : 'rgba(21, 21, 21, 0.4) -5px 5px, rgba(21, 21, 21, 0.3) -10px 10px, rgba(21, 21, 21, 0.2) -15px 15px, rgba(21, 21, 21, 0.1) -20px 20px, rgba(21, 21, 21, 0.05) -25px 25px'
  };
  display: flex;
  flex-direction: ${({ title }) => title === 'CV Creator' ? 'row-reverse' : 'row'};

  @media (max-width: 1371px) {
    box-shadow: none;
  }

  @media (max-width: 1100px) {
    flex-direction: column;
  }
`

const Description = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 1100px) {
    box-shadow: ${({ title }) => title === 'CV Creator'
      ? 'rgba(21, 21, 21, 0.4) 5px 5px, rgba(21, 21, 21, 0.3) 10px 10px, rgba(21, 21, 21, 0.2) 15px 15px, rgba(21, 21, 21, 0.1) 20px 20px, rgba(21, 21, 21, 0.05) 25px 25px'
      : 'rgba(21, 21, 21, 0.4) -5px 5px, rgba(21, 21, 21, 0.3) -10px 10px, rgba(21, 21, 21, 0.2) -15px 15px, rgba(21, 21, 21, 0.1) -20px 20px, rgba(21, 21, 21, 0.05) -25px 25px'
    };
  }
`

const Image = styled.img`
  height: 480px;
  opacity: 0.7;
  width: 480px;

  @media (max-width: 1371px) {
    box-shadow: ${({ alt }) => alt === 'CV Creator'
      ? 'rgba(21, 21, 21, 0.4) 5px 5px, rgba(21, 21, 21, 0.3) 10px 10px, rgba(21, 21, 21, 0.2) 15px 15px, rgba(21, 21, 21, 0.1) 20px 20px, rgba(21, 21, 21, 0.05) 25px 25px'
      : 'rgba(21, 21, 21, 0.4) -5px 5px, rgba(21, 21, 21, 0.3) -10px 10px, rgba(21, 21, 21, 0.2) -15px 15px, rgba(21, 21, 21, 0.1) -20px 20px, rgba(21, 21, 21, 0.05) -25px 25px'
    };
  }

  @media (max-width: 1100px) {
    align-self: center;
    margin-bottom: -20rem;
    z-index: -1;
  }

  @media (max-width: 700px) {
    height: 400px;
    margin-bottom: -15rem;
    width: 400px;
  }

  @media (max-width: 550px) {
    height: 350px;
    width: 350px;
  }

  @media (max-width: 500px) {
    height: 300px;
    margin-bottom: -10rem;
    width: 300px;
  }

  @media (max-width: 400px) {
    height: 250px;
    width: 250px;
  }

  @media (max-width: 330px) {
    height: 225px;
    margin-bottom: -5rem;
    width: 225px;
  }
`

const Title = styled.h3`
  background-color: ${({ theme }) => theme.gold};
  font-family: 'Sora';
  font-size: 2.4rem;
  font-weight: 400;
  margin-left: ${({ children }) => children === 'CV Creator' ? 'auto' : '2rem'};
  margin-right: ${({ children }) => children === 'CV Creator' ? '2rem' : 'auto'};
  padding: 0.8rem 2rem;
  width: fit-content;

  @media (max-width: 1200px) {
    font-size: 2.2rem;
  }

  @media (max-width: 1100px) {
    margin-left: ${({ children }) => children === 'CV Creator' ? 'auto' : 0};
    margin-right: ${({ children }) => children === 'CV Creator' ? 0 : 'auto'}
  }

  @media (max-width: 500px) {
    font-size: 2rem;
    padding: 0.8rem 1.5rem;
  }

  @media (max-width: 400px) {
    font-size: 1.8rem;
  }
`