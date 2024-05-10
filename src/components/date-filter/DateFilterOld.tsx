import React, { useEffect, useMemo, useState } from 'react';
import { Popover } from '../popover';
import { borderBottom, borderRadius, padding } from '../../utils';
import { useTheme } from '../../providers';
import { Calendar, DatePicker, StatefulCalendar } from 'baseui/datepicker';
import { getDateLocale, TcDate } from '@timechimp/timechimp-typescript-helpers';
import { DatepickerOption, DateFilterProps, QuickSelectOption } from './types';
import { LabelSmall } from '../typography/label-small';
import { FlexItem } from '../flex-item';
import { SingleSelect } from '../select';
import { Button } from '../button';
import { SIZE } from 'baseui/button';
import { ButtonKind } from '../../models';
import { CalendarIcon } from '../icons';
import { Block } from 'baseui/block';
import { Dropdown } from '../dropdown';
import { FilterButton } from '../data-grid/filters/FilterButton';
import { nl } from 'date-fns/locale';
import { ChevronDown, ChevronLeft, ChevronRight } from 'baseui/icon';
import { components } from 'react-select';
import { set } from 'date-fns';

const ChevronDownIcon = () => {
  return <ChevronDown size={30} />;
};

const ChrevronLeftIcon = () => {
  return <ChevronLeft size={30} />;
};

const ChevronRightIcon = ({ ...rest }) => {
  // const {
  //   theme: {
  //     current: {
  //       colors: { primaryA },
  //     },
  //   },
  // } = useTheme();
  // console.log(';testtt::: ', rest);
  return <ChevronRight {...rest} size={50} />;
};

//Move this filter component to datagrid
// export const DateFilter = ({
//   placement = 'bottomRight',
//   locale = 'en',
//   weekStartDay,
//   overrides,
//   translations,
//   onChange,
//   quickSelect = false,
//   dateFormat,
//   // isOpen,
//   // setIsOpen,
//   activeQuickSelectId,
//   setActiveQuickSelectId,
//   dates,
// }: DateFilterProps) => {
//     return <div>test</div>;
//   const [isOpen, setIsOpen] = useState(false);
//   //const [activeQuickSelectId, setActiveQuickSelectId] = useState<QuickSelectOptionId | undefined>();
//   const quickSelectOptions: QuickSelectOption[] = useMemo(
//     () => [
//       // {
//       //   id: QuickSelectOptionId.ALL_PERIODS,
//       //   label: translations?.allPeriods ?? 'All periods',
//       //   beginDate: new Date('01-01-1900'),
//       //   endDate: new Date('01-01-9999'),
//       // },
//       {
//         id: QuickSelectOptionId.TODAY,
//         label: translations?.today ?? 'Today',
//         beginDate: new Date(),
//         endDate: new Date(),
//       },
//       {
//         id: QuickSelectOptionId.YESTERDAY,
//         label: translations?.yesterday ?? 'Yesterday',
//         beginDate: new TcDate().subtract(1, 'day').toDate(),
//         endDate: new TcDate().subtract(1, 'day').toDate(),
//       },
//       {
//         id: QuickSelectOptionId.THIS_WEEK,
//         label: translations?.thisWeek ?? 'This week',
//         beginDate: new TcDate().startOf('week', 1).getDateWithoutTimeAsUTC(),
//         endDate: new TcDate().endOf('week', 1).getDateWithoutTimeAsUTC(),
//       },
//       {
//         id: QuickSelectOptionId.THIS_MONTH,
//         label: translations?.thisMonth ?? 'This month',
//         beginDate: new TcDate().startOf('month').toDate(),
//         endDate: new TcDate().endOf('month').toDate(),
//       },
//       {
//         id: QuickSelectOptionId.THIS_QUARTER,
//         label: translations?.thisQuarter ?? 'This quarter',
//         beginDate: new TcDate().startOf('quarter').toDate(),
//         endDate: new TcDate().endOf('quarter').toDate(),
//       },
//       {
//         id: QuickSelectOptionId.THIS_YEAR,
//         label: translations?.thisYear ?? 'This year',
//         beginDate: new TcDate().startOf('year').toDate(),
//         endDate: new TcDate().endOf('year').toDate(),
//       },
//       {
//         id: QuickSelectOptionId.PREVIOUS_WEEK,
//         label: translations?.previousWeek ?? 'Previous week',
//         beginDate: new TcDate().subtract(1, 'week').startOf('week', 1).toDate(),
//         endDate: new TcDate().subtract(1, 'week').endOf('week', 1).toDate(),
//       },
//       {
//         id: QuickSelectOptionId.PREVIOUS_MONTH,
//         label: translations?.previousMonth ?? 'Previous month',
//         beginDate: new TcDate().subtract(1, 'month').startOf('month').toDate(),
//         endDate: new TcDate().subtract(1, 'month').endOf('month').toDate(),
//       },
//       {
//         id: QuickSelectOptionId.PREVIOUS_QUARTER,
//         label: translations?.previousQuarter ?? 'Previous quarter',
//         beginDate: new TcDate().subtract(1, 'quarter').startOf('quarter').toDate(),
//         endDate: new TcDate().subtract(1, 'quarter').endOf('quarter').toDate(),
//       },
//       {
//         id: QuickSelectOptionId.PREVIOUS_YEAR,
//         label: translations?.previousYear ?? 'Previous year',
//         beginDate: new TcDate().subtract(1, 'year').startOf('year').toDate(),
//         endDate: new TcDate().subtract(1, 'year').endOf('year').toDate(),
//       },
//       {
//         id: QuickSelectOptionId.CUSTOM,
//         label: translations?.custom ?? 'Custom',
//       },
//     ],
//     [],
//   );

