import clsx from 'clsx'
import React, {ReactNode} from 'react'

interface SectionProps {
  fullWidth?: boolean
  withVerticalPadding?: boolean
  withHorizontalPadding?: boolean
  children: ReactNode
}

export default function Section({
  withHorizontalPadding,
  withVerticalPadding,
  fullWidth,
  children
}: SectionProps) {
  return (
    <section
      className={clsx('w-full', {
        ['px-8']: withHorizontalPadding,
        ['py-16 lg:py-32 2xl:py-36']: withVerticalPadding,
        ['w-screen']: fullWidth
      })}>
      {children}
    </section>
  )
}
