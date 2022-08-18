import clsx from 'clsx'
import React from 'react'

interface SectionHeaderProps {
  text: JSX.Element
  centered?: boolean
}

export default function SectionHeader({text, centered}: SectionHeaderProps) {
  return (
    <h1
      className={clsx('text-3xl lg:text-5xl font-bold', {
        ['text-center']: centered
      })}>
      {text}
    </h1>
  )
}
