import { green } from '@material-ui/core/colors'
import { createTheme } from '@material-ui/core/styles'

export const theme = createTheme({
  palette: {
    primary: {
      light: '#6fe6b2',
      main: '#5CE27F',
    },
    secondary: {
      main: '#FFFF',
    },
    error: {
      main: '#E25C5C',
    },
  },
})
