import dotenv from 'dotenv'
import type {GatsbyConfig} from 'gatsby'

const {site} = require('./jaen-data/internal.json')

dotenv.config({path: '.env.public'})

const config: GatsbyConfig = {
  siteMetadata: site.siteMetadata,
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: '@jaenjs/jaen',
      options: {
        jaenProjectId: 3
      }
    },
    '@chakra-ui/gatsby-plugin',

    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-postcss',
    'gatsby-theme-material-ui'
  ]
}

export default config
