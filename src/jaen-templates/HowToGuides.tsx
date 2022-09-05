import {connectTemplate} from '@jaenjs/jaen'
import {graphql} from 'gatsby'

import {HowToGuidesPage} from '../pages/how-to-guides'

export const query = graphql`
  query ($jaenPageId: String!) {
    ...JaenPageQuery
    allJaenPage {
      nodes {
        ...JaenPageData
        children {
          ...JaenPageData
        }
      }
    }
  }
`

export default connectTemplate(HowToGuidesPage, {
  displayName: 'HowToGuides',
  children: ['HowToGuide']
})
