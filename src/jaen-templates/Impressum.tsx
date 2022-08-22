import {connectTemplate} from '@jaenjs/jaen'
import {graphql} from 'gatsby'
import {ImpressumPage} from '../pages/impressum'

export const query = graphql`
  query ($jaenPageId: String!) {
    ...JaenPageQuery
  }
`

export default connectTemplate(ImpressumPage, {
  displayName: 'Impressum',
  children: []
})
