import { Container } from '@mui/material'
import clsx from 'clsx'
import React, { ReactNode } from 'react'
import Footer from '../Footer/Footer'

import Navbar from '../Navbar/Navbar'
import Section from '../Section/Section'

interface PageLayoutProps {
  pathname: string
  children: ReactNode
}

export default function PageLayout({children, pathname}: PageLayoutProps) {
  return (
    <>
      <Navbar pathname={pathname} />
      <Container maxWidth={'xl'}>
        <main className={clsx('px-8')}>{children}</main>
      </Container>
      <Section fullWidth>
        <div className={'pt-16 lg:pt-28 2xl:pt-32'}>
          <Footer />
        </div>
      </Section>
    </>
  )
}
