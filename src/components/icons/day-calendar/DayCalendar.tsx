import { DEFAULT_ICON_SIZE } from '../.././../models';
import React from 'react';
import { Icon, SVGProps } from '../../icon';

/**
 * @deprecated The custom icons are deprecated and will be removed in a future version. Use the Phosphor Icons (https://phosphoricons.com) instead.
 */
export const CalendarFilledIcon = ({ title = 'CalendarFilled', size = DEFAULT_ICON_SIZE, color }: SVGProps) => (
  <Icon title={title}>
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M13 2H11.5V1.5C11.5 1.36739 11.4473 1.24021 11.3536 1.14645C11.2598 1.05268 11.1326 1 11 1C10.8674 1 10.7402 1.05268 10.6464 1.14645C10.5527 1.24021 10.5 1.36739 10.5 1.5V2H5.5V1.5C5.5 1.36739 5.44732 1.24021 5.35355 1.14645C5.25979 1.05268 5.13261 1 5 1C4.86739 1 4.74021 1.05268 4.64645 1.14645C4.55268 1.24021 4.5 1.36739 4.5 1.5V2H3C2.73478 2 2.48043 2.10536 2.29289 2.29289C2.10536 2.48043 2 2.73478 2 3V13C2 13.2652 2.10536 13.5196 2.29289 13.7071C2.48043 13.8946 2.73478 14 3 14H13C13.2652 14 13.5196 13.8946 13.7071 13.7071C13.8946 13.5196 14 13.2652 14 13V3C14 2.73478 13.8946 2.48043 13.7071 2.29289C13.5196 2.10536 13.2652 2 13 2ZM4.5 3V3.5C4.5 3.63261 4.55268 3.75979 4.64645 3.85355C4.74021 3.94732 4.86739 4 5 4C5.13261 4 5.25979 3.94732 5.35355 3.85355C5.44732 3.75979 5.5 3.63261 5.5 3.5V3H10.5V3.5C10.5 3.63261 10.5527 3.75979 10.6464 3.85355C10.7402 3.94732 10.8674 4 11 4C11.1326 4 11.2598 3.94732 11.3536 3.85355C11.4473 3.75979 11.5 3.63261 11.5 3.5V3H13V5H3V3H4.5ZM13 13H3V6H13V13ZM7 7.5V11.5C7 11.6326 6.94732 11.7598 6.85355 11.8536C6.75979 11.9473 6.63261 12 6.5 12C6.36739 12 6.24021 11.9473 6.14645 11.8536C6.05268 11.7598 6 11.6326 6 11.5V8.30875L5.72375 8.4475C5.60507 8.50684 5.46767 8.51661 5.34178 8.47465C5.2159 8.43268 5.11184 8.34243 5.0525 8.22375C4.99316 8.10507 4.98339 7.96767 5.02535 7.84178C5.06732 7.7159 5.15757 7.61184 5.27625 7.5525L6.27625 7.0525C6.35251 7.01434 6.43726 6.99632 6.52244 7.00015C6.60763 7.00397 6.69042 7.02952 6.76295 7.07437C6.83548 7.11921 6.89533 7.18186 6.93682 7.25636C6.97831 7.33086 7.00006 7.41473 7 7.5ZM10.6975 9.40312L9.5 11H10.5C10.6326 11 10.7598 11.0527 10.8536 11.1464C10.9473 11.2402 11 11.3674 11 11.5C11 11.6326 10.9473 11.7598 10.8536 11.8536C10.7598 11.9473 10.6326 12 10.5 12H8.5C8.40714 12 8.31612 11.9741 8.23713 11.9253C8.15815 11.8765 8.09431 11.8067 8.05279 11.7236C8.01126 11.6406 7.99368 11.5476 8.00202 11.4551C8.01036 11.3626 8.04429 11.2743 8.1 11.2L9.89875 8.80188C9.93966 8.74741 9.96902 8.68515 9.98501 8.61893C10.001 8.55271 10.0033 8.48392 9.99173 8.41679C9.98018 8.34965 9.95503 8.28558 9.91783 8.22852C9.88062 8.17145 9.83215 8.12259 9.77538 8.08493C9.71862 8.04727 9.65475 8.02161 9.58771 8.00952C9.52067 7.99743 9.45186 7.99916 9.38552 8.01462C9.31917 8.03008 9.25669 8.05893 9.20189 8.09941C9.1471 8.13988 9.10115 8.19113 9.06688 8.25C9.03501 8.30868 8.99172 8.36038 8.93955 8.40205C8.88739 8.44373 8.8274 8.47453 8.76314 8.49265C8.69887 8.51076 8.63163 8.51582 8.56538 8.50753C8.49913 8.49924 8.43521 8.47776 8.37739 8.44436C8.31957 8.41097 8.26903 8.36633 8.22874 8.31308C8.18846 8.25984 8.15925 8.19906 8.14283 8.13434C8.12641 8.06962 8.12312 8.00227 8.13316 7.93626C8.14319 7.87025 8.16634 7.80692 8.20125 7.75C8.36641 7.46418 8.62125 7.24083 8.92626 7.11456C9.23127 6.9883 9.56941 6.96617 9.88827 7.05162C10.2071 7.13707 10.4889 7.32531 10.6899 7.58717C10.8909 7.84904 10.9999 8.16989 11 8.5C11.0011 8.82609 10.8948 9.14346 10.6975 9.40312Z"
        fill={color || 'currentColor'}
      />
    </svg>
  </Icon>
);
