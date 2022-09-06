import clsx from 'clsx'
import React, { ReactNode } from 'react'

interface SectionProps {
  fullWidth?: boolean
  primaryBackground?: boolean
  withVerticalPadding?: boolean
  withHorizontalPadding?: boolean
  children: ReactNode
}

export default function Section({
  primaryBackground,
  withVerticalPadding,
  fullWidth,
  children,
  withHorizontalPadding
}: SectionProps) {
  return (
    <section
      className={clsx('w-full', {
        ['py-16 lg:py-32 2xl:py-36']: withVerticalPadding,
        ['px-8']: withHorizontalPadding,
        ['w-full']: fullWidth,
        ['bg-primary']: primaryBackground,
        ['text-white']: primaryBackground
      })}>
     {children}
    </section>
  )
}
