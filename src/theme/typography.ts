import { Theme } from 'baseui/theme';
import { DeepPartial } from 'utils';

export const typography: DeepPartial<Theme['typography']> = {
  /* Heading */
  HeadingSmall: {
    fontSize: '24px',
    lineHeight: '32px',
    fontWeight: 600,
  },
  HeadingXSmall: {
    fontSize: '20px',
    lineHeight: '28px',
    fontWeight: 600,
  },
  /* Labels */
  LabelMedium: {
    fontSize: '16px',
    lineHeight: '20px',
    fontWeight: 600,
  },
  LabelSmall: {
    fontSize: '14px',
    lineHeight: '20px',
    fontWeight: 600,
  },
  LabelXSmall: {
    fontSize: '12px',
    lineHeight: '20px',
    fontWeight: 600,
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
