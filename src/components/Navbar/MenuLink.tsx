import {navigate} from '@jaenjs/jaen'
import clsx from 'clsx'
import React, {useContext} from 'react'
import {logoutUser} from '../../model/model.api'
import {Path} from '../../model/model.routes'
import {AuthContext} from '../../providers/AuthProvider'

export default function MenuLink(props: {
  route: {
    href: string
    label: string
    newTab?: boolean
    clearAuthState?: boolean
  }
  isRouteActive: boolean
  variant: 'mobile' | 'desktop'
  setMobileNavBarOpen?: React.Dispatch<React.SetStateAction<boolean>>
}) {
  const {setValue: setUser} = useContext(AuthContext)

  return (
    <a
      onClick={async () => {
        props.setMobileNavBarOpen?.(false)
        if (props.route.clearAuthState) {
          await logoutUser()
          setUser(undefined)
          // navigate to home page
          navigate(Path.Login)
        } else {
          navigate(props.route.href)
        }
      }}
      className={clsx(
        'cursor-pointer transform hover:text-primary hover:scale-105 duration-300',
        {
          ['font-bold text-primary']: props.isRouteActive,
          ['hidden lg:block']: props.variant === 'desktop',
          ['block lg:hidden']: props.variant === 'mobile'
        }
      )}>
      {props.route.label}
    </a>
  )
}
