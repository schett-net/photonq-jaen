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

export default function AuthProvider({path, children}: AuthProviderProps) {
  const [user, setUser] = useState<User | undefined>(() => {
    if (isBrowser) {
      const user = localStorage.getItem('user')
      return user ? JSON.parse(user) : undefined
    }
  })

  React.useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user))
    } else {
      localStorage.removeItem('user')
    }
  }, [user])

  if (isBrowser) {
    if (
      !user &&
      getPrivateRoutes().some(route => route.href === window.location.pathname)
    ) {
      return (
        <div className={'w-screen h-screen flex justify-center items-center'}>
          <CircularProgress size={50} />
        </div>
      )
    }
  }

  return (
    <AuthContext.Provider value={{value: user, setValue: setUser}}>
      {children}
    </AuthContext.Provider>
  )
}
