import { Theme } from 'baseui/theme';
import { DeepPartial } from '../utils';

export interface CustomColors {
  // Dark
  dark0: string;
  dark1: string;
  dark2: string;
  dark3: string;
  dark4: string;

  // Red
  red0: string;
  red1: string;
  red2: string;
  red3: string;
  red4: string;
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
