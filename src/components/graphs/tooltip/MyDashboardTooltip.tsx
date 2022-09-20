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
  fieldName = 'duration',
}: any) => {
  const {
    theme: {
      current: {
        sizing: { scale300, scale500 },
        colors: { contentSecondary },
        customColors: { light4 },
      },
    },
  } = useTheme();

  const convertHours = (value: number) => {
    const hours = Math.floor(value) || '00';
    const minutes = Math.round((value - Math.floor(value)) * 60) || '00';

    return hours + ':' + minutes;
  };

  const duration = useMemo(
    () => (isDefault ? convertHours(maxValue - datum.duration) : convertHours(datum[fieldName])),
    [isDefault, maxValue, fieldName, datum],
  );

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
                textAlign: 'center',
                fontSize: scale500,
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
