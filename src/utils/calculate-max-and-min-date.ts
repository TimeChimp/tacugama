import { TcDate } from '@timechimp/timechimp-typescript-helpers';

export const calculateMaxAndMinDate = (date: string, maxDate: Date | undefined, minDate: Date | undefined) => {
  const formattedDate = new TcDate(date);
  let updatedMaxDate: Date = maxDate || formattedDate.toDate();
  let updatedMinDate: Date = minDate || formattedDate.toDate();

  updatedMaxDate = formattedDate.isAfter(maxDate!) ? formattedDate.toDate() : updatedMaxDate;
  updatedMinDate = new TcDate(minDate).isAfter(formattedDate.toDate()) ? formattedDate.toDate() : updatedMinDate;

  return {
    updatedMaxDate,
    updatedMinDate,
  };
};
