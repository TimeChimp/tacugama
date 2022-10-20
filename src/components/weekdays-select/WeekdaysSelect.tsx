import React from 'react';
import { WeekdaysSelectProps } from './types';
import { Container, SelectAllLink, Weekday, WeekdaysContainer } from './styles';
import { ParagraphSmall, TransparentButton } from '..';
import { useTheme } from '../../providers';

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
    <Container>
      <WeekdaysContainer>
        {weekDays.map((day, index) => (
          <Weekday
            key={index}
            $isDisable={isWeekdayDisabled(day.id)}
            $active={isWeekdaySelected(day.id)}
            onClick={() => selectWeekDay(day.id)}
          >
            <ParagraphSmall color={isWeekdayDisabled(day.id) ? dark4 : dark1}>{day.label}</ParagraphSmall>
          </Weekday>
        ))}
      </WeekdaysContainer>
      {withSelectAll && (
        <TransparentButton type="button" onClick={handleSelectAllDays}>
          <SelectAllLink>{selectAllLabel}</SelectAllLink>
        </TransparentButton>
      )}
    </Container>
  );
};