export interface BarGraphData {
  date?: Date | string;
  trackedDuration?: number;
  billableDuration?: number;
  nonBillableDuration?: number;
}

export interface BarGraphProps {
  data: BarGraphData[];
  horizontalAxisLabel: string;
  verticalAxisLabel: string;
  horizontalAxisValue?: string;
  verticalAxisValue?: string;
  width?: number;
  height?: number;
  formatAsDate?: boolean;
  horizontalAxisItemLabel?: string;
  trackedText?: string;
  hoursText?: string;
  barRatio?: number;
  billableText?: string;
  nonBillableText?: string;
  isBillable?: boolean;
  isNonBillable?: boolean;
  flyOutWidth?: number;
  flyOutHeight?: number;
  dateFormat?: string;
}
