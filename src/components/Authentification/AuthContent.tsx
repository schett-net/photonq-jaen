import {Field} from '@jaenjs/jaen'
import {Typography} from '@mui/material'
import React from 'react'

export default function AuthContent(props: {
  header: JSX.Element
  content: JSX.Element
}) {
  return (
    <div
      className={
        'bg-primaryLightBg w-full h-full flex flex-col justify-center items-center p-8 md:py-0'
      }>
      <div className={'w-full h-96'}>
        <Field.Image
          name="image"
          objectFit="contain"
          defaultValue={
            'https://osg.snek.at/storage/BQACAgQAAxkDAAIS9GMkjpykzkAI-d9uBCSHWiLCC1ZEAALXDQAC_I8oUXvbY-9hfOIAASkE'
          }
          alt="svg animation"
        />
      </div>

      <div className={'space-y-5'}>
        <Typography variant={'h5'} fontWeight={'bold'}>
          {props.header}
        </Typography>
        <p>{props.content}</p>
      </div>
    </div>
  )
}
