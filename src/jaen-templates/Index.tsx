import {connectTemplate} from '@jaenjs/jaen'
import {graphql} from 'gatsby'

import {IndexPage} from '../pages/index'

export const query = graphql`
  query ($jaenPageId: String!) {
    ...JaenPageQuery
  }
`

export default connectTemplate(IndexPage, {
  displayName: 'Index',
  children: ['HowToGuides', 'Legal', 'Login', 'Impressum', 'Register'],
  isRootTemplate: true
})
