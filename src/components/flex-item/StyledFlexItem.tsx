import { themedStyled } from '../../theme';
import { margin } from '../../utils';
import { TextAlignProperty, FlexWrapProperty } from '../../models';

export interface FlexItemType {
  $justifyContent?: string;
  $alignItems?: string;
  $textAlign?: TextAlignProperty;
  $width?: string;
  $marg1?: string;
  $marg2?: string;
  $marg3?: string;
  $marg4?: string;
  $gap?: string;
  $height?: string;
  $flexWrap?: FlexWrapProperty;
}

export const StyledItem = themedStyled<'div', FlexItemType>(
  'div',
  ({ $justifyContent, $alignItems, $textAlign, $gap, $width, $marg1, $marg2, $marg3, $marg4, $height, $flexWrap }) => ({
    width: $width || '100%',
    height: $height || 'auto',
    display: 'flex',
    justifyContent: $justifyContent || 'center',
    alignItems: $alignItems || 'center',
    flexWrap: $flexWrap || 'wrap',
    textAlign: $textAlign || 'start',
    gap: $gap || '0px',
    ...margin($marg1, $marg2, $marg3, $marg4),
  }),
);
