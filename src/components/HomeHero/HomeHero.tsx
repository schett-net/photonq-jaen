import {Field, navigate} from '@jaenjs/jaen'
import {Button} from '@mui/material'
import {useLocation} from '@reach/router'

import React from 'react'
import SectionHeader from '../Section/SectionHeader'

import {getLangRootNavigationPath} from '../../common/getLangRootNavigationPath'
import NavbarPadding from '../Layout/NavbarPadding'
import {BgFade} from './style'

export default function HomeHero() {
  const location = typeof window !== 'undefined' ? useLocation() : null

  return (
    <div className="relative">
      <NavbarPadding />

      <BgFade className="flex flex-col xl:flex-row-reverse items-center justify-center align-center">
        <div className="max-w-lg xl:max-w-4xl w-[90vw] h-[20rem] sm:w-[56rem] sm:h-[32rem]">
          <Field.Image
            name="heroImage"
            objectFit="contain"
            defaultValue={'https://i.ibb.co/J2dX4Cz/getting-started-screen.png'}
            imgClassName={'w-full h-auto relative z-10 mt-20 sm:mt-0'}
            alt={'Quantum Computing Webapp UI'}
          />
        </div>
        <div
          className={
            'space-y-5 flex flex-col items-center relative z-10 text-white sm:p-8 px-8'
          }>
          <SectionHeader
            centered
            text={
              <Field.Text
                name="heroTitle"
                defaultValue="Start quantum computing with us."
              />
            }
          />
          <div className="text-xl text-center">
            <Field.Text
              name="heroText"
              defaultValue="Learn quantum computing and run your circuits on our photonic quantum hardware"
            />
          </div>
          <div
            className={
              'mt-10 space-y-2 flex flex-col justify-center md:flex-row md:space-y-0'
            }>
            <Button
              onClick={() =>
                navigate(
                  getLangRootNavigationPath(location?.pathname, '/signup')
                )
              }
              className={'relative z-50'}
              variant={'contained'}
              size={'large'}>
              Register now
            </Button>
          </div>
        </div>
      </BgFade>
    </div>
  )
}
