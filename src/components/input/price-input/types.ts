import { KeyboardEvent, FocusEvent } from 'react';
import { NumberFormat } from '@timechimp/timechimp-typescript-helpers';
import { NumberFormatProps } from 'react-number-format';

export interface PriceInputComponentProps extends NumberFormatProps {
  $error?: boolean;
}

type OmitValues = 'onChange' | 'onValueChange';

export interface PriceInputProps extends Omit<NumberFormatProps, OmitValues> {
  error?: boolean | undefined;
  onChange: (value: string) => void;
  numberFormat?: NumberFormat;
  testId?: string;
  onKeyPress?: ((event: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => void) | undefined;
  onBlur?:
    | (((e: FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>) => void) &
        ((e: FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>) => void))
    | undefined;
}
