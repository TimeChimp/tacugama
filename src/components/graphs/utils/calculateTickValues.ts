import { TcDate } from '@timechimp/timechimp-typescript-helpers';
import { eachMonthOfInterval, max, min } from 'date-fns';
import { DEFAULT_GRAPH_DATA_RANGE, MIN_DAYS_TO_GRAPH_AXIS_TICK, MAX_DAYS_TO_GRAPH_AXIS_TICK } from '../../../models';

export const calculateDateAxisRange = (dates: Date[]): Date[] => {
  const maxDate: Date = max(dates);
  const minDate: Date = min(dates);
  const listOfMonthes: Date[] = eachMonthOfInterval({ start: minDate, end: maxDate });

  const tickDates: Date[] = listOfMonthes.reduce<Date[]>((acc, month, index) => {
    const monthTickDates = DEFAULT_GRAPH_DATA_RANGE.filter((dayNumber) => {
      if (
        (index === 0 && dayNumber - minDate.getDate() < MIN_DAYS_TO_GRAPH_AXIS_TICK) ||
        (index === listOfMonthes.length - 1 && dayNumber - maxDate.getDate() > MAX_DAYS_TO_GRAPH_AXIS_TICK)
      ) {
        return false;
      }

      return true;
    }).map((day: number) => new Date(`${new TcDate(month).format('yyyy-M')}-${day}`));

    return [...acc, ...monthTickDates];
  }, []);

  return [maxDate, ...tickDates, minDate];
};
