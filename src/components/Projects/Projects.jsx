import styled from 'styled-components'
import { Heading } from '../utilities/Heading'
import { Project } from './Project'
import { projects } from '../../constants/projects'
import { decode } from 'html-entities'

export const Projects = () => {
  const projectItems = projects.map(item =>
    <Project
      github={item.github}
      image={item.image}
      info={item.info}
      key={item.id}
      title={item.title}
      website={item.website}
    />
  )

  return (
    <Container
      id='projects'
    >
      <Heading>
        <span>
          02.
        </span>
        <span>
          Projects
        </span>
      </Heading>
      <ProjectList>
        {projectItems}
      </ProjectList>
      <Text>
        <em>
          For more projects, checkout{decode('&#160;')}
          <a 
            href='https://github.com/thomasmartindev?tab=repositories'
            target='_blank'
          >
            my repositories
          </a>
          {decode('&#160;')}on GitHub.
        </em>
      </Text>
    </Container>
  )
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  font-family: 'Open Sans';
  font-weight: 400;
  margin: 0 auto;
  max-width: 1400px;
  padding: 8rem 16rem;
  row-gap: 5rem;

  @media (max-width: 1400px) {
    max-width: 87.5vw;
    padding: 5vw;
  }

  @media (max-width: 700px) {
    padding: 3.5rem 5vw;
  }
`

const ProjectList = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 20rem;

  @media (max-width: 1100px) {
    row-gap: 15rem;
  }

  @media (max-width: 700px) {
    row-gap: 12.5rem;
  }

  @media (max-width: 500px) {
    row-gap: 10rem;
  }
`

const Text = styled.p`
  align-self: center;
  font-size: 1.8rem;
  line-height: 1.6;
  padding: 4rem 0 2rem;
  text-align: center;

  & a:nth-child(1) {
    color: #FFFFFF;
    text-decoration: underline;
  }

  @media (max-width: 700px) {
    font-size: 1.6rem;
  }
`