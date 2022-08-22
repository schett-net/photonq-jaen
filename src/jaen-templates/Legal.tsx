import {connectTemplate} from '@jaenjs/jaen'
import {graphql} from 'gatsby'
import {LegalPage} from '../pages/legal'

export const query = graphql`
  query ($jaenPageId: String!) {
    ...JaenPageQuery
  }
`

export default connectTemplate(LegalPage, {
  displayName: 'Legal',
  children: []
})
