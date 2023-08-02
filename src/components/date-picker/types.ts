export enum WeekMonthDisplay {
  week = 'week',
  month = 'month',
}

export interface DatePickerProps {
  date: Date;
  setDate: (updatedDate: Date) => void;
  display: WeekMonthDisplay;
  displayText: string;
}

export interface Day {
  id: string;
  date: Date;
  shortName: string;
  month?: string;
  weekDay: string;
  isToday: boolean;
  isHoliday: boolean;
  week: number;
}

export enum ChangeWeekDirection {
  Next = 'next',
  Previous = 'previous',
}
