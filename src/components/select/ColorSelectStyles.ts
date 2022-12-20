import { themedStyled } from '../../theme';

interface StyledColorSwatchProps {
  $color: string;
}

export const StyledColorSwatch = themedStyled<'div', StyledColorSwatchProps>(
  'div',
  ({ $color }: { $color: string }) => {
    return {
      width: '24px',
      height: '24px',
      display: 'inline-block',
      backgroundColor: $color,
      verticalAlign: 'baseline',
    };
  },
);

export const StyledOption = themedStyled('div', {
  display: 'flex',
  alignItems: 'center',
});
