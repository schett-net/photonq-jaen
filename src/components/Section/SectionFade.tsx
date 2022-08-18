import {Field} from '@jaenjs/jaen'
import React from 'react'

import {GradientStyle} from './SectionFade.style'

interface SectionContentProps {
  header: JSX.Element
  content: JSX.Element
}

//xl:bg-gradient-to-r bg-gradient-to-b from-primary xl:via-primary

export default function SectionContent({header, content}: SectionContentProps) {
  return (
    <GradientStyle>
      <div className={'flex'}>
        <div className={'xl:flex space-y-8 md:space-y-0 backGroundFade'}>
          <div
            className={
              'xl:w-8/12 space-y-5 flex flex-col justify-center p-10 ml-10'
            }>
            <h3 className={'text-3xl font-bold text-white'}>{header}</h3>
            <p className={'pr-10 text-white text-xl'}>{content}</p>
          </div>

          <div className={'h-[32rem] w-full xl:w-4/6'}>
            <Field.Image
              name="image"
              objectFit="fill"
              defaultValue={'https://photonq.at/images/quantenComputer.jpg'}
              imgClassName="w-full h-auto image"
              className={'xl:w-6-12 flex justify-center items-center'}
            />
          </div>
        </div>
      </div>
    </GradientStyle>
  )
}
