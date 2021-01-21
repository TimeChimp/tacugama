import { CustomOverrideType } from 'models';
import { customColors } from './colors';
import { typography } from './typography';

const baseOverrides: CustomOverrideType = {
  grid: {
    gaps: [16, 36, 36],
  },
  typography,
  app: {},
  customColors,
  components: {
    appHeader: {
      height: {
        small: '44px',
        medium: '64px',
        large: '64px',
      },
      zIndex: 1001,
    },
    appSidebar: {},
  },
};

export default baseOverrides;
