import React, { useEffect, useMemo, useState } from 'react';
import { Popover } from '../popover';
import { borderRadius, padding } from '../../utils';
import { useTheme } from '../../providers';
import { Calendar } from 'baseui/datepicker';
import { getDateLocale, TcDate } from '@timechimp/timechimp-typescript-helpers';
import { DateFilterProps, QuickSelectOption } from './types';
import { FlexItem } from '../flex-item';
import { Button } from '../button';
import { SIZE } from 'baseui/button';
import { ButtonKind, QuickSelectDateOption } from '../../models';
import { Block } from 'baseui/block';
import { Dropdown } from '../dropdown';
import { FilterButton } from '../data-grid/filters/FilterButton';
import { CaretLeftIcon, CaretDownIcon, CaretRightIcon } from '../../components/icons';
import { CalendarComponent } from '../datepicker/components/calendar';

//Move this filter component to datagrid
export const DateFilter = ({
  locale = 'en',
  weekStartDay,
  translations,
  onChange,
  dateFormat,
  defaultQuickSelect = QuickSelectDateOption.THIS_WEEK,
  dates,
}: DateFilterProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeQuickSelectId, setActiveQuickSelectId] = useState<QuickSelectDateOption | undefined>(defaultQuickSelect);
  const quickSelectOptions: QuickSelectOption[] = useMemo(
    () => [
      {
        id: QuickSelectDateOption.TODAY,
        label: translations?.today ?? 'Today',
        beginDate: new Date(),
        endDate: new Date(),
      },
      {
        id: QuickSelectDateOption.YESTERDAY,
        label: translations?.yesterday ?? 'Yesterday',
        beginDate: new TcDate().subtract(1, 'day').toDate(),
        endDate: new TcDate().subtract(1, 'day').toDate(),
      },
      {
        id: QuickSelectDateOption.THIS_WEEK,
        label: translations?.thisWeek ?? 'This week',
        beginDate: new TcDate().startOf('week', 1).getDateWithoutTimeAsUTC(),
        endDate: new TcDate().endOf('week', 1).getDateWithoutTimeAsUTC(),
      },
      {
        id: QuickSelectDateOption.THIS_MONTH,
        label: translations?.thisMonth ?? 'This month',
        beginDate: new TcDate().startOf('month').toDate(),
        endDate: new TcDate().endOf('month').toDate(),
      },
      {
        id: QuickSelectDateOption.THIS_QUARTER,
        label: translations?.thisQuarter ?? 'This quarter',
        beginDate: new TcDate().startOf('quarter').toDate(),
        endDate: new TcDate().endOf('quarter').toDate(),
      },
      {
        id: QuickSelectDateOption.THIS_YEAR,
        label: translations?.thisYear ?? 'This year',
        beginDate: new TcDate().startOf('year').toDate(),
        endDate: new TcDate().endOf('year').toDate(),
      },
      {
        id: QuickSelectDateOption.PREVIOUS_WEEK,
        label: translations?.previousWeek ?? 'Previous week',
        beginDate: new TcDate().subtract(1, 'week').startOf('week', 1).toDate(),
        endDate: new TcDate().subtract(1, 'week').endOf('week', 1).toDate(),
      },
      {
        id: QuickSelectDateOption.PREVIOUS_MONTH,
        label: translations?.previousMonth ?? 'Previous month',
        beginDate: new TcDate().subtract(1, 'month').startOf('month').toDate(),
        endDate: new TcDate().subtract(1, 'month').endOf('month').toDate(),
      },
      {
        id: QuickSelectDateOption.PREVIOUS_QUARTER,
        label: translations?.previousQuarter ?? 'Previous quarter',
        beginDate: new TcDate().subtract(1, 'quarter').startOf('quarter').toDate(),
        endDate: new TcDate().subtract(1, 'quarter').endOf('quarter').toDate(),
      },
      {
        id: QuickSelectDateOption.PREVIOUS_YEAR,
        label: translations?.previousYear ?? 'Previous year',
        beginDate: new TcDate().subtract(1, 'year').startOf('year').toDate(),
        endDate: new TcDate().subtract(1, 'year').endOf('year').toDate(),
      },
      {
        id: QuickSelectDateOption.CUSTOM,
        label: translations?.custom ?? 'Custom',
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
      setInternalDate([activeQuickSelect?.beginDate, activeQuickSelect?.endDate]);
      //onChange && onChange([activeQuickSelect?.beginDate, activeQuickSelect?.endDate]);
    }
  }, [activeQuickSelect]);

  const quickSelectOptionsAction = useMemo(() => {
    return quickSelectOptions.map((option) => ({
      ...option,
      action: () => onQuickSelect(option),
    }));
  }, []);

  const [localeObj, setLocaleObj] = useState<Locale>();

  const {
    theme: {
      current: {
        typography,
        typography: { ParagraphSmall, ParagraphMedium, LabelMedium },
        sizing,
        sizing: { scale300, scale200, scale600, scale100 },
        colors: { primaryA, primaryB },
        borders: { radius200 },
      },
    },
  } = useTheme();
  console.log('typeee', typography);

  const getDateTitleFormat = (date: Date) => new TcDate(date).format(dateFormat);

  const dateTitle = useMemo(() => {
    if (dates?.length === 2) {
      return `${getDateTitleFormat(dates[0])} - ${getDateTitleFormat(dates[1])}`;
    }
    return '';
  }, [dates, dateFormat]);

  useEffect(() => {
    if (locale) {
      const localeObj = getDateLocale(locale);

      if (weekStartDay && localeObj.options) {
        localeObj.options.weekStartsOn = weekStartDay;
      }

      setLocaleObj(localeObj);
    }
  }, [locale, weekStartDay]);

  const onQuickSelect = (option: QuickSelectOption) => {
    if (!option) {
      return;
    }

    setActiveQuickSelectId(option?.id);
  };

  const [internalDate, setInternalDate] = useState<Date[]>([]);

  const onCalendarChange = (date: Date | (Date | null | undefined)[] | undefined | null) => {
    if (Array.isArray(date)) {
      const filteredDates = date?.filter((d) => d) as Date[];
      setInternalDate((prevDate) => {
        if (filteredDates.length === 2 || prevDate?.length === 2) {
          return filteredDates;
        }
        return [...prevDate, filteredDates[0]];
      });
      return;
    }
    if (date) {
      setInternalDate([date]);
    }

    // if (!date) {
    //   setInternalDate(date);
    //   return;
    // }
    // if (!internalDate || !Array.isArray(internalDate) || internalDate?.length || date?.length === 2) {
    //   setInternalDate(Array.isArray(date) ? date : [date]);
    //   return;
    // }

    // setInternalDate((prevDate) => {
    //   if (!date) {
    //     return null;
    //   }

    //   if (Array.isArray(date) && date.length === 2) {
    //     return date;
    //   }

    //   if (!prevDate && date) {
    //     return Array.isArray(date) ? date : [date];
    //   }

    //   if (Array.isArray(prevDate) && prevDate?.length === 1) {
    //     return [...prevDate, Array.isArray(date) ? date[0] : date];
    //   }
    //   if (Array.isArray(prevDate) && prevDate?.length === 2) {
    //     return Array.isArray(date) ? date : [date];
    //   }
    // });
  };

  useEffect(() => {
    console.log('internalll date', internalDate);
    if (internalDate?.length === 2) {
      onChange(internalDate as [Date, Date]);
      setIsOpen(false);
    }
  }, [internalDate]);

  return (
    <FlexItem gap={scale300} flexWrap="nowrap" justifyContent="start">
      <Block>
        <Dropdown
          items={quickSelectOptionsAction}
          selectedIds={activeQuickSelect?.id ? [activeQuickSelect.id] : undefined}
          isLoading={false}
        >
          <FilterButton
            title={activeQuickSelect?.label ?? ''}
            // startEnhancer={getSelectActiveItem(columnField, values).icon}
            size={SIZE.compact}
            arrows
            // onClear={clearable ? () => onSelectFilterClear(columnField) : undefined}
            // hasValue={getSelectHasValue(columnField)}
            // isActive={getSelectHasValue(columnField)}
          />
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
          content={() => (
            <CalendarComponent
              locale={locale}
              date={internalDate}
              onChange={onCalendarChange}
              weekStartDay={weekStartDay}
            />
          )}
        >
          <Button size={SIZE.compact} kind={ButtonKind.secondary}>
            {dateTitle}
          </Button>
        </Popover>
      ) : null}
    </FlexItem>
  );
};
