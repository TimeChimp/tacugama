import { useTheme } from '../../../providers';
import React, { useMemo } from 'react';
import {
  VictoryArea,
  VictoryAxis,
  VictoryChart,
  VictoryLegend,
  VictoryScatter,
  VictoryTheme,
  VictoryTooltip,
  VictoryVoronoiContainer,
} from 'victory';
import { TcDate } from '@timechimp/timechimp-typescript-helpers';
import { FlyOutTooltip } from '../tooltip';
import { calculateDateAxisRange } from '../utils';
import { LineGraphData, LineGraphProps } from './types';
import { SECONDS_IN_HOUR } from '../../../models';

export const LineGraph = ({
  data,
  verticalAxisLabel,
  horizontalAxisValue = 'date',
  verticalAxisValue = 'trackedDuration',
  width = 1400,
  formatAsDate = true,
  horizontalAxisItemLabel = 'Week',
  trackedText,
  hoursText,
  billableText,
  nonBillableText,
  limit = 0,
  isBillable = true,
  isNonBillable = true,
  flyOutWidth = 270,
  flyOutHeight = 200,
  legendData,
  dateFormat,
}: LineGraphProps) => {
  const {
    theme: {
      current: {
        colors: { primary },
        customColors: { primarySubtle, dark0, dark4, light2 },
        sizing: { scale400, scale600 },
      },
    },
  } = useTheme();

  const convertedData: LineGraphData[] = useMemo(
    () =>
      data.map((graphDataItem: LineGraphData) => {
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

  const lineData = useMemo(() => {
    return (
      convertedData
        .map((item) => ({
          ...item,
          trackedDuration: limit / SECONDS_IN_HOUR,
        }))
        .filter((_, idx) => idx === 0 || idx === convertedData.length - 1) || []
    );
  }, [convertedData, limit]);

  const diagonalLineData = useMemo(() => {
    return (
      lineData.map((item, idx) => ({
        ...item,
        trackedDuration: idx === 0 ? 0 : item.trackedDuration,
      })) || []
    );
  }, [lineData]);

  const maxValue = useMemo(() => {
    let max = 0;
    let maxDate = 0;
    convertedData.forEach((graphDataItem: LineGraphData) => {
      const { trackedDuration, date } = graphDataItem;
      if (trackedDuration && trackedDuration > max) {
        max = trackedDuration;
      }
      const formattedDate = Number(date?.valueOf());

      if (formattedDate && formattedDate > maxDate) {
        maxDate = formattedDate as number;
      }
    });

    return { x: maxDate, y: max * 2.1 };
  }, [convertedData]);

  const xAxisRange = useMemo(() => {
    if (convertedData.length && formatAsDate) {
      const dates = convertedData.map((convertedData: LineGraphData) => {
        return new TcDate(convertedData?.date).toDate();
      });

      return calculateDateAxisRange(dates);
    }
  }, [convertedData, formatAsDate]);

  return (
    <VictoryChart
      maxDomain={{ y: maxValue.y }}
      minDomain={{ y: 0 }}
      scale={{ x: 'time' }}
      width={width}
      theme={VictoryTheme.material}
      style={{
        parent: {
          height: '100%',
        },
      }}
      containerComponent={
        <VictoryVoronoiContainer
          labels={() => ' '}
          labelComponent={
            <VictoryTooltip
              dy={-70}
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
        />
      }
    >
      <VictoryAxis
        style={{
          axisLabel: { padding: 35, color: dark0, fontSize: scale600 },
          tickLabels: { fontSize: scale400, stroke: dark4 },
          grid: { stroke: 'none' },
        }}
        tickValues={xAxisRange}
        tickFormat={(t) =>
          formatAsDate ? new TcDate(new Date(t)).format('dd MMM') : `${horizontalAxisItemLabel} ${t?.split('-')[1]}`
        }
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
      <VictoryArea
        style={{ data: { fill: primarySubtle, opacity: 0.5, stroke: dark4, strokeWidth: 2 } }}
        interpolation="monotoneX"
        data={convertedData}
        x={horizontalAxisValue}
        y={verticalAxisValue}
      />
      {lineData.length ? (
        <VictoryArea
          style={{ data: { fill: 'transparent', stroke: primary, strokeWidth: 2 } }}
          interpolation="monotoneX"
          data={lineData}
          x={horizontalAxisValue}
          y={verticalAxisValue}
        />
      ) : null}
      {diagonalLineData.length ? (
        <VictoryArea
          style={{ data: { fill: 'transparent', stroke: primary, strokeWidth: 2, strokeDasharray: 10 } }}
          interpolation="monotoneX"
          data={diagonalLineData}
          x={horizontalAxisValue}
          y={verticalAxisValue}
        />
      ) : null}
      {limit && legendData ? (
        <VictoryLegend
          x={width / 2 - 115}
          y={20}
          orientation="horizontal"
          gutter={20}
          data={legendData}
          standalone={false}
        />
      ) : null}
      <VictoryScatter
        data={convertedData}
        x={horizontalAxisValue}
        y={verticalAxisValue}
        style={{ data: { fill: 'white', stroke: '#B8B8B8', strokeWidth: '1' } }}
        size={4}
      />
    </VictoryChart>
  );
};
