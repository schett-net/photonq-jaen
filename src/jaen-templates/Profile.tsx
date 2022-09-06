import {connectTemplate} from '@jaenjs/jaen'
import {graphql} from 'gatsby'

import {ProfilePage} from '../pages/profile'

export const query = graphql`
  query ($jaenPageId: String!) {
    ...JaenPageQuery
  }
`

export default connectTemplate(ProfilePage, {
  displayName: 'Profile',
  children: []
})
