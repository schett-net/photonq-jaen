import clsx from 'clsx'
import {navigate} from 'gatsby'
import Cookies from 'js-cookie'
import React from 'react'

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
  return (
    <a
      onClick={() => {
        props.setMobileNavBarOpen?.(false)
        if (props.route.clearAuthState) {
          Cookies.remove('user')
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
