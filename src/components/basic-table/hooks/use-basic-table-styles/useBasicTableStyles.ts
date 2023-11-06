import { useTheme } from '../../../../providers';
import { padding } from '../../../../utils';
import { TABLE_ROW_HEIGHT } from '../../../../models';

export const useBasicTableStyles = () => {
  const {
    theme: {
      current: {
        sizing: { scale800, scale600 },
        customColors: { light7, light6, dark3 },
        typography: { LabelSmall },
      },
    },
  } = useTheme();

  const tableHeadCellStyles = {
    backgroundColor: light7,
    color: dark3,
    ...padding('0', scale600),
    ...LabelSmall,
    height: TABLE_ROW_HEIGHT,
    borderBottomColor: light6,
  };

  const tableBodyCellStyles = {
    ...padding('0', scale600),
    height: TABLE_ROW_HEIGHT,
    verticalAlign: 'middle',
    borderBottomColor: light6,
  };

  const getSidePadding = (index: number, numberOfColumns: number) => {
    if (index === 0) {
      return { paddingLeft: scale800 };
    } else if (index + 1 === numberOfColumns) {
      return { paddingRight: scale800 };
    }
    return {};
  };

  return { tableBodyCellStyles, tableHeadCellStyles, getSidePadding };
};
