import { Border } from 'baseui/theme';

export const padding = (pad1?: string, pad2?: string, pad3?: string, pad4?: string) => {
  if (pad4) {
    return {
      paddingTop: pad1,
      paddingRight: pad2,
      paddingBottom: pad3,
      paddingLeft: pad4,
    };
  }

  if (pad3) {
    return {
      paddingTop: pad1,
      paddingRight: pad2,
      paddingBottom: pad3,
      paddingLeft: pad2,
    };
  }

  if (pad2) {
    return {
      paddingTop: pad1,
      paddingRight: pad2,
      paddingBottom: pad1,
      paddingLeft: pad2,
    };
  }

  return {
    paddingTop: pad1,
    paddingRight: pad1,
    paddingBottom: pad1,
    paddingLeft: pad1,
  };
};

export const margin = (marg1?: string, marg2?: string, marg3?: string, marg4?: string) => {
  if (marg4) {
    return {
      marginTop: marg1,
      marginRight: marg2,
      marginBottom: marg3,
      marginLeft: marg4,
    };
  }

  if (marg3) {
    return {
      marginTop: marg1,
      marginRight: marg2,
      marginBottom: marg3,
      marginLeft: marg2,
    };
  }

  if (marg2) {
    return {
      marginTop: marg1,
      marginRight: marg2,
      marginBottom: marg1,
      marginLeft: marg2,
    };
  }

  return {
    marginTop: marg1,
    marginRight: marg1,
    marginBottom: marg1,
    marginLeft: marg1,
  };
};

export const borderTop = (border?: Border) => {
  return {
    borderTopWidth: border ? border.borderWidth : '0px',
    borderTopStyle: border ? (border.borderStyle as BorderStyle) : 'none',
    borderTopColor: border ? border.borderColor : 'none',
  };
};

export const borderRight = (border?: Border) => {
  return {
    borderRightWidth: border ? border.borderWidth : '0px',
    borderRightStyle: border ? (border.borderStyle as BorderStyle) : 'none',
    borderRightColor: border ? border.borderColor : 'none',
  };
};

export const borderBottom = (border?: Border) => {
  return {
    borderBottomWidth: border ? border.borderWidth : '0px',
    borderBottomStyle: border ? (border.borderStyle as BorderStyle) : 'none',
    borderBottomColor: border ? border.borderColor : 'none',
  };
};

export const borderLeft = (border?: Border) => {
  return {
    borderLeftWidth: border ? border.borderWidth : '0px',
    borderLeftStyle: border ? (border.borderStyle as BorderStyle) : 'none',
    borderLeftColor: border ? border.borderColor : 'none',
  };
};

export const border = (border?: Border) => {
  return {
    ...borderTop(border),
    ...borderRight(border),
    ...borderBottom(border),
    ...borderLeft(border),
  };
};

export const borderRadius = (radius: string) => {
  return {
    borderTopRightRadius: radius,
    borderTopLeftRadius: radius,
    borderBottomRightRadius: radius,
    borderBottomLeftRadius: radius,
  };
};

export type BorderStyle =
  | 'inset'
  | '-moz-initial'
  | 'inherit'
  | 'initial'
  | 'revert'
  | 'unset'
  | 'none'
  | 'hidden'
  | 'dashed'
  | 'dotted'
  | 'double'
  | 'groove'
  | 'outset'
  | 'ridge'
  | 'solid'
  | undefined;
