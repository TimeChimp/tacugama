import React from 'react';
import { WeekdaysSelectProps } from './types';
import { WeekdaysSelectContainer, SelectAllLink, WeekdayComponent, WeekdaysContainer } from './styles';
import { ParagraphSmall } from '../typography/paragraph-small';
import { Button } from '../button';
import { useTheme } from '../../providers';
import { ButtonKind } from '../../models';

export const WeekdaysSelect = ({
  weekDays = [],
  selectedWeekDays,
  selectWeekDay,
  setSelectedWeekdays,
  selectAllWithDisabled = false,
  withSelectAll = false,
  selectAllLabel,
  disabledDays,
}: WeekdaysSelectProps) => {
  const {
    theme: {
      current: {
        customColors: { dark1, dark4 },
      },
    },
  } = useTheme();
  const isWeekdaySelected = (day: string) => selectedWeekDays.includes(day);

  const isWeekdayDisabled = (day: string) => !!disabledDays?.includes(day);

  const handleSelectAllDays = () => {
    if (setSelectedWeekdays) {
      if (selectedWeekDays?.length === weekDays?.length) {
        return setSelectedWeekdays([]);
      }
      if (selectAllWithDisabled) {
        return setSelectedWeekdays(weekDays.map(({ id }) => id));
      }
      setSelectedWeekdays(weekDays.map(({ id }) => id).filter((id) => !disabledDays?.includes(id)));
    }
  };

  return (
    <WeekdaysSelectContainer>
      <WeekdaysContainer>
        {weekDays.map((day, index) => (
          <WeekdayComponent
            key={index}
            $isDisabled={isWeekdayDisabled(day.id)}
            $active={isWeekdaySelected(day.id)}
            onClick={() => selectWeekDay(day.id)}
          >
            <ParagraphSmall color={isWeekdayDisabled(day.id) ? dark4 : dark1}>{day.label}</ParagraphSmall>
          </WeekdayComponent>
        ))}
      </WeekdaysContainer>
      {withSelectAll && (
        <Button kind={ButtonKind.minimal} onClick={handleSelectAllDays}>
          <SelectAllLink>{selectAllLabel}</SelectAllLink>
        </Button>
      )}
    </WeekdaysSelectContainer>
  );
};
