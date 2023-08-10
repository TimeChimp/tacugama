import { colors } from '../../input';
import { lightColors, customColors } from '../../../theme/colors';
const { contentPrimary, contentTertiary } = lightColors;
const { light6 } = customColors;

// Typography
const sansSerif = "'Inter', 'Helvetica', sans-serif";
const letterSpacing = 'normal';
const fontSize = 14;

// Layout
const padding = 8;
const baseProps = {
  width: 350,
  height: 350,
  padding: 50,
};

// * Labels
const baseLabelStyles = {
  fontFamily: sansSerif,
  fontSize,
  letterSpacing,
  padding,
  fill: contentPrimary,
  stroke: 'transparent',
  strokeWidth: 0,
};

const centeredLabelStyles = Object.assign({ textAnchor: 'middle' }, baseLabelStyles);

// Strokes
const strokeDasharray = '10, 5';
const strokeLinecap = 'round';
const strokeLinejoin = 'round';

export const chartTheme = {
  area: Object.assign(
    {
      style: {
        data: {
          fill: contentPrimary,
        },
        labels: baseLabelStyles,
      },
    },
    baseProps,
  ),
  axis: Object.assign(
    {
      style: {
        axis: {
          fill: 'transparent',
          stroke: light6,
          strokeWidth: 2,
          strokeLinecap,
          strokeLinejoin,
        },
        axisLabel: Object.assign({}, centeredLabelStyles, {
          padding,
          stroke: 'transparent',
        }),
        grid: {
          fill: 'none',
          stroke: contentTertiary,
          strokeDasharray,
          strokeLinecap,
          strokeLinejoin,
          pointerEvents: 'painted',
        },
        ticks: {
          fill: 'transparent',
          size: 5,
          stroke: light6,
          strokeWidth: 1,
          strokeLinecap,
          strokeLinejoin,
        },
        tickLabels: Object.assign({}, baseLabelStyles, {
          fill: contentPrimary,
        }),
      },
    },
    baseProps,
  ),
  polarDependentAxis: Object.assign({
    style: {
      ticks: {
        fill: 'transparent',
        size: 1,
        stroke: 'transparent',
      },
    },
  }),
  bar: Object.assign(
    {
      style: {
        data: {
          fill: contentPrimary,
          padding,
          strokeWidth: 0,
        },
        labels: baseLabelStyles,
      },
    },
    baseProps,
  ),
  boxplot: Object.assign(
    {
      style: {
        max: { padding, stroke: contentPrimary, strokeWidth: 1 },
        maxLabels: Object.assign({}, baseLabelStyles, { padding: 3 }),
        median: { padding, stroke: contentPrimary, strokeWidth: 1 },
        medianLabels: Object.assign({}, baseLabelStyles, { padding: 3 }),
        min: { padding, stroke: contentPrimary, strokeWidth: 1 },
        minLabels: Object.assign({}, baseLabelStyles, { padding: 3 }),
        q1: { padding, fill: contentPrimary },
        q1Labels: Object.assign({}, baseLabelStyles, { padding: 3 }),
        q3: { padding, fill: contentPrimary },
        q3Labels: Object.assign({}, baseLabelStyles, { padding: 3 }),
      },
      boxWidth: 20,
    },
    baseProps,
  ),
  candlestick: Object.assign(
    {
      style: {
        data: {
          stroke: contentPrimary,
        },
        labels: Object.assign({}, baseLabelStyles, { padding: 5 }),
      },
      candleColors: {
        positive: '#ffffff',
        negative: contentPrimary,
      },
    },
    baseProps,
  ),
  chart: baseProps,
  errorbar: Object.assign(
    {
      borderWidth: 8,
      style: {
        data: {
          fill: 'transparent',
          opacity: 1,
          stroke: contentPrimary,
          strokeWidth: 2,
        },
        labels: baseLabelStyles,
      },
    },
    baseProps,
  ),
  group: Object.assign(
    {
      colorScale: colors,
    },
    baseProps,
  ),
  histogram: Object.assign(
    {
      style: {
        data: {
          fill: contentPrimary,
          stroke: contentPrimary,
          strokeWidth: 2,
        },
        labels: baseLabelStyles,
      },
    },
    baseProps,
  ),
  legend: {
    colorScale: colors,
    gutter: 10,
    orientation: 'vertical',
    titleOrientation: 'top',
    style: {
      data: {
        type: 'circle',
      },
      labels: baseLabelStyles,
      title: Object.assign({}, baseLabelStyles, { padding: 5 }),
    },
  },
  line: Object.assign(
    {
      style: {
        data: {
          fill: 'transparent',
          opacity: 1,
          stroke: contentPrimary,
          strokeWidth: 2,
        },
        labels: baseLabelStyles,
      },
    },
    baseProps,
  ),
  pie: Object.assign(
    {
      colorScale: colors,
      style: {
        data: {
          padding,
          stroke: contentTertiary,
          strokeWidth: 1,
        },
        labels: Object.assign({}, baseLabelStyles, { padding: 20 }),
      },
    },
    baseProps,
  ),
  scatter: Object.assign(
    {
      style: {
        data: {
          fill: contentPrimary,
          opacity: 1,
          stroke: 'transparent',
          strokeWidth: 0,
        },
        labels: baseLabelStyles,
      },
    },
    baseProps,
  ),
  stack: Object.assign(
    {
      colorScale: colors,
    },
    baseProps,
  ),
  tooltip: {
    style: Object.assign({}, baseLabelStyles, { padding: 0, pointerEvents: 'none' }),
    flyoutStyle: {
      stroke: contentPrimary,
      strokeWidth: 1,
      fill: '#f0f0f0',
      pointerEvents: 'none',
    },
    flyoutPadding: 5,
    cornerRadius: 5,
    pointerLength: 10,
  },
  voronoi: Object.assign(
    {
      style: {
        data: {
          fill: 'transparent',
          stroke: 'transparent',
          strokeWidth: 0,
        },
        labels: Object.assign({}, baseLabelStyles, { padding: 5, pointerEvents: 'none' }),
        flyout: {
          stroke: contentPrimary,
          strokeWidth: 1,
          fill: '#f0f0f0',
          pointerEvents: 'none',
        },
      },
    },
    baseProps,
  ),
};
