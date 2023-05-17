import { useTheme } from '../../../providers';
import React, { useMemo } from 'react';
import { VictoryAxis, VictoryBar, VictoryChart, VictoryTheme, VictoryTooltip } from 'victory';
import { TcDate } from '@timechimp/timechimp-typescript-helpers';
import { FlyOutTooltip } from '../tooltip';
import { calculateDateAxisRange } from '../utils';
import { SECONDS_IN_HOUR } from '../../../models';
import { BarGraphData, BarGraphProps } from './types';

const SINGLE_BAR_WIDTH = 50;

export const BarGraph = ({
  data,
  horizontalAxisLabel,
  verticalAxisLabel,
  horizontalAxisValue = 'date',
  verticalAxisValue = 'trackedDuration',
  width = 1400,
  height = 350,
  formatAsDate = true,
  horizontalAxisItemLabel = 'Week',
  trackedText,
  hoursText,
  barRatio = 0,
  billableText,
  nonBillableText,
  isBillable = true,
  isNonBillable = true,
  flyOutWidth = 270,
  flyOutHeight = 200,
  dateFormat,
}: BarGraphProps) => {
  const {
    theme: {
      current: {
        colors: { contentPrimary },
        customColors: { dark0, dark4, light2 },
        sizing: { scale400, scale600 },
      },
    },
  } = useTheme();

  const convertedData: BarGraphData[] = useMemo(
    () =>
      data.map((graphDataItem: BarGraphData) => {
        if (!graphDataItem) {
          return graphDataItem;
        }
        const { trackedDuration, billableDuration, nonBillableDuration } = graphDataItem;
        return {
          ...graphDataItem,
          trackedDuration: trackedDuration ? trackedDuration / SECONDS_IN_HOUR : 0,
          billableDuration: billableDuration ? billableDuration / SECONDS_IN_HOUR : 0,
          nonBillableDuration: nonBillableDuration ? nonBillableDuration / SECONDS_IN_HOUR : 0,
        };
      }),
    [data],
  );

  const maxValue = useMemo(() => {
    let max = 0;
    convertedData.forEach((graphDataItem: BarGraphData) => {
      const { trackedDuration } = graphDataItem;
      if (trackedDuration && trackedDuration > max) {
        max = trackedDuration;
      }
    });
    return max * 2.1;
  }, [convertedData]);

  const xAxisRange = useMemo(() => {
    if (convertedData.length && formatAsDate) {
      const dates = convertedData.map((convertedData: BarGraphData) => {
        return new TcDate(convertedData?.date).toDate();
      });

      return calculateDateAxisRange(dates);
    }
  }, [convertedData, formatAsDate]);

  return (
    <VictoryChart
      maxDomain={{ y: maxValue }}
      minDomain={{ y: 0 }}
      scale={{ x: formatAsDate ? 'time' : 'linear' }}
      height={height}
      width={width}
      theme={VictoryTheme.material}
      domainPadding={25}
    >
      <VictoryAxis
        label={!formatAsDate ? horizontalAxisLabel : ''}
        style={{
          axisLabel: { padding: 35, color: dark0, fontSize: scale600 },
          tickLabels: { fontSize: scale400, stroke: dark4 },
          grid: { stroke: 'none' },
        }}
        tickFormat={(t) =>
          formatAsDate ? new TcDate(new Date(t)).format('dd MMM') : `${horizontalAxisItemLabel} ${t?.split('-')[1]}`
        }
        tickValues={xAxisRange}
        fixLabelOverlap
      />
      <VictoryAxis
        dependentAxis
        label={verticalAxisLabel}
        style={{
          axis: { stroke: 'none' },
          axisLabel: { padding: 35, color: dark0, fontSize: scale600 },
          tickLabels: { fontSize: scale400, stroke: dark4 },
          grid: { stroke: light2, strokeDasharray: '8, 4', strokeWidth: 1 },
        }}
        theme={VictoryTheme.material}
        tickFormat={(t) => t}
      />
      <VictoryBar
        style={{
          data: {
            fill: contentPrimary,
            opacity: 0.5,
          },
        }}
        data={convertedData}
        x={horizontalAxisValue}
        y={verticalAxisValue}
        labels={() => ' '}
        labelComponent={
          <VictoryTooltip
            constrainToVisibleArea
            flyoutComponent={
              <FlyOutTooltip
                trackedText={trackedText}
                hoursText={hoursText}
                billableText={billableText}
                nonBillableText={nonBillableText}
                width={width}
                isBillable={isBillable}
                isNonBillable={isNonBillable}
                flyOutTooltipWidth={flyOutWidth}
                flyOutTooltipHeight={flyOutHeight}
                formatAsDate={formatAsDate}
                horizontalAxisItemLabel={horizontalAxisItemLabel}
                dateFormat={dateFormat}
              />
            }
          />
        }
        barRatio={barRatio}
        barWidth={data?.length < 4 ? SINGLE_BAR_WIDTH : undefined}
      />
    </VictoryChart>
  );
};
