import { connectTemplate } from '@jaenjs/jaen'
import { graphql } from 'gatsby'

import { LoginPage } from '../pages/login'

export const query = graphql`
  query ($jaenPageId: String!) {
    ...JaenPageQuery
  }
`

export default connectTemplate(LoginPage, {
  displayName: 'Login',
  children: []
})
