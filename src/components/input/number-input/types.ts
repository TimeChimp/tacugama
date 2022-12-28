import { NumberFormat } from '@timechimp/timechimp-typescript-helpers';
import { NumberFormatProps } from 'react-number-format';

export interface NumberInputComponentProps extends NumberFormatProps {
  $error?: boolean;
}

type OmitValues = 'onChange' | 'onValueChange';

export interface NumberInputProps extends Omit<NumberFormatProps, OmitValues> {
  error?: boolean | undefined;
  onChange: (value: string) => void;
  numberFormat?: NumberFormat;
  testId?: string;
  onFocus?: (value: any) => void;
  onKeyPress?: ((e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => void) | undefined;
  onBlur?:
    | (((e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>) => void) &
        ((e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>) => void))
    | undefined;
}
