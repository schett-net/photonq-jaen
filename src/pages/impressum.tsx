import {connectPage} from '@jaenjs/jaen'
import {graphql, PageProps} from 'gatsby'
import React from 'react'

import Footer from '../components/Footer/Footer'
import NavbarPadding from '../components/Layout/NavbarPadding'
import PageLayout from '../components/Layout/PageLayout'
import Section from '../components/Section/Section'
import SectionText from '../components/Section/SectionText'

export const ImpressumPage = (props: PageProps) => {
  return (
    <PageLayout pathname={props.path}>
      <div className="relative flex flex-col items-center">
        <div className={'w-full flex flex-col items-center'}>
          <NavbarPadding />
          <div className="mt-10">
            {/*Heading for whole page*/}
            <h1 className="text-5xl font-bold">Impressum</h1>
            <Section>
              {/**
               *  heading = Heading for Paragraphs
               *  paragraphs = Paragraphs for under the heading (Array)
               *   <p key={"key"}>YourTextHere</p> = normal text
               *     <a href="{yourUrlHere}", target="_blank">YorTextHere</a> = link
               *     <strong>YourBoldTextHere</strong>
               *     <em>YourItalicTextHere</em>
               *   pb-x = set spacing under paragraph
               *  If new Heading required:
               *  <Section>
               *    <SectionText />
               *  </Section>
               */}

              <SectionText
                heading={'Contact Us'}
                paragraphs={[
                  <p key={'key'} className="pb-4">
                    If you have any questions about PhotonQ, you can contact us
                    at:
                  </p>,
                  <p key={'key'}>
                    <strong>
                      <a
                        href="https://walther.quantum.at"
                        target="_blank"
                        className="no-underline hover:underline"
                        rel="noreferrer">
                        Walther Group
                      </a>
                    </strong>
                  </p>,
                  <p key={'key'}>Faculty of Physics, University of Vienna</p>,
                  <p key={'key'}>Boltzmanngasse 5, 1090 Vienna</p>,
                  <p key={'key'}>Austria</p>,
                  <p key={'key'}>T: +43 1 4277 72561</p>,
                  <p key={'key'} className="pb-2">
                    walther-office@univie.ac.at
                  </p>
                ]}
              />
            </Section>
            <Section>
              <SectionText
                heading={'Christian Doppler Laboratory'}
                paragraphs={[
                  <p key={'key'} className="pb-2">
                    The Christian Doppler Laboratory for Photonic Quantum
                    Computing - the home of the PhotonQ system - is located in
                    Vienna in the 9th district.
                  </p>,
                  ,
                ]}
              />
            </Section>
            <Section>
              <SectionText
                heading={'Cite'}
                paragraphs={[
                  <p key={'key'} className="pb-2">
                    When you need to cite or refer to PhotonQ please use the
                    following reference:
                  </p>,
                  <p key={'key'} className="pb-2">
                    <strong>PhotonQ. (2022).</strong>{' '}
                    <em>PhotonQ - Photonic Quantum Computing</em>. Accessed:
                    DD.MM.YYYY. Retrieved from:{' '}
                    <a
                      href="https://photonq.at/"
                      className="no-underline hover:underline">
                      https://photonq.at
                    </a>
                  </p>,
                  ,
                ]}
              />
            </Section>
            <Section>
              <SectionText
                heading={'Copyright'}
                paragraphs={[
                  <p key={'key'} className="pb-2">
                    Unless otherwise indicated, all website design, text,
                    graphics, selections and layouts thereof, and software are
                    the copyrighted property of Christian Doppler Laboratory for
                    Photonic Quantum Computing (Copyright © 2022 Walther Group,
                    Faculty of Physics, University of Vienna. All rights
                    reserved.).
                  </p>,
                  ,
                ]}
              />
            </Section>
          </div>
        </div>
        <Section fullWidth>
          <div className="pt-24">
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

export default connectPage(ImpressumPage, {displayName: 'ImpressumPage'})
