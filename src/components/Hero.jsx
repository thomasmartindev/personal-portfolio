import styled from 'styled-components'
import image from '../assets/wave.svg'

export const Hero = () => {
  return (
    <Container>
      <Heading>
        <h1>
          THOMAS
        </h1>
        <h1>
          MARTIN
        </h1>
        <h1>
          FRONT-END
        </h1>
        <h1>
          DEVELOPER
        </h1>
      </Heading>
      <Image
        alt='wave'
        src={image}
      />
    </Container>
  )
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  font-family: 'Sora';
  font-size: 14rem;
  margin: 0 auto;
  max-width: 1400px;
  padding: 8rem 16rem;

  @media (max-width: 1600px) {
    font-size: 8.75vw;
    max-width: 87.5vw;
    padding: 5vw 10vw;
  }

  @media (max-width: 1200px) {
    font-size: 10vw;
    padding: 5vw;
  }

  @media (max-width: 800px) {
    padding-top: 0;
  }

  @media (max-width: 500px) {
    font-size: 11vw;
    max-width: 92.5vw;
  }

  @media (max-width: 400px) {
    font-size: 12vw;
    max-width: 95vw;
  }
`

const Heading = styled.div`
  line-height: 1.1;
	-webkit-animation: fade-in-bottom 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
	        animation: fade-in-bottom 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
  
  @-webkit-keyframes fade-in-bottom {
    0% {
      -webkit-transform: translateY(75px);
              transform: translateY(75px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateY(0);
              transform: translateY(0);
      opacity: 1;
    }
  }
  
  @keyframes fade-in-bottom {
    0% {
      -webkit-transform: translateY(75px);
              transform: translateY(75px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateY(0);
              transform: translateY(0);
      opacity: 1;
    }
  }

  & h1:nth-child(1) {
    font-weight: 200;
    margin-top: 2rem;

    @media (max-width: 1600px) {
      margin-top: 1.25vw;
    }
  }

  & h1:nth-child(2) {
    font-weight: 200;
    margin-left: 8rem;

    @media (max-width: 1600px) {
      margin-left: 5vw;
    }

    @media (max-width: 400px) {
      margin-left: 4vw;
    }
  }

  & h1:nth-child(3) {
    font-weight: 600;
    margin-left: 16rem;

    @media (max-width: 1600px) {
      margin-left: 10vw;
    }

    @media (max-width: 400px) {
      margin-left: 8vw;
    }
  }

  & h1:nth-child(4) {
    font-weight: 600;
    margin-left: 24rem;

    @media (max-width: 1600px) {
      margin-left: 15vw;
    }

    @media (max-width: 400px) {
      margin-left: 12vw;
    }
  }
`

const Image = styled.img`
  height: 650px;
  opacity: 0.15;
  margin-left: 20rem;
  position: absolute;
  z-index: -1;

  @media (max-width: 1600px) {
    height: 40.625vw;
    margin-left: 12.5vw;
  }

  @media (max-width: 1200px) {
    height: 45vw;
  }

  @media (max-width: 500px) {
    height: 50vw;
  }

  @media (max-width: 400px) {
    height: 54vw;
    margin-left: 11vw;
  }
`