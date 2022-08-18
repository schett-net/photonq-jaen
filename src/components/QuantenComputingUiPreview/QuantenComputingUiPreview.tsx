import {Field} from '@jaenjs/jaen'
import React from 'react'

const PreviewComponent = (props: {name: string}) => {
  return (
    <>
      <div className={'text-center w-full relative'}>
        <Field.Image
          name={props.name + '_image'}
          objectFit="contain"
          defaultValue={undefined}
        />
        <Field.Text
          name={props.name + '_text'}
          defaultValue={'Test'}
          className="font-bold text-xl absolute bottom-0 inset-x-0 text-center"
        />
      </div>
    </>
  )
}

export default function QuantenComputingUiPreview() {
  return (
    <div className="md:flex justify-between space-y-5 space-x-5 md:space-y-0 h-96">
      <PreviewComponent name="left" />
      <PreviewComponent name="middle" />
      <PreviewComponent name="right" />
    </div>
  )
}
