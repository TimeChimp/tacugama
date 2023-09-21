import { TimeFormat } from '@timechimp/timechimp-typescript-helpers';
import { InputProps } from '../types';

export interface HoursInputProps extends InputProps {
  disabled?: boolean;
  endEnhancer?: JSX.Element;
  defaultValue?: string | number;
  onSubmit: (value: number | null | undefined) => void;
  timeFormat?: TimeFormat;
}
