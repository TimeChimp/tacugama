import { DurationFormat } from '@timechimp/timechimp-typescript-helpers';

export interface HoursInputProps {
  disabled?: boolean;
  error?: boolean;
  endEnhancer: JSX.Element;
  defaultValue: string;
  onSubmit: (value: number | null | undefined) => void;
  durationFormat?: DurationFormat;
}
