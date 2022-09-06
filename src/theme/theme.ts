import {extendTheme} from '@chakra-ui/react'
import {deepmerge} from '@material-ui/utils'
import {createTheme} from '@mui/material'

import {red} from '@mui/material/colors'

import colors from './theme.config'

// Create a theme instance.
export const muiTheme = createTheme({
  palette: {
    primary: {
      main: colors.primary,
      dark: colors.primary
    },
    secondary: {
      main: colors.secondary,
      dark: colors.secondaryDark
    },
    error: {
      main: red.A400
    },
    background: {
      default: '#fff'
    }
  }
})

export const chakraTheme = extendTheme()

// Merge the theme instances.
// Ref: https://github.com/mui/material-ui/issues/25852#issuecomment-831213670
export default deepmerge(muiTheme, chakraTheme)
