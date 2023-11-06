import { useTheme } from 'providers';
import { padding } from '../../../../utils';
import { TABLE_ROW_HEIGHT } from 'models';

export const useBasicTableStyles = () => {
  const {
    theme: {
      current: {
        sizing: { scale800 },
        customColors: { light7, light6, dark3 },
        typography: { LabelSmall },
      },
    },
  } = useTheme();

  const tableHeadCellStyles = {
    backgroundColor: light7,
    color: dark3,
    ...padding('0', scale800),
    ...LabelSmall,
    height: TABLE_ROW_HEIGHT,
    borderBottomColor: light6,
  };

  const tableBodyCellStyles = {
    ...padding('0', scale800),
    height: TABLE_ROW_HEIGHT,
    verticalAlign: 'middle',
    borderBottomColor: light6,
  };

  return { tableBodyCellStyles, tableHeadCellStyles };
};
