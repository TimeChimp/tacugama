import { useTheme } from '../../../providers';
import React, { useMemo } from 'react';
import { VictoryArea, VictoryAxis, VictoryChart, VictoryTheme } from 'victory';
import { TcDate } from '@timechimp/timechimp-typescript-helpers';

interface LineGraphData {
  date?: Date;
  trackedDuration: number;
  x?: any;
  y?: any;
}

export interface LineGraphProps {
  data: LineGraphData[];
  horizontalAxisLabel: string;
  verticalAxisLabel: string;
}

export const LineGraph = ({ data, horizontalAxisLabel, verticalAxisLabel }: LineGraphProps) => {
  const {
    theme: {
      current: {
        customColors: { primarySubtle, dark0, dark4, light2 },
        sizing: { scale400, scale600, scale950 },
      },
    },
  } = useTheme();

  const convertedData: LineGraphData[] = useMemo(
    () =>
      data.map((graphDataItem: LineGraphData) => ({
        ...graphDataItem,
        trackedDuration: graphDataItem.trackedDuration / 3600,
      })),
    [data],
  );

  const maxValue = useMemo(() => {
    let max: number = 0;
    convertedData.forEach((graphDataItem: LineGraphData) => {
      const { trackedDuration } = graphDataItem;
      if (trackedDuration > max) {
        max = trackedDuration;
      }
    });
    return max * 1.1;
  }, [convertedData]);

  return (
    <VictoryChart
      maxDomain={{ y: maxValue }}
      minDomain={{ y: 0 }}
      scale={{ x: 'time' }}
      height={350}
      width={1400}
      theme={VictoryTheme.material}
    >
      <VictoryAxis
        label={horizontalAxisLabel}
        style={{
          axisLabel: { padding: 35, color: dark0, fontSize: scale600 },
          tickLabels: { fontSize: scale400, stroke: dark4 },
          grid: { stroke: 'none' },
        }}
        tickFormat={(t) => new TcDate(new Date(t)).format('dd MMM')}
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
        style={{ data: { fill: primarySubtle, opacity: 0.5, stroke: dark4 } }}
        interpolation="monotoneX"
        data={convertedData}
        x="date"
        y="trackedDuration"
      />
    </VictoryChart>
  );
};
