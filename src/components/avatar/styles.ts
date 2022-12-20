import { themedStyled } from '../../theme';
import { border } from '../../utils';
import { AvatarType } from '../../models';

export interface AvatarWithIconProps {
  $type?: string;
  $backgroundColor?: string;
  $borderColor?: string;
  $height?: string;
}

export const AvatarWithIcon = themedStyled<'div', AvatarWithIconProps>(
  'div',
  ({ $theme, $type, $backgroundColor, $borderColor, $height }) => ({
    ...($type === AvatarType.default
      ? {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: $backgroundColor ?? $theme.colors.primary,
          height: $height ?? $theme.sizing.scale750,
          width: $height ?? $theme.sizing.scale750,
          borderRadius: '50%',
          ...border({
            ...$theme.borders.border100,
          }),
          borderColor: $borderColor ?? $theme.colors.primary,
        }
      : {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: $backgroundColor ?? $theme.customColors.light3,
          height: $height ?? $theme.sizing.scale750,
          width: $height ?? $theme.sizing.scale750,
          borderRadius: '50%',
          ...border({
            ...$theme.borders.border300,
          }),
          borderColor: $borderColor ?? $theme.customColors.dark1,
          borderStyle: 'dashed',
        }),
  }),
);
