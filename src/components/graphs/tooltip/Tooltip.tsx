import React, { useMemo } from 'react';
import { TcDate } from '@timechimp/timechimp-typescript-helpers';
import { useTheme } from '../../../providers';
import { LabelMedium, Box } from '../../../components';
import { ParagraphSmall } from 'baseui/typography';
import { FlexGrid } from '../../flex-grid';

export const FlyOutTooltip = ({
  x = 0,
  y = 0,
  datum,
  trackedText = 'Tracked',
  billableText = 'Billable',
  nonBillableText = 'Non billable',
  hoursText,
  width,
}: any) => {
  const {
    theme: {
      current: {
        sizing: { scale100, scale500, scale600 },
        customColors: { dark4 },
      },
    },
  } = useTheme();
  const flyOutWidth = 270;
  const flyOutHeight = 200;

  const calculateXOffset = useMemo(() => {
    if (x < flyOutWidth / 2) {
      return x + (flyOutWidth / 2 - x) + 5;
    }

    if (width - x < flyOutWidth / 2) {
      return x - (flyOutWidth / 2 - (width - x));
    }
    return x;
  }, [x]);
  
  return (
    <g style={{ pointerEvents: 'none' }}>
      <foreignObject x={calculateXOffset - 140} y={y - 170} width={flyOutWidth} height={flyOutHeight}>
        <Box padding={scale600}>
          <LabelMedium marginBottom={scale500}>{new TcDate(datum.date).format('dd MMM yyyy')}</LabelMedium>
          <FlexGrid justifyContent="space-between">
            <ParagraphSmall margin={scale100} color={dark4}>
              {trackedText}:
            </ParagraphSmall>
            <ParagraphSmall margin={scale100} color={dark4}>
              {datum.trackedDuration || 0}
              {hoursText}
            </ParagraphSmall>
          </FlexGrid>
          <FlexGrid justifyContent="space-between">
            <ParagraphSmall margin={scale100} color={dark4}>
              {billableText}:
            </ParagraphSmall>
            <ParagraphSmall margin={scale100} color={dark4}>
              {datum.billableDuration || 0}
              {hoursText}
            </ParagraphSmall>
          </FlexGrid>
          <FlexGrid justifyContent="space-between">
            <ParagraphSmall margin={scale100} color={dark4}>
              {nonBillableText}:
            </ParagraphSmall>
            <ParagraphSmall margin={scale100} color={dark4}>
              {datum.nonBillableDuration || 0}
              {hoursText}
            </ParagraphSmall>
          </FlexGrid>
        </Box>
      </foreignObject>
    </g>
  );
};
