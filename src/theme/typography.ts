import { Theme } from 'baseui/theme';
import { DeepPartial } from '../utils';

export const typography: DeepPartial<Theme['typography']> = {
  /* Heading */
  HeadingXXLarge: {
    fontSize: '40px',
    lineHeight: '52px',
    fontWeight: 400,
  },
  HeadingSmall: {
    fontSize: '24px',
    lineHeight: '32px',
    fontWeight: 400,
  },
  HeadingXSmall: {
    fontSize: '20px',
    lineHeight: '28px',
    fontWeight: 400,
  },
  /* Labels */
  LabelMedium: {
    fontSize: '16px',
    lineHeight: '20px',
    fontWeight: 400,
  },
  LabelSmall: {
    fontSize: '14px',
    lineHeight: '20px',
    fontWeight: 400,
  },
  LabelXSmall: {
    fontSize: '12px',
    lineHeight: '20px',
    fontWeight: 400,
  },
  /* Paragraph */
  ParagraphMedium: {
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: 'normal',
  },
  ParagraphSmall: {
    fontSize: '14px',
    lineHeight: '20px',
    fontWeight: 'normal',
  },
  ParagraphXSmall: {
    fontSize: '12px',
    lineHeight: '20px',
    fontWeight: 'normal',
  },
};
