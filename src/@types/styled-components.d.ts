import 'styled-components';
import { ThemeType } from 'shiba-ui-core';

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
