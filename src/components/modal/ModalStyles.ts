import { ThemeProps } from 'models';
import { borderRadius, margin, padding } from '../../utils';

export const dialogStyle = ({ $theme }: ThemeProps) => ({
  ...borderRadius($theme.borders.radius200),
});

export const modalHeaderStyle = ({ $theme }: ThemeProps) => ({
  ...margin($theme.sizing.scale800),
  ...padding('0', $theme.sizing.scale600, '0', '0'),
});

export const modalBodyStyle = () => ({});

export const modalFooterStyle = ({ $theme }: ThemeProps) => ({
  ...margin($theme.sizing.scale800),
  ...padding('0'),
});
