import { Container } from '@mui/material'
import clsx from 'clsx'
import React, { ReactNode } from 'react'

import Navbar from '../Navbar/Navbar'

interface PageLayoutProps {
  pathname: string
  children: ReactNode
}

export default function PageLayout({children, pathname}: PageLayoutProps) {
  return (
    <>
      <Navbar pathname={pathname}/>
      <Container maxWidth={'xl'}>
        <main className={clsx('px-8')}>{children}</main>
      </Container>
    </>
  )
}