//   const activeQuickSelect = useMemo(() => {
//     return quickSelectOptions.find((option) => option.id === activeQuickSelectId);
//   }, [activeQuickSelectId]);

//   useEffect(() => {
//     if (activeQuickSelect?.beginDate && activeQuickSelect?.endDate) {
//       console.log('testtt::: ', activeQuickSelect);
//       setInternalDate([activeQuickSelect?.beginDate, activeQuickSelect?.endDate]);
//       //onChange && onChange([activeQuickSelect?.beginDate, activeQuickSelect?.endDate]);
//     }
//   }, [activeQuickSelect]);

//   // useEffect(() => {
//   //   console.log(';;; internal', internalDate);
//   // }, [internalDate]);

//   const quickSelectOptionsAction = useMemo(() => {
//     return quickSelectOptions.map((option) => ({
//       ...option,
//       action: () => onQuickSelect(option),
//     }));
//   }, []);

//   //const [isOpen, setIsOpen] = useState(false);
//   const [localeObj, setLocaleObj] = useState<Locale>();
//   // const [activeQuickSelectOption, setActiveQuickSelectOption] = useState<QuickSelectOption | undefined>(
//   //   quickSelectOptions[quickSelectOptions.length - 1],
//   // );

//   const {
//     theme: {
//       current: {
//         typography: { ParagraphSmall },
//         customSizing,
//         sizing,
//         sizing: { scale300, scale500, scale200, scale600, scale100 },
//         borders: { border300 },
//         customColors: { primaryLighter },
//         colors: { primaryA, primaryB, primary },
//         borders: { radius200 },
//       },
//     },
//   } = useTheme();

//   const getDateTitleFormat = (date: Date) => new TcDate(date).format(dateFormat);

//   const dateTitle = useMemo(() => {
//     if (dates?.length === 2) {
//       return `${getDateTitleFormat(dates[0])} - ${getDateTitleFormat(dates[1])}`;
//     }
//     return '';
//   }, [dates, dateFormat]);

//   useEffect(() => {
//     if (locale) {
//       const localeObj = getDateLocale(locale);

//       if (weekStartDay && localeObj.options) {
//         localeObj.options.weekStartsOn = weekStartDay;
//       }

//       setLocaleObj(localeObj);
//     }
//   }, [locale, weekStartDay]);

//   //   const quickSelectValue = useMemo(() => {
//   //     if (!date || !quickSelect || !isDateInQuickSelectOptions) {
//   //       return undefined;
//   //     }

//   //     if (!Array.isArray(date)) {
//   //       const quickSelectOption = quickSelectOptions.find((option) => isSameSingleDate(option, date));
//   //       return quickSelectOption;
//   //     }

