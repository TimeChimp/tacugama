export interface LineGraphData {
  date?: Date | string;
  trackedDuration?: number;
  billableDuration?: number;
  nonBillableDuration?: number;
  label?: string;
}

export interface LegendData {
  name: string;
  symbol: { fill: string; type: string };
}

export interface LineGraphProps {
  data: LineGraphData[];
  verticalAxisLabel: string;
  horizontalAxisValue?: string;
  verticalAxisValue?: string;
  width?: number;
  formatAsDate?: boolean;
  horizontalAxisItemLabel?: string;
  trackedText?: string;
  hoursText?: string;
  billableText?: string;
  nonBillableText?: string;
  limit?: number;
  isBillable?: boolean;
  isNonBillable?: boolean;
  flyOutWidth?: number;
  flyOutHeight?: number;
  legendData?: LegendData[];
  dateFormat?: string;
}
