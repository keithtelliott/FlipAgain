// import { addDecorator } from '@storybook/react'
// import { ThemeProvider, CSSReset } from '@chakra-ui/core'
// import { ThemeProvider, CSSReset } from '../../node_modules/@chakra-ui/core'
// const { ThemeProvider } = require('@cha')
// import { ThemeProvider, CSSReset } from '@chakra-ui/react'
// import { ThemeProvider } from '@chakra-ui/react'
// import { CSSReset } from '@chakra-ui/css-reset'
import { ChakraProvider } from '@chakra-ui/react'
// addDecorator((storyFn) => (
//   <ThemeProvider>
//     <CSSReset />
//     {storyFn()}
//   </ThemeProvider>
// ))
export const decorators = [
  (Story) => (
    <div style={{ margin: '2em' }}>
      <Story />
    </div>
  ),
  // (Story) => (
  //   <ThemeProvider>
  //     {/* <CSSReset /> */}
  //     <Story />
  //   </ThemeProvider>
  // ),
  (Story) => (
    <ChakraProvider resetCSS={true}>
      {/* <CSSReset /> */}
      <Story />
    </ChakraProvider>
  ),
]
