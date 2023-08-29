import { themedStyled } from '../../theme';

export const StyledSelectGroupLabelContainer = themedStyled('div', ({ $theme }) => {
  return {
    lineHeight: $theme.sizing.scale700,
  };
});
