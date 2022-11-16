import { Dispatch, SetStateAction } from 'react';

export interface WeekdaysSelectProps {
  weekDays: Weekday[];
  selectedWeekDays: string[];
  selectWeekDay: (weekDay: string) => void;
  setSelectedWeekdays?: Dispatch<SetStateAction<string[]>>;
  withSelectAll?: boolean;
  disabledDays?: string[];
  selectAllLabel?: string;
  selectAllWithDisabled?: boolean;
}

export interface StyledWeekdayProps {
  $active: boolean;
  $isDisabled: boolean;
}

export interface Weekday {
  id: string;
  label: string;
}
