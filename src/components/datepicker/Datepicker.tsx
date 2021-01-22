import React from 'react';
import { Popover } from '../popover';
import { TetherPlacement } from 'baseui/layer';
import { borderBottom } from '../../utils';
import { useTheme } from '../../providers/ThemeProvider';
import { ClickOutside } from '../click-outside/ClickOutside';
import { StatefulCalendar } from 'baseui/datepicker';

export interface DatepickerProps {
  date: Date;
  placement?: TetherPlacement[keyof TetherPlacement];
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => any;
  onChange?: (args: { date: Date | Date[] }) => any;
}

export const Datepicker = ({ date, placement = 'bottomLeft', setIsOpen, isOpen, onChange }: DatepickerProps) => {
  const {
    theme: {
      current: {
        borders: { border300 },
        colors: { primaryA, primaryB, contentTertiary },
      },
    },
  } = useTheme();

  return (
    <Popover
      isOpen={isOpen}
      placement={placement}
      content={() => (
        <ClickOutside onClickOutside={() => isOpen && setIsOpen(false)}>
          <StatefulCalendar
            value={date}
            onChange={onChange}
            overrides={{
              CalendarHeader: {
                style: {
                  backgroundColor: primaryB,
                  ...borderBottom(border300),
                },
              },
              MonthHeader: {
                style: {
                  backgroundColor: primaryB,
                  color: primaryA,
                  fontWeight: 600,
                },
              },
              MonthYearSelectButton: {
                style: {
                  color: primaryA,
                  fontWeight: 600,
                },
              },
              PrevButton: {
                style: {
                  color: contentTertiary,
                },
              },
              NextButton: {
                style: {
                  color: contentTertiary,
                },
              },
            }}
          />
        </ClickOutside>
      )}
    >
      <div />
    </Popover>
  );
};
