import {Field, navigate} from '@jaenjs/jaen'
import {Alert, Snackbar, TextField} from '@mui/material'
import {red} from '@mui/material/colors'
import {Link} from 'gatsby'
import React, {useState} from 'react'
import {useTranslation} from 'react-i18next'

import {resetPassword} from '@snek-functions/origin'

import {Path} from '../../model/model.routes'
import LoadingButton from '../LoadingButton'
import AuthFormContainer from './AuthFormContainer'
import PasswordField from './PasswordField'

interface PasswordResetValues {
  password: string
  passwordConfirmation: string
}

interface PasswordResetRequestValues {
  email: string
}

const getResetTokenFromWindowLocation = (): string | null => {
  if (typeof window === 'undefined') {
    return null
  }

  // get the token from the window location query string
  const searchParams = new URLSearchParams(window.location.search)
  const token = searchParams.get('token')

  return token
}

export default function PasswordResetForm() {
  const location = typeof window !== 'undefined' ? window.location : null

  const {t} = useTranslation()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [resetRequested, setResetRequested] = React.useState(false)
  const [passwordResetValues, setPasswordResetValues] =
    useState<PasswordResetValues>({
      password: '',
      passwordConfirmation: ''
    })

  const [passwordResetRequestValues, setPasswordResetRequestValues] =
    useState<PasswordResetRequestValues>({
      email: ''
    })

  // If the token is present in the window location, we are in the reset step.
  // Otherwise, we are in the request step.
  const [resetToken, setResetToken] = useState(
    getResetTokenFromWindowLocation()
  )

  React.useEffect(() => {
    setResetToken(getResetTokenFromWindowLocation())
  }, [location])

  const handleResetOnChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    key: keyof PasswordResetValues
  ) => {
    setPasswordResetValues(prev => ({...prev, [key]: e.target.value}))
  }

  const handleResetRequestOnChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    key: keyof PasswordResetRequestValues
  ) => {
    setPasswordResetRequestValues(prev => ({...prev, [key]: e.target.value}))
  }

  const reset = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      setError('')

      if (resetToken === null) {
        await resetPassword({
          email: passwordResetRequestValues.email
        })
        setResetRequested(true)
      } else {
        if (
          passwordResetValues.password ===
          passwordResetValues.passwordConfirmation
        ) {
          await resetPassword({
            password: passwordResetValues.password,
            token: resetToken
          })

          // Redirect to the login page
          navigate(Path.Login)
        } else {
          throw new Error('Passwords do not match')
        }
      }
    } catch (e) {
      setError(e.message)
    } finally {
      setIsLoading(() => false)
    }
  }

  return (
    <>
      <AuthFormContainer
        header={<Field.Text name="reset" defaultValue="Reset password" />}
        onSubmit={e => reset(e)}>
        {resetToken === null ? (
          <>
            <Field.Text
              name="resetRequest"
              defaultValue="Reset your password by entering your email address below. You will
            receive an email with a link to reset your password."
            />

            <TextField
              disabled={resetRequested}
              value={passwordResetRequestValues.email}
              onChange={e => handleResetRequestOnChange(e, 'email')}
              fullWidth
              required
              variant={'outlined'}
              type={'email'}
              label={t('Email Address')}
            />
          </>
        ) : (
          <>
            <PasswordField
              value={passwordResetValues.password}
              handleOnChange={e => handleResetOnChange(e, 'password')}
              required
              fullWidth
              label={'Password *'}
            />
            <PasswordField
              value={passwordResetValues.passwordConfirmation}
              handleOnChange={e =>
                handleResetOnChange(e, 'passwordConfirmation')
              }
              required
              fullWidth
              label={'Confirm Password *'}
            />
          </>
        )}

        <LoadingButton
          disabled={resetRequested}
          text={t('Reset password')}
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
          <div
            className={
              'flex space-x-5 underline cursor-pointer text-primary duration-300'
            }>
            <Link to={Path.Login}>
              <p>{t('Back to login')}</p>
            </Link>
          </div>
        </div>
      </AuthFormContainer>
      <Snackbar open={resetRequested} autoHideDuration={2000}>
        <Alert variant="filled" severity="success" sx={{width: '100%'}}>
          Reset password email sent! Please check your inbox.
        </Alert>
      </Snackbar>
    </>
  )
}
