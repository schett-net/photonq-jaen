import {connectPage, Field} from '@jaenjs/jaen'
import {Container} from '@mui/material'
import {graphql, PageProps} from 'gatsby'
import React from 'react'

import NavbarPadding from '../components/Layout/NavbarPadding'
import PageLayout from '../components/Layout/PageLayout'
import Section from '../components/Section/Section'

export const LegalPage = (props: PageProps) => {
  return (
    <PageLayout pathname={props.path}>
      <Container maxWidth="xl">
        <div className="relative flex flex-col items-center">
          <div className={'w-full flex flex-col items-center'}>
            <NavbarPadding />
            <div className="mt-10">
              {/*Heading for whole page*/}
              <h1 className="text-5xl font-bold">
                <Field.Text
                  rtf
                  name="legal-heading"
                  defaultValue="Terms & Conditions - 06 March 2022"
                />
              </h1>
              <Section withVerticalPadding>
                <Field.Text rtf name="legal" defaultValue="Legal text" />
              </Section>
            </div>
          </div>
        </div>
      </Container>
    </PageLayout>
  )
}

export const query = graphql`
  query ($jaenPageId: String!) {
    ...JaenPageQuery
  }
`

export default connectPage(LegalPage, {displayName: 'LegalPage'})
