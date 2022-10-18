import {CircularProgress} from '@mui/material'
import React, {createContext, ReactNode, useState} from 'react'
import {getPrivateRoutes} from '../model/model.routes'
import {OptionalBaseProviderType} from '../model/types/type.provider'
import {User} from '../model/types/type.user'

export const AuthContext = createContext<OptionalBaseProviderType<User>>({
  setValue: () => {}
})

interface AuthProviderProps {
  path: string
  children: ReactNode
}

const isBrowser = typeof window !== 'undefined'

const privateRoutes = getPrivateRoutes()

const getUser = (): User | undefined => {
  if (isBrowser) {
    const userCoco = document.cookie
      .split('; ')
      .find(row => row.startsWith('U='))
    if (userCoco) {
      const urlEncoded = userCoco.split('=')[1]
      const decoded = decodeURIComponent(urlEncoded)

      console.log('decoded', decoded)

      const user = JSON.parse(decoded)

      return user
    }
  }
}

export default function AuthProvider({path, children}: AuthProviderProps) {
  const [user, setUser] = useState<User | undefined>(getUser())

  React.useEffect(() => {
    let lastCookie = ''

    const interval = setInterval(() => {
      if (lastCookie !== document.cookie) {
        const user = getUser()

        setUser(user)

        lastCookie = document.cookie
      }
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const isOnPrivateRoute = (() => {
    if (!isBrowser) return false

    return privateRoutes.some(
      route => route.href === window.location.pathname.replace(/\/$/, '')
    )
  })()

  if (isOnPrivateRoute && !user) {
    return (
      <div
        className={
          'w-screen h-screen flex justify-center items-center relative'
        }>
        <CircularProgress size={50} />
      </div>
    )
  }

  return (
    <AuthContext.Provider value={{value: user, setValue: setUser}}>
      {children}
    </AuthContext.Provider>
  )
}
