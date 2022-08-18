import React from 'react'

export const GuidePreviewGrid = (props: {children: React.ReactNode}) => {
  return (
    <div
      className={'grid md:grid-cols-3 gap-10 w-full space-y-10 md:space-y-0'}>
      {props.children}
    </div>
  )
}
