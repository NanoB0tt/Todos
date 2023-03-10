import { extendTheme } from "@chakra-ui/react"


const breakpoints = {
  sm: '320px',
  md: '768px',
  lg: '960px',
  xl: '1200px',
  '2x1': '1536px'
}

const theme = extendTheme({ breakpoints });

export default theme;
