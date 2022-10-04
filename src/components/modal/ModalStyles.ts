import { CustomThemeProps } from 'models';
import { borderBottom, borderTop, margin, padding } from '../../utils';

export const modalHeaderStyle = ({ $theme }: CustomThemeProps) => ({
  ...margin('0'),
  ...padding($theme.sizing.scale550, $theme.sizing.scale1200),
  ...borderBottom({
    ...$theme.borders.border300,
    borderColor: $theme.customColors.light3,
  }),
});

export const modalBodyStyle = ({ $theme }: CustomThemeProps) => ({
  ...margin('0'),
  overflow: 'auto',
  maxHeight: 'calc(100vh - 200px)',
  ...padding($theme.sizing.scale800, $theme.sizing.scale1200, $theme.sizing.scale900, $theme.sizing.scale1200),
});

export const modalFooterStyle = ({ $theme }: CustomThemeProps) => ({
  ...margin('0'),
  ...padding('11px', $theme.sizing.scale1200, '11px', $theme.sizing.scale1200), // NOTE: 11px doesn't exist in the theme
  ...borderTop({
    ...$theme.borders.border300,
    borderColor: $theme.customColors.light3,
  }),
});
