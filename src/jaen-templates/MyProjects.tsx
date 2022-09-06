import {connectTemplate} from '@jaenjs/jaen'
import {graphql} from 'gatsby'

import {MyProjectPage} from '../pages/my-projects'

export const query = graphql`
  query ($jaenPageId: String!) {
    ...JaenPageQuery
  }
`

export default connectTemplate(MyProjectPage, {
  displayName: 'MyProjectPage',
  children: []
})
