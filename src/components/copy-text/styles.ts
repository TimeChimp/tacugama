import { ParagraphSmall } from 'baseui/typography';
import { themedStyled } from '../../theme';

export const StyledParagraphSmall = themedStyled(ParagraphSmall, () => ({
  wordBreak: 'break-all',
}));
