import { useTheme } from '../../../providers';
import React, { useMemo } from 'react';
import {
  VictoryArea,
  VictoryAxis,
  VictoryChart,
  VictoryScatter,
  VictoryTheme,
  VictoryTooltip,
  VictoryVoronoiContainer,
} from 'victory';
import { TcDate } from '@timechimp/timechimp-typescript-helpers';
import { FlyOutTooltip } from '../tooltip';

interface LineGraphData {
  date?: Date | string;
  trackedDuration?: number;
  label?: string;
}

export interface LineGraphProps {
  data: LineGraphData[];
  horizontalAxisLabel: string;
  verticalAxisLabel: string;
  horizontalAxisValue?: string;
  verticalAxisValue?: string;
  width?: number;
  height?: number;
  formatAsDate?: boolean;
  horizontalAxisItemLabel?: string;
  trackedText?: string;
}

export const LineGraph = ({
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
}: LineGraphProps) => {
  const {
    theme: {
      current: {
        customColors: { primarySubtle, dark0, dark4, light2 },
        sizing: { scale400, scale600 },
      },
    },
  } = useTheme();

  const convertedData: LineGraphData[] = useMemo(
    () =>
      data.map((graphDataItem: LineGraphData) => ({
        ...graphDataItem,
        trackedDuration: graphDataItem.trackedDuration! / 3600,
      })),
    [data],
  );

  const maxValue = useMemo(() => {
    let max: number = 0;
    let maxDate: number = 0;
    convertedData.forEach((graphDataItem: LineGraphData) => {
      const { trackedDuration, date } = graphDataItem;
      if (trackedDuration! > max) {
        max = trackedDuration!;
      }
      const formattedDate = date?.valueOf();

      if (formattedDate! > maxDate) {
        maxDate = formattedDate as number;
      }
    });

    return { x: maxDate, y: max * 2.1 };
  }, [convertedData]);

  return (
    <VictoryChart
      maxDomain={{ x: maxValue.x, y: maxValue.y }}
      minDomain={{ y: 0 }}
      scale={{ x: 'time' }}
      height={height}
      width={width}
      theme={VictoryTheme.material}
      containerComponent={
        <VictoryVoronoiContainer
          labels={() => ' '}
          labelComponent={
            <VictoryTooltip
              dy={-70}
              constrainToVisibleArea
              flyoutComponent={<FlyOutTooltip trackedText={trackedText} />}
            />
          }
        />
      }
    >
      <VictoryAxis
        label={horizontalAxisLabel}
        style={{
          axisLabel: { padding: 35, color: dark0, fontSize: scale600 },
          tickLabels: { fontSize: scale400, stroke: dark4 },
          grid: { stroke: 'none' },
        }}
        tickValues={convertedData.map((data) => new Date(data?.date!))}
        tickFormat={(t) =>
          formatAsDate ? new TcDate(new Date(t)).format('dd MMM') : `${horizontalAxisItemLabel} ${t?.split('-')[1]}`
        }
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
      <VictoryScatter
        data={convertedData}
        x={horizontalAxisValue}
        y={verticalAxisValue}
        style={{ data: { fill: 'white', stroke: '#B8B8B8', strokeWidth: '1' } }}
        size={({ active }) => {
          return active ? 4 : 0;
        }}
      />
    </VictoryChart>
  );
};
