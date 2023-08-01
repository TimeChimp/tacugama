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

export enum ChangeWeekDirection {
  Next = 'next',
  Previous = 'previous',
}
