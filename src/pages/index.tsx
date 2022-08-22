import {connectPage, Field} from '@jaenjs/jaen'
import {graphql, PageProps} from 'gatsby'
import * as React from 'react'

import DocumentationPreview from '../components/DocumentationPreview/DocumentationPreview'
import Footer from '../components/Footer/Footer'
import HomeHero from '../components/HomeHero/HomeHero'
import MaxWidthContainer from '../components/Layout/MaxWidthContainer'
import PageLayout from '../components/Layout/PageLayout'
import PrimaryCTA from '../components/PrimaryCTA/PrimaryCTA'
import QuantenComputingUiPreview from '../components/QuantenComputingUiPreview/QuantenComputingUiPreview'
import Section from '../components/Section/Section'
import SectionFade from '../components/Section/SectionFade'
import SectionLogos from '../components/Section/SectionLogos'

// markup
export const IndexPage = (props: PageProps) => {
  return (
    <PageLayout pathname={props.path}>
      <div className={'w-full flex flex-col items-center'}>
        <Section fullWidth>
          <HomeHero />
        </Section>
        <MaxWidthContainer>
          <Section withVerticalPadding>
            <QuantenComputingUiPreview />
          </Section>
        </MaxWidthContainer>
        <Section withVerticalPadding fullWidth>
          <SectionFade
            header={
              <Field.Text
                name="sectionFadeHeader"
                defaultValue="One-way Quantum Computing"
              />
            }
            content={
              <Field.Text
                name="sectionFadeContent"
                defaultValue="PhotonQ provides cloud-based access to a real photonic one-way computer backend. Our system exploits cutting-edge quantum photonic technology to realize a photonic quantum computing platform. The quantum processing unit can be accessed and programmed through our customized user interface."
              />
            }
          />
        </Section>
        <MaxWidthContainer>
          <Section withVerticalPadding>
            <DocumentationPreview />
          </Section>
        </MaxWidthContainer>
        <Section fullWidth withVerticalPadding>
          <PrimaryCTA />
        </Section>
        <MaxWidthContainer>
          <Section withVerticalPadding>
            <SectionLogos
              header={
                <Field.Text
                  name="sectionLogosHeading"
                  defaultValue="Who are we?"
                />
              }
              content={
                <Field.Text
                  name="sectionLogosContent"
                  defaultValue="We are a team of scientists, designers, and software developers at the Christian Doppler Laboratory for Photonic Quantum Computing at the Faculty of Physics at the University of Vienna. Our research focus is on the development and operation of a photonic quantum computer platform and we are committed to providing free online access to a photonic quantum computer through cloud-based services. You can already experiment with our four-qubit processor today!"
                />
              }
            />
          </Section>
        </MaxWidthContainer>
        <Section fullWidth>
          <div className={'pt-16 lg:pt-28 2xl:pt-32'}>
            <Footer />
          </div>
        </Section>
      </div>
    </PageLayout>
  )
}

export const query = graphql`
  query ($jaenPageId: String!) {
    ...JaenPageQuery
  }
`

export default connectPage(IndexPage, {displayName: 'IndexPage'})
