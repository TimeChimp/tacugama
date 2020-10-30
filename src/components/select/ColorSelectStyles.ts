import { themedStyled } from '../../theme';

export const StyledColorSwatch = themedStyled('div', ({ $color }: { $color: string }) => {
  return {
    width: '24px',
    height: '24px',
    display: 'inline-block',
    backgroundColor: $color,
    verticalAlign: 'baseline',
  };
});

export const StyledOption = themedStyled('div', {
  display: 'flex',
  alignItems: 'center',
});
