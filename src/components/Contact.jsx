import styled from 'styled-components'
import { Heading } from './utilities/Heading'
import { FaGithub } from 'react-icons/fa'
import { useRef, useState } from 'react'
import { Arrow, ButtonWrapper } from './utilities/Button'
import emailjs from '@emailjs/browser'

export const Contact = () => {
  const [form, setForm] = useState({
    confirmation: '',
    email: '',
    message: '',
    name: '',
    subject: ''
  })

  const formRef = useRef()

  const sendEmail = e => {
    e.preventDefault()

    emailjs.sendForm(
      import.meta.env.VITE_SERVICE_ID, 
      import.meta.env.VITE_TEMPLATE_ID, 
      formRef.current, 
      import.meta.env.VITE_PUBLIC_KEY
    ).then(() => {
      setForm({
        ...form,
        confirmation: 'Message Sent!',
        email: '',
        message: '',
        name: '',
        subject: ''
      })
    }, (err) => {
      setForm({
        confirmation: err.text,
        email: '',
        message: '',
        name: '',
        subject: ''
      })
    })

    setForm({
      confirmation: 'Sending Message...',
      email: '',
      message: '',
      name: '',
      subject: ''
    })
  }

  return (
    <Container
      id='contact'
    >
      <Heading>
        <span>
          03.
        </span>
        <span>
          Contact
        </span>
      </Heading>
      <Description>
        I'm currently looking for an opportunity. Feel free to send me a message and I will get back to you ASAP.
      </Description>
      <FormContainer>
        <Link
          href='https://github.com/thomasmdevelopment'
          target='_blank'
        >
          <Github />
        </Link>
        <Form
          onSubmit={sendEmail}
          ref={formRef}
        >
          {
            form.confirmation
              ? <p>{form.confirmation}</p>
              : null
          }
          <input
            autoComplete='off'
            name='user_name'
            onChange={e => setForm({ 
              ...form, 
              confirmation: '', 
              name: e.target.value 
            })}
            placeholder='Name'
            required
            type='text'
            value={form.name}
          />
          <input
            autoComplete='off'
            name='user_email'
            onChange={e => setForm({ 
              ...form, 
              confirmation: '', 
              email: e.target.value 
            })}
            placeholder='Email'
            required
            type='email'
            value={form.email}
          />
          <input
            autoComplete='off'
            name='subject'
            onChange={e => setForm({ 
              ...form, 
              confirmation: '', 
              subject: e.target.value 
            })}
            placeholder='Subject'
            required
            type='text'
            value={form.subject}
          />
          <textarea
            name='message'
            onChange={e => setForm({ 
              ...form, 
              confirmation: '', 
              message: e.target.value 
            })}
            placeholder='Message'
            required
            type='text'
            value={form.message}
          />
          <ButtonWrapper
            type='submit'
          >
            Send
            <Arrow />
          </ButtonWrapper>
        </Form>
      </FormContainer>
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

const Description = styled.p`
  font-size: 2rem;
  line-height: 1.6;

  @media (max-width: 1200px) {
    font-size: 1.8rem;
  }

  @media (max-width: 700px) {
    font-size: 1.6rem;
    margin-top: -2rem;
  }
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
`

const FormContainer = styled.div`
  column-gap: 4rem;
  display: flex;
  justify-content: flex-end;
  padding: 4rem;

  @media (max-width: 840px) {
    flex-direction: column;
    padding: 0;
    row-gap: 4rem;
  }
`

const Github = styled(FaGithub)`
  color: #FFFFFF;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover { 
    transform: rotate(360deg) scale(1.2);
  }
`

const Link = styled.a`
  display: flex;
  font-size: 4rem;
  width: fit-content;

  @media (max-width: 500px) {
    font-size: 3rem;
  }
`