//   //     const quickSelectOption = quickSelectOptions.find((option) => isSameDates(option, date));
//   //     return quickSelectOption;
//   //   }, [date, quickSelectOptions, isDateInQuickSelectOptions]);

//   const onQuickSelect = (option: QuickSelectOption) => {
//     if (!option) {
//       return;
//     }

//     setActiveQuickSelectId(option?.id);
//     // if (option.id === QuickSelectOptionId.CUSTOM) {
//     //   onChange && onChange(internalDate as any);
//     //   return;
//     // }
//     // const beginDate = option.beginDate;
//     // const endDate = option.endDate;
//     // onChange && onChange([beginDate, endDate]);
//   };

//   const [internalDate, setInternalDate] = useState<Date[] | Date | null>();

//   useEffect(() => {
//     console.log('testttt::: ----', dates);
//   }, [dates]);

//   const onCalendarChange = (date: Date | Date[]) => {
//     if (!internalDate || !Array.isArray(internalDate) || internalDate?.length || date?.length === 2) {
//       setInternalDate(Array.isArray(date) ? date : [date]);
//       return;
//     }

//     setInternalDate((prevDate) => {
//       return [prevDate[0], date];
//     });

//     // if (internalDate?.length === 2) {
//     //   onChange && onChange(internalDate);
//     //   setIsOpen(false);
//     // }
//     // if (!internalDate || (Array.isArray(internalDate) && internalDate.length === 2)) {
//     //   setInternalDate(date);
//     //   return;
//     // }
//     // setInternalDate((prevDate) => {
//     //   return [prevDate[0], date];
//     // });
//     // return;
//     //onChange && onChange(internalDate);

//     // if (date && !Array.isArray(date)) {
//     //   setInternalDate(date);
//     // }
//     // if (Array.isArray(date) && date?.length === 2) {
//     //   setInternalDate(date);
//     //   //onChange?.(date as Date[]);
//     //   //setIsOpen(false);
//     // }
//     // console.log('testtttt;;; ', date);
//     // if (internalDate?.length !== 1) {
//     //   setInternalDate([date]);
//     // } else {
//     //   setInternalDate((prevDate) => {
//     //     if (new TcDate(prevDate?.[0]).isAfter(date)) {
//     //       return [date, prevDate[0]];
//     //     }
//     //     return [...prevDate, date];
//     //   });
//     //   onChange?.(internalDate);
//     //   setIsOpen(false);
//     // }
//     // // console.log('setDate', internalDate?.length);
//     // // if (internalDate?.length === 2) {
//     // //   console.log('setDate3333:: ', internalDate?.length);
//     // //   onChange && onChange(internalDate);
//     // // }
//     // return;
//     // if (date?.length === 2) {
//     //   setInternalDate(date);
//     //   onChange && onChange(date);
//     //   setIsOpen(false);
//     // }
//   };

//   useEffect(() => {
//     console.log('internalll date', internalDate);
//     if (internalDate?.length === 2) {
//       // onChange && onChange(internalDate);
//       // setIsOpen(false);
//     }
//   }, [internalDate]);

//   return (
//     <FlexItem gap={scale300} flexWrap="nowrap" justifyContent="start">
//       {/* <Block>
//         {/* <SingleSelect<string, 'id', 'label'>
//           labelKey="label"
//           options={quickSelectOptions}
//           value={activeQuickSelectOption}
//           disableSortOptions
//           clearable={false}
//           //onChangeHandler={({ value }) => onChange && onChange(value)}
//           onChange={(value) => onQuickSelect(value as QuickSelectOption)}
//           placeholder={translations?.chooseRangeLabel ?? 'Choose a date range'}
//         /> */}
//         <Dropdown
//           items={quickSelectOptionsAction}
//           selectedIds={activeQuickSelect?.id ? [activeQuickSelect.id] : undefined}
//           isLoading={false}
//         >
//           <FilterButton
//             title={activeQuickSelect?.label ?? ''}
//             // startEnhancer={getSelectActiveItem(columnField, values).icon}
//             size={SIZE.compact}
//             arrows
//             // onClear={clearable ? () => onSelectFilterClear(columnField) : undefined}
//             // hasValue={getSelectHasValue(columnField)}
//             // isActive={getSelectHasValue(columnField)}
//           />
//         </Dropdown>
//       </Block>

