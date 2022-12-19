import React, { useMemo } from 'react';
import { TcDate } from '@timechimp/timechimp-typescript-helpers';
import { useTheme } from '../../../providers';
import { Box } from '../../../components/box';
import { LabelMedium } from '../../../components/typography/label-medium';
import { ParagraphSmall } from '../../../components/typography/paragraph-small';
import { FlexGrid } from '../../flex-grid';

export const FlyOutTooltip = ({
  x = 0,
  y = 0,
  datum,
  trackedText = 'Tracked',
  billableText = 'Billable',
  nonBillableText = 'Non billable',
  hoursText,
  isBillable,
  isNonBillable,
  flyOutWidth = 270,
  flyOutHeight = 200,
  width,
  formatAsDate,
  horizontalAxisItemLabel,
  dateFormat = 'dd MMM yyyy',
}: any) => {
  const {
    theme: {
      current: {
        sizing: { scale100, scale500, scale600 },
        customColors: { dark4 },
      },
    },
  } = useTheme();

  const calculateXOffset = useMemo(() => {
    if (x < flyOutWidth / 2) {
      return x + (flyOutWidth / 2 - x) + 5;
    }

    if (width - x < flyOutWidth / 2) {
      return x - (flyOutWidth / 2 - (width - x));
    }
    return x;
  }, [x, width, flyOutWidth]);

  const headingLabel = formatAsDate
    ? new TcDate(datum.date).format(dateFormat)
    : `${horizontalAxisItemLabel} ${datum.date.split('-')[1]}`;

  return (
    <g style={{ pointerEvents: 'none' }}>
      <foreignObject x={calculateXOffset - 140} y={y - 170} width={flyOutWidth} height={flyOutHeight}>
        <Box padding={scale600}>
          <LabelMedium marginBottom={scale500}>{headingLabel}</LabelMedium>
          <FlexGrid justifyContent="space-between">
            <ParagraphSmall margin={scale100} color={dark4}>
              {trackedText}:
            </ParagraphSmall>
            <ParagraphSmall margin={scale100} color={dark4}>
              {datum.trackedDuration || 0}
              {hoursText}
            </ParagraphSmall>
          </FlexGrid>
          {isBillable && (
            <FlexGrid justifyContent="space-between">
              <ParagraphSmall margin={scale100} color={dark4}>
                {billableText}:
              </ParagraphSmall>
              <ParagraphSmall margin={scale100} color={dark4}>
                {datum.billableDuration || 0}
                {hoursText}
              </ParagraphSmall>
            </FlexGrid>
          )}
          {isNonBillable && (
            <FlexGrid justifyContent="space-between">
              <ParagraphSmall margin={scale100} color={dark4}>
                {nonBillableText}:
              </ParagraphSmall>
              <ParagraphSmall margin={scale100} color={dark4}>
                {datum.nonBillableDuration || 0}
                {hoursText}
              </ParagraphSmall>
            </FlexGrid>
          )}
        </Box>
      </foreignObject>
    </g>
  );
};
