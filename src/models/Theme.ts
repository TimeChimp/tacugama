import { Theme } from 'baseui/theme';
import { DeepPartial } from 'utils';

export interface CustomColors {
  purple700: string;
  purple600: string;
  purple500: string;
  purple400: string;
  purple300: string;
  purple200: string;
  purple100: string;
  purple50: string;

  green400: string;

  blue400: string;
  blue50: string;

  yellow400: string;

  red400: string;

  black: string;
  gray900: string;
  gray800: string;
  gray700: string;
  gray600: string;
  gray500: string;
  gray400: string;
  gray300: string;
  gray200: string;
  gray100: string;
  gray50: string;
  white: string;
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
}

export type CustomOverrideType = DeepPartial<Theme> & CustomOverridesProps;

export type CustomThemeType = Theme & CustomOverrideType;

export interface ThemeProps {
  $theme: Theme;
}
