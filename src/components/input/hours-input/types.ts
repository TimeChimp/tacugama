import { TimeFormat } from '@timechimp/timechimp-typescript-helpers';

export interface HoursInputProps {
  disabled?: boolean;
  error?: boolean;
  endEnhancer?: JSX.Element;
  defaultValue?: string | number;
  onSubmit: (value: number | null | undefined) => void;
  timeFormat?: TimeFormat;
}
