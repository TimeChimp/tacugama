import React, { useMemo } from 'react';
import { VictoryAxis, VictoryBar, VictoryChart, VictoryStack, VictoryTheme, VictoryTooltip } from 'victory';
import maxBy from 'lodash/maxBy';
import { useTheme } from '../../../providers';
import { MyDashboardTooltip } from '../tooltip/MyDashboardTooltip';

export interface MyDashboardBarData {
  isoWeek: number;
  duration: number;
}

export interface MyDashboardBarProps {
  data: MyDashboardBarData[];
  width?: number;
  weekText?: string;
  hoursText?: string;
  shortHoursText?: string;
  tooltipWidth?: number;
  tooltipHeight?: number;
}

export const MyDashboardBar = ({
  data,
  width = 1400,
  weekText = 'Week',
  hoursText = 'hours',
  shortHoursText = 'h',
  tooltipWidth = 150,
  tooltipHeight = 100,
}: MyDashboardBarProps) => {
  const {
    theme: {
      current: {
        customColors: { light6, purple2 },
        colors: { contentInverseTertiary },
        sizing: { scale400 },
      },
    },
  } = useTheme();

  const barData = useMemo(() => {
    return data.map((item) => ({
      ...item,
      duration: item.duration / 3600,
    }));
  }, [data]);

  const maxValue = useMemo(() => {
    const maxValueDataItem = maxBy(barData, (dataItem) => dataItem.duration);
    if (maxValueDataItem!.duration < 40) {
      return 40;
    }

    return maxValueDataItem?.duration;
  }, [barData]);

  const defaultData = useMemo(
    () => barData.map((data) => ({ isoWeek: data.isoWeek, duration: maxValue! - data.duration })),
    [barData, maxValue],
  );

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
        tickValues={[5, 10, 15, 20, 25, 30, 35, 40]}
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
          cornerRadius={{ top: 5, bottom: 5 }}
          style={{
            data: {
              fill: purple2,
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
                  isDefault
                  maxValue={maxValue}
                />
              }
            />
          }
          labels={() => ' '}
          cornerRadius={{ top: 5, bottom: 5 }}
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
    </VictoryChart>
  );
};