//       {activeQuickSelect?.id === QuickSelectOptionId.CUSTOM ? (
//         <Popover
//           isOpen={isOpen}
//           placement={placement}
//           onClick={() => {
//             setIsOpen(!isOpen);
//           }}
//           onClickOutside={() => {
//             isOpen && setIsOpen(false);
//           }}
//           overrides={{
//             Body: {
//               style: {
//                 zIndex: 1000,
//               },
//             },
//             Arrow: {
//               style: {
//                 backgroundColor: primaryB,
//               },
//             },
//           }}
//           showArrow
//           content={() => (
//             <Calendar
//               // onChange={({ date }) => {
//               //   console.log('testtt::12 ', date);
//               //   if (date) {
//               //     onCalendarChange(date as Date[]);
//               //     //onChange(date as Date | Date[]);
//               //   }
//               // }}
//               //initialState={{ value: internalDate }}
//               value={internalDate}
//               locale={localeObj}
//               // onDayClick={({ date }) => {
//               //   onCalendarChange(date);
//               // }}
//               onChange={({ date }) => {
//                 onCalendarChange(date);
//               }}
//               //value={internalDate}
//               //quickSelect={quickSelect}
//               range
//               overrides={{
//                 //TODO: style dropdown?
//                 CalendarContainer: {
//                   style: {
//                     paddingTop: '0',
//                   },
//                 },
//                 MonthYearSelectPopover: {
//                   props: {
//                     overrides: {
//                       Body: {
//                         style: () => ({
//                           ...borderRadius(radius200),
//                           zIndex: 99999999,
//                         }),
//                       },
//                     },
//                   },
//                 },
//                 MonthYearSelectStatefulMenu: {
//                   props: {
//                     overrides: {
//                       List: {
//                         style: () => ({
//                           ...borderRadius(radius200),
//                         }),
//                       },
//                     },
//                   },
//                 },
//                 // CalendarHeader: {
//                 //   style: {
//                 //     paddingLeft: '60px',
//                 //   },
//                 // },
//                 // Week: {
//                 //   style: {
//                 //     paddingLeft: '30px',
//                 //   },
//                 // },
//                 WeekdayHeader: {
//                   style: {
//                     width: 'auto',
//                     height: 'auto',
//                     ...padding(scale100, scale200),
//                     ...ParagraphSmall,
//                   },
//                 },
//                 // MonthYearSelectStatefulMenu: {
//                 //   props: {
//                 //     overrides: {
//                 //       Option: {
//                 //         style: ({ $style, $isHighlighted, $isSelected, ariaSelected, ...rest }) => {
//                 //           console.log('testtt::12 ', rest['aria-selected']);

//                 //           return {
//                 //             ...$style,
//                 //             backgroundColor: $isHighlighted ? primaryLighter : primaryB,
//                 //             color: $isHighlighted ? primary : primaryA,
//                 //           };
//                 //         },
//                 //       },
//                 //     },
//                 //   },
//                 // },
//                 CalendarHeader: {
//                   style: {
//                     backgroundColor: primaryB,
//                     ...ParagraphSmall,
//                     //...borderBottom(border300),
//                   },
//                 },
//                 MonthHeader: {
//                   style: {
//                     backgroundColor: primaryB,
//                     // color: primaryA,
//                     fontWeight: 600,
//                     display: 'flex',
//                     justifyContent: 'space-between',
//                     ...padding('0', scale600),
//                   },
//                 },

