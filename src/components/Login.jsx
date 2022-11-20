import { useState, useRef } from 'react'
import login from '../api-client/login'
import {
  Title,
  Form,
  Input,
  InputContainer,
  Button,
  Error,
  LoginWrapper,
  Label,
  FormControl
} from '../styles'

const emailMaxLength = 50
const passwordMinLength = 4

const validateEmail = email => {
  const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g
  return email.length <= emailMaxLength && regex.test(email)
}

const errors = {
  email: 'Not a valid email',
  password: 'Password must be at least 4 characters'
}

function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [serverError, setServerError] = useState(null)
  const [isFormSubmitting, setIsFormSubmitting] = useState(false)
  const isEmailTouched = useRef(false)
  const isPasswordTouched = useRef(false)

  const isEmailValid = validateEmail(email)
  const isPasswordValid = password.length >= passwordMinLength
  const isFormValid = isEmailValid && isPasswordValid

  function handleEmailChange(event) {
    setEmail(event.target.value)
    isEmailTouched.current = true
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value)
    isPasswordTouched.current = true
  }

  function handleSubmit(event) {
    event.preventDefault()
    if (!isFormValid) {
      return
    }

    setIsFormSubmitting(true)
    setServerError(null)
    login(email, password).then(onLogin, error => {
      setServerError(error)
      setIsFormSubmitting(false)
    })
  }

  const hasEmailError = isEmailTouched.current && !isEmailValid
  const hasPasswordError = isPasswordTouched.current && !isPasswordValid
  const isSubmitButtonDisabled = isFormSubmitting || !isFormValid

  return (
    <LoginWrapper>
      <Title>Rapptr Labs</Title>
      <Form onSubmit={handleSubmit}>
        <FormControl>
          <Label htmlFor="email">Email</Label>
          <InputContainer>
            <span className="material-symbols-outlined">person</span>
            <Input
              type="text"
              id="email"
              placeholder="user@rapptrlabs.com"
              maxLength={emailMaxLength}
              value={email}
              onChange={handleEmailChange}
              className={hasEmailError ? 'error' : ''}
            />
          </InputContainer>
          {hasEmailError && <Error>{errors.email}</Error>}
        </FormControl>
        <FormControl>
          <Label htmlFor="password">Password</Label>
          <InputContainer>
            <span className="material-symbols-outlined">lock</span>
            <Input
              type="password"
              id="password"
              placeholder="Must be at least 4 characters"
              value={password}
              onChange={handlePasswordChange}
              className={hasPasswordError ? 'error' : ''}
            />
          </InputContainer>
          {hasPasswordError && <Error>{errors.password}</Error>}
        </FormControl>
        <Button
          className="primary login"
          type="submit"
          disabled={isSubmitButtonDisabled}
        >
          Login
        </Button>
        {serverError && <Error className="center">{serverError}</Error>}
      </Form>
    </LoginWrapper>
  )
}

export default Login
