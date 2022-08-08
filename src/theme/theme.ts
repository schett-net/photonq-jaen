import {createTheme} from '@mui/material'
import {red} from '@mui/material/colors'

import colors from './theme.config'

// Create a theme instance.
const theme = createTheme({
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

export default theme
