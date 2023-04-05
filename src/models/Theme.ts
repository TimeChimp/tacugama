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
  light7: string;

  // Red
  red0: string;
  red1: string;
  red2: string;
  red3: string;
  red4: string;
  red5: string;
  red6: string;

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
  blue5: string;

  // Yellow
  yellow0: string;
  yellow1: string;
  yellow2: string;
  yellow3: string;
  yellow4: string;
  yellow5: string;
  yellow6: string;
  yellow7: string;

  // Purple
  purple0: string;
  purple1: string;
  purple2: string;
  purple3: string;
  purple4: string;
  purple5: string;

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

export interface CustomSizing {
  scale0250: string;
  scale050: string;
  scale50: string;
  scale825: string;
  scale975: string;
  scale1025: string;
  scale1250: string;
  scale1500: string;
  scale2100: string;
  scale2250: string;
  scale2500: string;
  scale4375: string;
  scale5000: string;
  scale5450: string;
  scale7500: string;
  scale7525: string;
  scale8750: string;
  scale10000: string;
  scale11250: string;
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
  customSizing: CustomSizing;
}

export type CustomOverrideType = DeepPartial<Theme> & CustomOverridesProps;

export type CustomThemeType = Theme & CustomOverrideType;

export interface ThemeProps {
  $theme: Theme;
}

export interface CustomThemeProps {
  $theme: CustomThemeType;
}
