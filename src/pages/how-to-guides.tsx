import {connectPage, Field} from '@jaenjs/jaen'
import {graphql, PageProps} from 'gatsby'
import React from 'react'
import GuidePreview from '../components/DocumentationPreview/GuidePreview'
import {GuidePreviewGrid} from '../components/DocumentationPreview/GuidePreviewGrid'
import GuideFilter from '../components/GuideFilter/GuideFilter'
import {useGuideFilter} from '../components/GuideFilter/hook.guideFilter'
import MaxWidthContainer from '../components/Layout/MaxWidthContainer'
import NavbarPadding from '../components/Layout/NavbarPadding'
import PageLayout from '../components/Layout/PageLayout'
import Section from '../components/Section/Section'
import SectionHeader from '../components/Section/SectionHeader'

export function HowToGuidesPage(props: PageProps) {
  const {
    currentCategory,
    setCurrentCategory,
    filteredGuides,
    isLoading,
    withJaenPage
  } = useGuideFilter({
    jaenPageId: 'JaenPage /how-to-guides/'
  })

  return (
    <PageLayout pathname={props.path}>
      <div className={'flex flex-col items-center'}>
        <MaxWidthContainer className={'space-y-12'}>
          <NavbarPadding />
          <Section>
            <div className={'flex flex-col items-center space-y-5'}>
              <SectionHeader
                text={
                  <Field.Text
                    name="how-to-guide-header"
                    defaultValue={'Documentation and How-To-Guides'}
                  />
                }
              />
              <p className={'md:w-8/12 md:text-center'}>
                <Field.Text
                  name="how-to-guide-text"
                  defaultValue={`
Each of these guides and documentation contains advice and
research to give you guidelines for your successful quantum
computing experiment.`}
                />
              </p>
            </div>
          </Section>
          <GuideFilter
            currentCategory={currentCategory}
            setCurrentCategory={setCurrentCategory}
          />
          <Section>
            {isLoading ? (
              <div className={'flex justify-center'}>
                <span className="h-10 w-10 animate-ping inline-flex rounded-full bg-primary opacity-75" />
                <p>Loading...</p>
              </div>
            ) : (
              <div className={'pb-8'}>
                <GuidePreviewGrid>
                  {filteredGuides.map(child =>
                    withJaenPage(
                      child.id,
                      <GuidePreview
                        key={child.id}
                        index="how-to-guides"
                        slug={child.slug!}
                      />
                    )
                  )}
                </GuidePreviewGrid>
              </div>
            )}
          </Section>
        </MaxWidthContainer>
      </div>
    </PageLayout>
  )
}

export const query = graphql`
  query ($jaenPageId: String!) {
    jaenPage(id: {eq: $jaenPageId}) {
      ...JaenPageData
      children {
        ...JaenPageData
      }
    }
  }
`

export default connectPage(HowToGuidesPage, {
  displayName: 'HowToGuidesPage',
  children: ['HowToGuide']
})
