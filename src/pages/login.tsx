import {connectPage, Field} from '@jaenjs/jaen'
import {Grid} from '@mui/material'
import {graphql, PageProps} from 'gatsby'
import React from 'react'

import AuthContent from '../components/Authentification/AuthContent'
import LoginForm from '../components/Authentification/LoginForm'
import NavbarPadding from '../components/Layout/NavbarPadding'
import PageLayout from '../components/Layout/PageLayout'

export function LoginPage(props: PageProps) {
  return (
    <PageLayout pathname={props.path}>
      <div className={'2xl:hidden'}>
        <NavbarPadding />
      </div>
      <Grid container columnSpacing={12}>
        <Grid item md={7}>
          <div
            className={'pt-8 md:pt-0 md:h-screen flex flex-col justify-center'}>
            <LoginForm />
          </div>
        </Grid>
        <Grid item md={5}>
          <AuthContent
            header={
              <Field.Text
                name="header"
                defaultValue="Start quantum computing with us!"
              />
            }
            content={
              <Field.Text
                name="content"
                defaultValue="Our intuitive approach makes it easy for beginners to start with quantum computing and allows experts and educators to run complex photonic experiments on real quantum hardware."
              />
            }
          />
        </Grid>
      </Grid>
    </PageLayout>
  )
}

export const query = graphql`
  query ($jaenPageId: String!) {
    ...JaenPageQuery
  }
`

export default connectPage(LoginPage, {displayName: 'LoginPage'})
