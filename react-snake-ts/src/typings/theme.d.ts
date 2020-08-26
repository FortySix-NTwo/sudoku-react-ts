import 'styled-components'

import { Theme } from '../styles'

type Theme = typeof theme

declare module 'styled-components' {
  export interface DefaultTheme extends theme {}
}