//                 MonthYearSelectButton: {
//                   style: {
//                     color: primaryA,
//                     ...ParagraphSmall,
//                   },
//                 },
//                 MonthYearSelectIconContainer: {
//                   component: ({ $style, ...rest }) => (
//                     <ChevronDown {...rest} style={{ ...$style, color: primaryA }} size={30} />
//                   ),
//                   // style: {
//                   //   marginLeft: '8px',
//                   //   width: '35px',
//                   //   height: '35px',
//                   //   ':global(svg)': {
//                   //     width: '35px',
//                   //     height: '35px',
//                   //   },
//                   // },
//                 },
//                 PrevButton: {
//                   component: ({ $style, ...rest }) => (
//                     <ChevronLeft {...rest} style={{ ...$style, color: primaryA }} size={30} />
//                   ),
//                 },
//                 // NextButton: {
//                 //   component: ChevronRightIcon,
//                 //   // props: {
//                 //   //   overrides: {
//                 //   //     Svg: {
//                 //   //       component: ChevronRightIcon,
//                 //   //     },
//                 //   //   },
//                 //   // },
//                 //   // style: (test) => {
//                 //   //   console.log('tesaaa', test);
//                 //   //   return {
//                 //   //     color: primaryA,
//                 //   //     // width: '35px',
//                 //   //     // height: '35px',
//                 //   //     // color: contentTertiary,
//                 //   //   };
//                 //   // },
//                 // },
//                 NextButtonIcon: {
//                   component: ({ $style, ...rest }) => (
//                     <ChevronRight {...rest} style={{ ...$style, color: primaryA }} size={30} />
//                   ),
//                   // style: {
//                   //   color: primaryA,
//                   //   // color: contentTertiary,
//                   // },
//                   // style: {
//                   //   // width: '18px',
//                   //   // height: '18px',
//                   //   width: 'auto',
//                   //   height: 'auto',
//                   // },
//                 },
//                 Week: {
//                   style: {
//                     ...padding('0'),
//                   },
//                 },
//                 Day: {
//                   style: ({ $isHighlighted, $style, $selected }) => {
//                     return {
//                       ...$style,
//                       ...ParagraphSmall,
//                       paddingTop: '0px',
//                       paddingBottom: '0px',
//                       display: 'flex',
//                       justifyContent: 'center',
//                       alignItems: 'center',
//                       width: '40px',
//                       height: '40px',

//                       ...($isHighlighted || $selected
//                         ? {
//                             color: primaryB,
//                             ':after': {
//                               backgroundColor: primaryA,
//                               height: '100%',
//                             },
//                           }
//                         : {}),
//                     };
//                   },
//                 },
//                 ...overrides,
//               }}
//             />
//             // <StatefulCalendar
//             //   onRangeChange={({ date }) => {
//             //     if (date) {
//             //       onCalendarChange(date as Date[]);
//             //       //onChange(date as Date | Date[]);
//             //     }
//             //   }}
//             //   //initialState={{ value: internalDate }}
//             //   value={internalDate}
//             //   locale={localeObj}
//             //   //value={internalDate}
//             //   //quickSelect={quickSelect}
//             //   range
//             //   overrides={{
//             //     //TODO: style dropdown?
//             //     MonthYearSelectPopover: {
//             //       props: {
//             //         overrides: {
//             //           Body: {
//             //             style: () => ({
//             //               zIndex: 99999999,
//             //             }),
//             //           },
//             //         },
//             //       },
//             //     },
//             //     CalendarHeader: {
//             //       style: {
//             //         backgroundColor: primaryB,
//             //         ...borderBottom(border300),
//             //       },
//             //     },
//             //     MonthHeader: {
//             //       style: {
//             //         backgroundColor: primaryB,
//             //         // color: primaryA,
//             //         fontWeight: 600,
//             //       },
//             //     },
//             //     MonthYearSelectButton: {
//             //       style: {
//             //         color: primaryA,
//             //       },
//             //     },
//             //     PrevButton: {
//             //       style: {
//             //         color: primaryA,
//             //         // color: contentTertiary,
//             //       },
//             //     },
//             //     NextButton: {
//             //       style: {
//             //         color: primaryA,
//             //         // color: contentTertiary,
//             //       },
//             //     },
//             //     // Day: {
//             //     //   style: ({ $isHighlighted }) => ({
//             //     //     ...($isHighlighted
//             //     //       ? {
//             //     //           ':after': {
//             //     //             backgroundColor: primaryA,
//             //     //             color: primaryB,
//             //     //           },
//             //     //         }
//             //     //       : {}),
//             //     //   }),
//             //     // },
//             //     ...overrides,
//             //   }}
//             // />
//           )}
//         >
//           <Button size={SIZE.compact} kind={ButtonKind.secondary}>
//             {dateTitle}
//           </Button>
//         </Popover>
//       ) : null}
//     </FlexItem>
//   );
// };
