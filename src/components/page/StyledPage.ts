import { themedStyled } from '../../theme';

export const StyledPage = themedStyled('div', ({ $theme }) => ({
  ...$theme.typography.ParagraphMedium, // required for applying the primaryFont

  height: '100%',
  backgroundColor: $theme.app.background,
}));
