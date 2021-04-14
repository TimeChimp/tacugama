import React, { forwardRef } from 'react';
import { StatefulTooltipProps, StatefulTooltip as BaseStatefulTooltip } from 'baseui/tooltip';

export const StatefulTooltip = forwardRef<any, StatefulTooltipProps>(
  ({ children, ...rest }: StatefulTooltipProps, ref) => <BaseStatefulTooltip {...rest}>{children}</BaseStatefulTooltip>,
);

export default StatefulTooltip;
