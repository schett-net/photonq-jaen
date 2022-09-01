import {connectPage, Field} from '@jaenjs/jaen'
import {graphql, PageProps} from 'gatsby'
import React from 'react'

import NavbarPadding from '../components/Layout/NavbarPadding'
import PageLayout from '../components/Layout/PageLayout'

export const ImpressumPage = (props: PageProps) => {
  return (
    <PageLayout pathname={props.path}>
      <div className="relative flex flex-col items-center">
        <div className={'w-full flex flex-col items-center'}>
          <NavbarPadding />
          <div className="mt-10">
            {/*Heading for whole page*/}
            <h1 className="text-5xl font-bold">
              <Field.Text name="heading" defaultValue="Impressum" />
            </h1>

            <div className="mt-10">
              <Field.Text
                rtf
                name="impressumBody"
                defaultValue="<p>Impressum</p>"
              />
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

export const query = graphql`
  query ($jaenPageId: String!) {
    ...JaenPageQuery
  }
`

export default connectPage(ImpressumPage, {displayName: 'ImpressumPage'})
