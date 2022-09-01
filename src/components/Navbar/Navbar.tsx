import {navigate} from '@jaenjs/jaen'
import clsx from 'clsx'
import React, {useContext, useMemo, useState} from 'react'
import {
  getLoggedInNavbarRoutes,
  getLoggedOutNavbarRoutes
} from '../../common/routes'
import {AuthContext} from '../../providers/AuthProvider'
import MenuLink from './MenuLink'
import ToggleButton from './TogglButton'

export default function Navbar({pathname}: {pathname: string}) {
  const {value: user} = useContext(AuthContext)
  const [mobileNavBarOpen, setMobileNavBarOpen] = useState(false)

  const getRoutes = () => {
    if (user) {
      return getLoggedInNavbarRoutes()
    }
    return getLoggedOutNavbarRoutes()
  }

  const isRouteActive = (href: string) => {
    return false
  }

  const routes = useMemo(() => getRoutes(), [user])

  return (
    <div className={'relative text-lg'}>
      <nav
        className={clsx(
          'left-0 bg-secondary right-0 border-b z-30 flex justify-center',
          {
            ['absolute']: !mobileNavBarOpen,
            ['fixed']: mobileNavBarOpen
          }
        )}>
        <div
          className={
            'max-w-max bg-white w-full flex justify-between items-center py-4 px-8 '
          }>
          <div
            onClick={() => navigate('/')}
            className={
              'w-40 cursor-pointer z-40 flex items-center space-x-8 divide-x'
            }>
            <img
              src="https://photonq.at/images/CDG_Logo.svg"
              alt="Logo Christian Doppler Forschungsgesellschaft"
              style={{maxHeight: 60}}
            />

            <img
              src="https://photonq.at/images/uni-wien-logo.svg"
              alt="Logo Uni Wien"
              style={{maxHeight: 80}}
            />
          </div>
          <div className={'flex space-x-8'}>
            {routes.map((route, index) => (
              <MenuLink
                variant={'desktop'}
                key={index}
                route={route}
                isRouteActive={isRouteActive(route.href)}
              />
            ))}
            <ToggleButton
              isOpen={mobileNavBarOpen}
              setOpen={setMobileNavBarOpen}
            />
          </div>
        </div>
        {/*Mobile Menu*/}
        <div
          className={clsx(
            'lg:hidden fixed flex overflow-hidden justify-start items-center inset-0 h-full w-full bg-primary-light px-8',
            {
              ['hidden']: !mobileNavBarOpen,
              ['block']: mobileNavBarOpen
            }
          )}>
          <div className={'text-3xl space-y-5'}>
            {routes.map((route, index) => (
              <MenuLink
                setMobileNavBarOpen={setMobileNavBarOpen}
                variant={'mobile'}
                key={index}
                route={route}
                isRouteActive={isRouteActive(route.href)}
              />
            ))}
          </div>
        </div>
      </nav>
    </div>
  )
}
