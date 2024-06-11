import React, { useState } from 'react';
import { TcDate } from '@timechimp/timechimp-typescript-helpers';
import { DatePickerProps, ChangeWeekDirection } from './types';
import { useTheme } from '../../providers';
import { ButtonGroup } from '../button-group';
import { border, borderRadius, padding } from '../../utils';
import { Button } from '../button';
import { ParagraphSmall } from '../typography';
import { CaretLeft, CaretRight, Crosshair } from '@phosphor-icons/react';

export const DatePicker = ({ date, setDate, display, displayText }: DatePickerProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const {
    theme: {
      current: {
        sizing: { scale200, scale400, scale800 },
        borders: { border300, radius200 },
        colors: { backgroundSecondary, primaryA },
      },
    },
  } = useTheme();

  const changeWeek = (type: ChangeWeekDirection) =>
    setDate(new TcDate(date).add(type === ChangeWeekDirection.Next ? 1 : -1, display).toDate());

  return (
    <ButtonGroup
      size="compact"
      overrides={{
        Root: {
          style: {
            height: scale800,
            ...border(border300),
            backgroundColor: backgroundSecondary,
            ...borderRadius(radius200),
          },
        },
      }}
    >
      <Button
        overrides={{
          BaseButton: {
            style: {
              backgroundColor: backgroundSecondary,
              ...padding(scale200, scale400),
              ...borderRadius(radius200),
            },
          },
        }}
        onClick={() => changeWeek(ChangeWeekDirection.Previous)}
      >
        <CaretLeft color={primaryA} />
      </Button>
      <Button
        overrides={{
          BaseButton: {
            style: {
              backgroundColor: backgroundSecondary,
              ...padding(scale200, scale400),
              ...borderRadius(radius200),
            },
          },
        }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <ParagraphSmall>{displayText}</ParagraphSmall>
      </Button>
      <Button
        overrides={{
          BaseButton: {
            style: {
              backgroundColor: backgroundSecondary,
              ...padding(scale200, scale400),
              ...borderRadius(radius200),
            },
          },
        }}
        onClick={() => setDate(new Date())}
      >
        <Crosshair color={primaryA} />
      </Button>
      <Button
        overrides={{
          BaseButton: {
            style: {
              backgroundColor: backgroundSecondary,
              ...padding(scale200, scale400),
              ...borderRadius(radius200),
            },
          },
        }}
        onClick={() => changeWeek(ChangeWeekDirection.Next)}
      >
        <CaretRight color={primaryA} />
      </Button>
    </ButtonGroup>
  );
};
