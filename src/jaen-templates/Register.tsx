import {connectTemplate} from '@jaenjs/jaen'
import {graphql} from 'gatsby'

import {RegisterPage} from '../pages/register'

export const query = graphql`
  query ($jaenPageId: String!) {
    ...JaenPageQuery
  }
`

export default connectTemplate(RegisterPage, {
  displayName: 'Register',
  children: []
})
