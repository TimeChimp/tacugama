import { ConfigurationOverride } from 'baseui/helpers/overrides';

export const getStyleOverrides = (styleOptions: any, style?: ConfigurationOverride | null) => {
  if (!style) {
    return {};
  }

  if (typeof style === 'function') {
    return style(styleOptions);
  }

  return style;
};
