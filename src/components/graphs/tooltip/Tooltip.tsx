import React from 'react';
import { TcDate } from '@timechimp/timechimp-typescript-helpers';
import { useTheme } from '../../../providers';
import { LabelMedium, Box } from '../../../components';
import { ParagraphSmall } from 'baseui/typography';
import { FlexGrid } from '../../flex-grid';

export const FlyOutTooltip = ({ x = 0, y = 0, datum, trackedText='Tracked', billableText='Billable', nonBillableText='Non billable', hoursText }: any) => {
  const {
    theme: {
      current: {
        sizing: { scale600 },
        customColors: { dark4 },
      },
    },
  } = useTheme();
  return (
    <g style={{ pointerEvents: 'none' }}>
      <foreignObject x={x - 140} y={y - 130} width="270" height="200">
        <Box padding={scale600}>
          <LabelMedium>{new TcDate(datum.date).format('dd MMM yyyy')}</LabelMedium>
          <FlexGrid justifyContent="space-between">
            <ParagraphSmall color={dark4}>{trackedText}:</ParagraphSmall>
            <ParagraphSmall color={dark4}>{datum.trackedDuration}{hoursText}</ParagraphSmall>
          </FlexGrid>
          <FlexGrid justifyContent="space-between">
            <ParagraphSmall color={dark4}>{billableText}:</ParagraphSmall>
            <ParagraphSmall color={dark4}>{datum.billableDuration}{hoursText}</ParagraphSmall>
          </FlexGrid>
          <FlexGrid justifyContent="space-between">
            <ParagraphSmall color={dark4}>{nonBillableText}:</ParagraphSmall>
            <ParagraphSmall color={dark4}>{datum.nonBillableDuration}{hoursText}</ParagraphSmall>
          </FlexGrid>
        </Box>
      </foreignObject>
    </g>
  );
};
