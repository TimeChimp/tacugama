import React, { useMemo } from 'react';
import { ParagraphSmall } from 'baseui/typography';
import { useTheme } from '../../../providers';

export const MyDashboardTooltip = ({
  width = 150,
  height = 100,
  x = 0,
  y = 0,
  datum,
  weekText,
  hoursText,
  isDefault,
  maxValue,
}: any) => {
  const {
    theme: {
      current: {
        sizing: { scale300 },
        colors: { contentSecondary },
        customColors: { light4 },
      },
    },
  } = useTheme();

  const duration = useMemo(() => (isDefault ? maxValue - datum.duration : datum.duration), [isDefault]);

  return (
    <g style={{ pointerEvents: 'none' }}>
      <foreignObject x={x - width / 2} y={-10} width={width} height={height}>
        <ParagraphSmall
          padding={scale300}
          overrides={{
            Block: {
              style: {
                background: contentSecondary,
                color: light4,
              },
            },
          }}
        >
          {weekText} {datum.isoWeek}: {duration} {hoursText}
        </ParagraphSmall>
      </foreignObject>
    </g>
  );
};
