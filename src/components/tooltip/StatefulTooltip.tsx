import React, { forwardRef } from 'react';
import { StatefulTooltipProps, StatefulTooltip as BaseStatefulTooltip } from 'baseui/tooltip';
import { useTheme } from '../../providers';
import { border, borderRadius, padding } from 'utils';

export const StatefulTooltip = forwardRef<any, StatefulTooltipProps>(
  ({ children, ...rest }: StatefulTooltipProps, ref) => {
    const {
      theme: {
        current: {
          typography: { ParagraphSmall },
          sizing: { scale100, scale300, scale600 },
          borders: { radius200, border300 },
          customColors: { dark1 },
        },
      },
    } = useTheme();

    return (
      <BaseStatefulTooltip
        {...rest}
        overrides={{
          Body: {
            style: () => ({
              ...borderRadius(radius200),
              ...border({
                ...border300,
                borderColor: dark1,
              }),
            }),
          },
          Inner: {
            style: () => ({
              ...ParagraphSmall,
              ...padding(scale100, scale300),
            }),
          },
          Arrow: {
            style: () => ({
              width: scale600,
              height: scale600,
            }),
          },
        }}
      >
        {children}
      </BaseStatefulTooltip>
    );
  },
);

export default StatefulTooltip;
