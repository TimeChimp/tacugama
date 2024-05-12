import React, { useEffect, useMemo, useState } from 'react';
import { Popover } from '../popover';
import { useTheme } from '../../providers';
import { TcDate } from '@timechimp/timechimp-typescript-helpers';
import { DateFilterProps, QuickSelectOption } from './types';
import { FlexItem } from '../flex-item';
import { Button } from '../button';
import { SIZE } from 'baseui/button';
import { ButtonKind, QuickSelectDateOption } from '../../models';
import { Block } from 'baseui/block';
import { Dropdown } from '../dropdown';
import { FilterButton } from '../data-grid/filters/FilterButton';
import { CalendarComponent } from '../datepicker/components/calendar';

export const DateFilter = ({
  locale = 'en',
  translations,
  onChange,
  dateFormat,
  defaultQuickSelect = QuickSelectDateOption.THIS_WEEK,
  dates,
}: DateFilterProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeQuickSelectId, setActiveQuickSelectId] = useState<QuickSelectDateOption>(defaultQuickSelect);
  const [internalDate, setInternalDate] = useState<Date[]>([]);

  const onQuickSelect = (option: QuickSelectOption) => {
    setActiveQuickSelectId(option?.id);
  };

  const quickSelectOptions: QuickSelectOption[] = useMemo(
    () => [
      {
        id: QuickSelectDateOption.TODAY,
        label: translations?.today ?? 'Today',
        beginDate: new Date(),
        endDate: new Date(),
        action: function () {
          onQuickSelect(this);
        },
      },
      {
        id: QuickSelectDateOption.YESTERDAY,
        label: translations?.yesterday ?? 'Yesterday',
        beginDate: new TcDate().subtract(1, 'day').toDate(),
        endDate: new TcDate().subtract(1, 'day').toDate(),
        action: function () {
          onQuickSelect(this);
        },
      },
      {
        id: QuickSelectDateOption.THIS_WEEK,
        label: translations?.thisWeek ?? 'This week',
        beginDate: new TcDate().startOf('week', 1).getDateWithoutTimeAsUTC(),
        endDate: new TcDate().endOf('week', 1).getDateWithoutTimeAsUTC(),
        action: function () {
          onQuickSelect(this);
        },
      },
      {
        id: QuickSelectDateOption.THIS_MONTH,
        label: translations?.thisMonth ?? 'This month',
        beginDate: new TcDate().startOf('month').toDate(),
        endDate: new TcDate().endOf('month').toDate(),
        action: function () {
          onQuickSelect(this);
        },
      },
      {
        id: QuickSelectDateOption.THIS_QUARTER,
        label: translations?.thisQuarter ?? 'This quarter',
        beginDate: new TcDate().startOf('quarter').toDate(),
        endDate: new TcDate().endOf('quarter').toDate(),
        action: function () {
          onQuickSelect(this);
        },
      },
      {
        id: QuickSelectDateOption.THIS_YEAR,
        label: translations?.thisYear ?? 'This year',
        beginDate: new TcDate().startOf('year').toDate(),
        endDate: new TcDate().endOf('year').toDate(),
        action: function () {
          onQuickSelect(this);
        },
      },
      {
        id: QuickSelectDateOption.PREVIOUS_WEEK,
        label: translations?.previousWeek ?? 'Previous week',
        beginDate: new TcDate().subtract(1, 'week').startOf('week', 1).toDate(),
        endDate: new TcDate().subtract(1, 'week').endOf('week', 1).toDate(),
        action: function () {
          onQuickSelect(this);
        },
      },
      {
        id: QuickSelectDateOption.PREVIOUS_MONTH,
        label: translations?.previousMonth ?? 'Previous month',
        beginDate: new TcDate().subtract(1, 'month').startOf('month').toDate(),
        endDate: new TcDate().subtract(1, 'month').endOf('month').toDate(),
        action: function () {
          onQuickSelect(this);
        },
      },
      {
        id: QuickSelectDateOption.PREVIOUS_QUARTER,
        label: translations?.previousQuarter ?? 'Previous quarter',
        beginDate: new TcDate().subtract(1, 'quarter').startOf('quarter').toDate(),
        endDate: new TcDate().subtract(1, 'quarter').endOf('quarter').toDate(),
        action: function () {
          onQuickSelect(this);
        },
      },
      {
        id: QuickSelectDateOption.PREVIOUS_YEAR,
        label: translations?.previousYear ?? 'Previous year',
        beginDate: new TcDate().subtract(1, 'year').startOf('year').toDate(),
        endDate: new TcDate().subtract(1, 'year').endOf('year').toDate(),
        action: function () {
          onQuickSelect(this);
        },
      },
      {
        id: QuickSelectDateOption.CUSTOM,
        label: translations?.custom ?? 'Custom',
        action: function () {
          onQuickSelect(this);
        },
      },
    ],
    [],
  );

  const activeQuickSelect = useMemo(() => {
    return quickSelectOptions.find((option) => option.id === activeQuickSelectId);
  }, [activeQuickSelectId]);

  useEffect(() => {
    if (
      activeQuickSelect?.id !== QuickSelectDateOption.CUSTOM &&
      activeQuickSelect?.beginDate &&
      activeQuickSelect?.endDate
    ) {
      setInternalDate([activeQuickSelect.beginDate, activeQuickSelect.endDate]);
    }
  }, [activeQuickSelect]);

  const {
    theme: {
      current: {
        sizing: { scale300 },
        colors: { primaryB },
      },
    },
  } = useTheme();

  const getDateTitleFormat = (date: Date) => new TcDate(date).format(dateFormat);

  const dateTitle = useMemo(() => {
    if (dates?.length === 2) {
      return `${getDateTitleFormat(dates[0])} - ${getDateTitleFormat(dates[1])}`;
    }
    return translations?.chooseRangeLabel ?? 'Choose a date range';
  }, [dates, dateFormat]);

  const onCalendarChange = (date: Date | (Date | null | undefined)[] | undefined | null) => {
    if (Array.isArray(date)) {
      const filteredDates: Date[] = date.filter((d) => d instanceof Date) as Date[];

      setInternalDate((prevDate) => {
        if (filteredDates.length === 2 || prevDate?.length === 2) {
          return filteredDates;
        }
        return [...prevDate, ...filteredDates];
      });
      return;
    }
    if (date) {
      setInternalDate([date]);
    }
  };

  useEffect(() => {
    if (internalDate?.length === 2) {
      onChange(internalDate as [Date, Date]);
      setIsOpen(false);
    }
  }, [internalDate]);

  return (
    <FlexItem gap={scale300} flexWrap="nowrap" justifyContent="start">
      <Block>
        <Dropdown
          items={quickSelectOptions}
          selectedIds={activeQuickSelect?.id ? [activeQuickSelect.id] : undefined}
          isLoading={false}
        >
          <FilterButton title={activeQuickSelect?.label ?? ''} size={SIZE.compact} arrows />
        </Dropdown>
      </Block>

      {activeQuickSelect?.id === QuickSelectDateOption.CUSTOM ? (
        <Popover
          isOpen={isOpen}
          placement="bottomRight"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          onClickOutside={() => {
            isOpen && setIsOpen(false);
          }}
          overrides={{
            Body: {
              style: {
                zIndex: 1000,
              },
            },
            Arrow: {
              style: {
                backgroundColor: primaryB,
              },
            },
          }}
          showArrow
          content={() => <CalendarComponent locale={locale} date={internalDate} onChange={onCalendarChange} />}
        >
          <Button size={SIZE.compact} kind={ButtonKind.secondary}>
            {dateTitle}
          </Button>
        </Popover>
      ) : null}
    </FlexItem>
  );
};
