import {Field} from '@jaenjs/jaen'
import clsx from 'clsx'
import React from 'react'

interface SectionContentProps {
  header: JSX.Element
  content: JSX.Element
  maxWidthImage?: number
}

export default function SectionContent({
  header,
  content,
  maxWidthImage
}: SectionContentProps) {
  return (
    <div className={'flex justify-center text-xl'}>
      <div className={'md:flex space-y-8 md:space-y-0 md:space-x-10'}>
        <div
          className={clsx('md:w-6/12 space-y-5 flex flex-col justify-center', {
            ['md:w-8/12']: maxWidthImage
          })}>
          <h3 className={'text-3xl font-bold'}>{header}</h3>
          <div>{content}</div>
        </div>
        <div
          className={clsx('w-9/12 md:w-4/12 justify-center items-center', {
            ['md:w-4/12']: maxWidthImage
          })}>
          <div className="w-full h-56">
            <Field.Image
              name="logo1"
              objectFit="contain"
              defaultValue={'https://photonq.at/assets/uni-wien-logo.svg'}
              alt="Logo Uni Wien"
              imgStyle={{maxWidth: maxWidthImage}}
            />
          </div>
          <div className="w-full h-56">
            <Field.Image
              name="logo2"
              objectFit="contain"
              defaultValue={'https://photonq.at/assets/CDG_Logo.svg'}
              alt="Logo Christian Doppler Forschungsgesellschaft"
              imgStyle={{maxWidth: maxWidthImage}}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
