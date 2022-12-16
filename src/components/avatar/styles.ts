import { themedStyled } from '../../theme';
import { border } from '../../utils';
import { AvatarType } from '../../models';

export interface AvatarWithIconProps {
  $type?: string;
}

export const AvatarWithIcon = themedStyled<'div', AvatarWithIconProps>('div', ({ $theme, $type }) => ({
  ...($type === AvatarType.default
    ? {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: $theme.colors.primary,
        height: $theme.sizing.scale750,
        width: $theme.sizing.scale750,
        borderRadius: '50%',
        ...border({
          ...$theme.borders.border100,
        }),
      }
    : {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: $theme.customColors.light3,
        height: $theme.sizing.scale750,
        width: $theme.sizing.scale750,
        borderRadius: '50%',
        ...border({
          ...$theme.borders.border300,
          borderColor: $theme.customColors.dark1,
          borderStyle: 'dashed',
        }),
      }),
}));
