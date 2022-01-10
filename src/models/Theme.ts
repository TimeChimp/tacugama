import { Theme } from 'baseui/theme';
import { DeepPartial } from '../utils';

export interface CustomColors {
  // Primary
  primaryDarker: string;
  primaryMain: string;
  primaryLighter: string;
  primarySubtle: string;

  // Dark
  dark0: string;
  dark1: string;
  dark2: string;
  dark3: string;
  dark4: string;

  // Light
  light0: string;
  light1: string;
  light2: string;
  light3: string;
  light4: string;
  light5: string;
  light6: string;

  // Red
  red0: string;
  red1: string;
  red2: string;
  red3: string;
  red4: string;

  // Green
  green0: string;
  green1: string;
  green2: string;
  green3: string;
  green4: string;
  green5: string;
  green6: string;

  // Blue
  blue0: string;
  blue1: string;
  blue2: string;
  blue3: string;
  blue4: string;

  // Yellow
  yellow0: string;
  yellow1: string;
  yellow2: string;
  yellow3: string;
  yellow4: string;
  yellow5: string;

  // Purple
  purple0: string;
  purple1: string;
  purple2: string;
  purple3: string;
  purple4: string;

  // Outlines
  darkOutline: string;
  lightOutline: string;
  redOutline: string;
  greenOutline: string;
  blueOutline: string;
  yellowOutline: string;
  purpleOutline: string;

  //Brand
  brand700: string;
}

interface App {
  background?: string;
}

interface Components {
  appHeader: {
    background?: string;
    height: {
      small: string;
      medium: string;
      large: string;
    };
    zIndex: number;
  };
  appSidebar: {
    background?: string;
  };
}

export interface CustomOverridesProps {
  app: App;
  components: Components;
  customColors: CustomColors;
}

export type CustomOverrideType = DeepPartial<Theme> & CustomOverridesProps;

export type CustomThemeType = Theme & CustomOverrideType;

export interface ThemeProps {
  $theme: Theme;
}
