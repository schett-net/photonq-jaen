import {Typography} from '@mui/material'
import React, {ReactNode} from 'react'

interface AuthFormContainerProps {
  header: JSX.Element
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  children: ReactNode
  formId?: string
}

export default function AuthFormContainer({
  header,
  onSubmit,
  children,
  formId
}: AuthFormContainerProps) {
  return (
    <div className={'space-y-10'}>
      <Typography fontWeight={'bold'} variant={'h2'} component={'h1'}>
        {header}
      </Typography>
      <form onSubmit={onSubmit} id={formId} className={'space-y-6'}>
        {children}
      </form>
    </div>
  )
}
