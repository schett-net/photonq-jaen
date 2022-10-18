import {Field, navigate} from '@jaenjs/jaen'
import {useLocation} from '@reach/router'

import {Button} from '@mui/material'
import React from 'react'
import {getLangRootNavigationPath} from '../../common/getLangRootNavigationPath'

export default function PrimaryCTA() {
  const location = typeof window !== 'undefined' ? useLocation() : null

  return (
    <div
      className={
        'px-6 md:px-0 bg-primary text-white flex flex-col items-center py-14 space-y-10'
      }>
      <div className={'text-center space-y-7'}>
        <h3 className={'text-2xl font-bold'}>
          <Field.Text name="headline" defaultValue="Start Quantum Computing" />
        </h3>
        <div className="text-xl">
          <Field.Text
            name="text"
            defaultValue={
              'Create your free account and start experimenting with our quantum computer!'
            }
          />
        </div>
      </div>
      <Button
        size={'large'}
        onClick={() =>
          navigate(getLangRootNavigationPath(location?.pathname, '/login'))
        }
        color={'secondary'}
        variant={'outlined'}>
        Start quantum computing
      </Button>
    </div>
  )
}
