import {Field} from '@jaenjs/jaen'
import {Typography} from '@mui/material'
import React from 'react'
import {useTranslation} from 'react-i18next'

export default function AuthContent(props: {header: string; content: string}) {
  const {t} = useTranslation()
  return (
    <div
      className={
        'bg-primaryLightBg w-full h-full flex flex-col justify-center items-center p-8 md:py-0'
      }>
      <div className={'w-full h-96'}>
        <Field.Image
          name="image"
          objectFit="contain"
          defaultValue={'https://photonq.at/images/photons.svg'}
          alt="svg animation"
        />
      </div>

      <div className={'space-y-5'}>
        <Typography variant={'h5'} fontWeight={'bold'}>
          {t(props.header)}
        </Typography>
        <p>{t(props.content)}</p>
      </div>
    </div>
  )
}
