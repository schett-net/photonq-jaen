import { Field } from '@jaenjs/jaen'
import { TextField } from '@mui/material'
import { red } from '@mui/material/colors'
import { useLocation } from '@reach/router'
import { Link, navigate } from 'gatsby'
import React, { useContext, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { loginWthUserNameAndPassword } from '../../model/model.api'
import { Path } from '../../model/model.routes'
import { LoginCredentials } from '../../model/types/type.auth'
import { AuthContext } from '../../providers/AuthProvider'
import LoadingButton from '../LoadingButton'
import AuthFormContainer from './AuthFormContainer'
import PasswordField from './PasswordField'

export default function LoginForm() {
  const {t} = useTranslation()
  const [isLoading, setIsLoading] = useState(false)
  const {setValue: setUser} = useContext(AuthContext)
  const [error, setError] = useState('')
  const [loginValues, setLoginValue] = useState<LoginCredentials>({
    username: '',
    password: ''
  })

  const location = typeof window !== 'undefined' ? useLocation() : null

  const handleOnChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    key: keyof LoginCredentials
  ) => {
    setLoginValue(prev => ({...prev, [key]: e.target.value}))
  }

  const login = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      await loginWthUserNameAndPassword({
        username: loginValues.username,
        password: loginValues.password
      })
      setError('')
      navigate(Path.MyProjects)
    } catch (e) {
      setError(e.message)
    } finally {
      setIsLoading(() => false)
    }
  }

  return (
    <AuthFormContainer
      header={<Field.Text name="login" defaultValue="Log in to PhotonQ" />}
      onSubmit={e => login(e)}>
      <TextField
        value={loginValues.username}
        onChange={e => handleOnChange(e, 'username')}
        fullWidth
        required
        variant={'outlined'}
        type={'email'}
        label={t('Email Address')}
      />
      <PasswordField
        value={loginValues.password}
        handleOnChange={e => handleOnChange(e, 'password')}
        required
        fullWidth
        label={'Password *'}
      />
      <LoadingButton
        text={t('Log in')}
        isLoading={isLoading}
        fullWidth
        variant={'contained'}
        type={'submit'}
      />
      {error.length ? (
        <div style={{color: red.A700}} className={'flex justify-center'}>
          *{t(error)}
        </div>
      ) : null}
      <div className={'flex justify-center'}>
        <div className={'flex space-x-5 underline cursor-pointer text-primary duration-300'}>
          <Link to={Path.Register}>
            <p className='transform hover:-translate-y-1'>
              {t('Sign up')}
            </p>
          </Link>
          <Link to={Path.Reset}>
            <p className='transform hover:-translate-y-1'>
              {t('Forgot your password?')}
            </p>
          </Link>
        </div>
      </div>
    </AuthFormContainer>
  )
}
