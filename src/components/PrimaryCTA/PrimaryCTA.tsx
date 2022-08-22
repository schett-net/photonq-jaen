import {Field, navigate} from '@jaenjs/jaen'
import {Button} from '@mui/material'
import React from 'react'

export default function PrimaryCTA() {
  return (
    <div
      className={
        'px-6 md:px-0 bg-primary text-white flex flex-col items-center py-14 space-y-10'
      }>
      <div className={'text-center space-y-7'}>
        <h3 className={'text-2xl font-bold'}>
          <Field.Text name="headline" defaultValue="Start Quantum Computing" />
        </h3>
        <p className="text-xl">
          <Field.Text
            name="text"
            defaultValue={
              'Create your free account and start experimenting with our quantum computer!'
            }
          />
        </p>
      </div>
      <Button
        size={'large'}
        onClick={() => navigate('/login')}
        color={'secondary'}
        variant={'outlined'}>
        Start quantum computing
      </Button>
    </div>
  )
}
