import React from 'react';

import { StyledDataGridHeader } from './StyledDataGrid';
import TertiaryButton from '../button/TertiaryButton';
import { Trash } from '../icons/Trash';
import { Download } from '../icons/Download';
import { View } from '../icons/View';
import { Views } from '../icons/Views';
import useTheme from '../../providers/ThemeProvider';

export const DataGridHeader = () => {
  const {
    theme: {
      current: {
        colors: { contentStateDisabled },
        sizing: { scale600 },
      },
    },
  } = useTheme();

  return (
    <StyledDataGridHeader>
      <div>
        <TertiaryButton startEnhancer={() => <View size={scale600} />}>
          Default view
        </TertiaryButton>
        <TertiaryButton startEnhancer={() => <Views size={scale600} />}>
          View options
        </TertiaryButton>
      </div>
      <div>
          <TertiaryButton>
            <Download color={contentStateDisabled} size={scale600} />
          </TertiaryButton>
          <TertiaryButton>
            <Trash color={contentStateDisabled} size={scale600} />
          </TertiaryButton>
      </div>
    </StyledDataGridHeader>
  );
};

export default DataGridHeader;
