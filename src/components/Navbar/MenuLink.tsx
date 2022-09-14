import {navigate} from '@jaenjs/jaen'
import {useLocation} from '@reach/router'
import clsx from 'clsx'
import React, {useContext} from 'react'
import {getLangRootNavigationPath} from '../../common/getLangRootNavigationPath'
import {logoutUser} from '../../model/model.api'
import {Path} from '../../model/model.routes'
import {AuthContext} from '../../providers/AuthProvider'

export default function MenuLink(props: {
  route: {
    href: string
    label: string
    newTab?: boolean
    clearAuthState?: boolean
    languageSpecific?: boolean
  }
  isRouteActive: boolean
  variant: 'mobile' | 'desktop'
  setMobileNavBarOpen?: React.Dispatch<React.SetStateAction<boolean>>
}) {
  const {setValue: setUser} = useContext(AuthContext)

  const location = typeof window !== 'undefined' ? useLocation() : null

  return (
    <a
      onClick={async () => {
        props.setMobileNavBarOpen?.(false)
        if (props.route.clearAuthState) {
          await logoutUser()
          setUser(undefined)

          if (props.route.languageSpecific === false) {
            navigate(Path.Login)
          } else {
            navigate(getLangRootNavigationPath(location?.pathname, Path.Login))
          }

          // navigate to home page
        } else {
          if (props.route.languageSpecific === false) {
            navigate(props.route.href)
          } else {
            navigate(
              getLangRootNavigationPath(location?.pathname, props.route.href)
            )
          }
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
