import {connectSection, Field, navigate, useField} from '@jaenjs/jaen'
import React from 'react'

function GuidePreview(props: {index: string; slug: string}) {
  const mainImage = useField('mainImage', 'IMA:ImageField')

  const divProps: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > = {
    className:
      'relative rounded filter drop-shadow-2xl transform hover:scale-105 duration-300 cursor-pointer w-full h-96'
  }

  if (!mainImage.isEditing) {
    divProps.role = 'link'
    divProps.onClick = () => {
      navigate(`/${props.index}/${props.slug}`)
    }
  }

  return (
    <div {...divProps}>
      <Field.Image
        name="mainImage"
        objectFit="cover"
        className="rounded"
        alt="Content Image"
        defaultValue={undefined}
      />

      {!mainImage.isEditing && (
        <div
          style={{backgroundColor: '#263238'}}
          className={'absolute inset-0 z-10 opacity-40'}
        />
      )}

      <div className={'absolute top-4 right-0 bg-primary-light z-20 px-1'}>
        <Field.Text
          name="contentType"
          defaultValue={'foo'}
          className="text-primary"
        />
      </div>
      <div
        className={
          'absolute bottom-0 text-white mx-5 mb-5 z-20 backdrop-filter backdrop-blur-lg rounded p-1'
        }>
        <h4>
          <Field.Text
            name="title"
            defaultValue={'foo'}
            className="text-lg font-bold"
          />
        </h4>

        <Field.Text
          name="teaser"
          defaultValue={'foo'}
          className="leading-normal"
        />
      </div>
    </div>
  )
}

export default connectSection(GuidePreview, {
  name: 'GuidePreview',
  displayName: 'GuidePreview'
})
