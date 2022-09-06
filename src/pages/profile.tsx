import {connectPage, Field} from '@jaenjs/jaen'
import {graphql, PageProps} from 'gatsby'
import React from 'react'
import ContentContainer from '../components/Layout/ContentContainer'
import NavbarPadding from '../components/Layout/NavbarPadding'
import PageLayout from '../components/Layout/PageLayout'
import SectionHeader from '../components/Layout/SectionHeader'
import ProfileDetailSection from '../components/Profile/Sections/ProfileDetailSection'

export function ProfilePage(props: PageProps) {
  return (
    <PageLayout pathname={props.path}>
      <NavbarPadding />
      <SectionHeader
        header={<Field.Text name="sectionHeader" defaultValue={'My Profile'} />}
        withVerticalSpacing
      />
      <ContentContainer>
        <ProfileDetailSection />
      </ContentContainer>
    </PageLayout>
  )
}

export const query = graphql`
  query ($jaenPageId: String!) {
    ...JaenPageQuery
  }
`

export default connectPage(ProfilePage, {displayName: 'ProfilePage'})
