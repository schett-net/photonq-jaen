import React from 'react'
import PortableTextContainer from '../Layout/PortableTextContainer'
import SectionHeader from '../Section/SectionHeader'

interface GuideHeaderProps {
  title: JSX.Element
  subtitle: JSX.Element
  category: JSX.Element
  content_type: JSX.Element
  mainImage: JSX.Element
}

export default function GuideHeader({
  category,
  content_type,
  subtitle,
  mainImage,
  title
}: GuideHeaderProps) {
  return (
    <div className={'space-y-8'}>
      <PortableTextContainer>
        <div
          className={
            'flex flex-col items-center text-center space-y-5 px-8 md:px-16'
          }>
          <div className={'text-grey text-lg flex space-x-2 '}>
            {content_type}
            <span>•</span>
            {category}
          </div>
          <SectionHeader text={title} />
          <p>{subtitle}</p>
        </div>
      </PortableTextContainer>

      <div className="h-80">{mainImage}</div>
    </div>
  )
}
