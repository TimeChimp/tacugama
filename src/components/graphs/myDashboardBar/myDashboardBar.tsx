import React, { useMemo } from 'react';
import {
  VictoryAxis,
  VictoryBar,
  VictoryChart,
  VictoryLegend,
  VictoryStack,
  VictoryTheme,
  VictoryTooltip,
} from 'victory';
import { useTheme } from '../../../providers';
import { MyDashboardTooltip } from '../tooltip';
import { SECONDS_IN_HOUR } from '../../../models';

export interface MyDashboardBarData {
  isoWeek: number;
  duration: number;
  absence: number;
}

interface LegendData {
  name: string;
  symbol: { fill: string; type: string };
}
export interface MyDashboardBarProps {
  data: MyDashboardBarData[];
  width?: number;
  weekText?: string;
  hoursText?: string;
  shortHoursText?: string;
  tooltipWidth?: number;
  tooltipHeight?: number;
  legendData?: LegendData[];
  height?: number;
}

export const MyDashboardBar = ({
  data,
  width = 1400,
  weekText = 'Week',
  hoursText = 'hours',
  shortHoursText = 'h',
  tooltipWidth = 200,
  tooltipHeight = 100,
  legendData,
  height = 350,
}: MyDashboardBarProps) => {
  const {
    theme: {
      current: {
        customColors: { light6, red5 },
        colors: { contentInverseTertiary, primary },
        sizing: { scale400 },
      },
    },
  } = useTheme();

  const barData = useMemo(() => {
    return data.map((item) => ({
      ...item,
      duration: item.duration / SECONDS_IN_HOUR,
      absence: item.absence / SECONDS_IN_HOUR,
    }));
  }, [data]);

  const maxValue = useMemo(() => {
    const maxValueDataItem = Math.max(...barData.map((item) => item.duration + item.absence));

    if (maxValueDataItem < 40) {
      return 40;
    }

    return maxValueDataItem;
  }, [barData]);

  const defaultData = useMemo(
    () =>
      barData.map((data: MyDashboardBarData) => ({
        isoWeek: data.isoWeek,
        duration: maxValue - data.duration - data.absence,
      })),
    [barData, maxValue],
  );

  const yTickValues = useMemo(() => {
    let counter = 10;
    const result = [];
    while (counter <= maxValue) {
      result.push(counter);

      counter += 10;
    }

    return result;
  }, [maxValue]);

  return (
    <VictoryChart
      maxDomain={{ y: maxValue }}
      width={width}
      height={350}
      style={{
        parent: {
          height: '100%',
        },
      }}
    >
      <VictoryAxis
        dependentAxis
        style={{
          axis: { stroke: 'none', paddingLeft: '20px' },
          axisLabel: { fontSize: scale400 },
          tickLabels: { fill: contentInverseTertiary },
          grid: { stroke: light6, strokeDasharray: '8, 4', strokeWidth: 1, width: '100px' },
        }}
        tickValues={yTickValues}
        tickFormat={(t) => `${t} ${shortHoursText}`}
        theme={VictoryTheme.material}
      />
      <VictoryStack>
        <VictoryBar
          labelComponent={
            <VictoryTooltip
              dy={-70}
              constrainToVisibleArea
              flyoutComponent={
                <MyDashboardTooltip
                  hoursText={hoursText}
                  weekText={weekText}
                  width={tooltipWidth}
                  height={tooltipHeight}
                />
              }
            />
          }
          labels={({ datum }) => datum.y}
          style={{
            data: {
              fill: primary,
            },
          }}
          data={barData}
          x="isoWeek"
          y="duration"
        />
        <VictoryBar
          labelComponent={
            <VictoryTooltip
              dy={-70}
              constrainToVisibleArea
              flyoutComponent={
                <MyDashboardTooltip
                  hoursText={hoursText}
                  weekText={weekText}
                  width={tooltipWidth}
                  height={tooltipHeight}
                  fieldName="absence"
                  maxValue={maxValue}
                />
              }
            />
          }
          labels={() => ' '}
          style={{
            data: {
              fill: red5,
            },
          }}
          data={barData}
          x="isoWeek"
          y="absence"
        />
        <VictoryBar
          labelComponent={
            <VictoryTooltip
              dy={-70}
              constrainToVisibleArea
              flyoutComponent={
                <MyDashboardTooltip
                  hoursText={hoursText}
                  weekText={weekText}
                  width={tooltipWidth}
                  height={tooltipHeight}
                  isDefault
                  maxValue={maxValue}
                />
              }
            />
          }
          labels={() => ' '}
          style={{
            data: {
              fill: light6,
            },
          }}
          data={defaultData}
          x="isoWeek"
          y="duration"
        />
      </VictoryStack>
      <VictoryLegend
        x={width / 2 - 120}
        y={height - 40}
        orientation="horizontal"
        gutter={20}
        data={legendData}
        standalone={false}
        style={{
          labels: { fontSize: 14 },
        }}
      />
    </VictoryChart>
  );
};
