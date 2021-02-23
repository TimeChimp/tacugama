import React from 'react';

import { StyledDataGridHeader } from './StyledDataGrid';
import TertiaryButton from '../button/TertiaryButton';
import { Trash } from '../icons/Trash';
import { Download } from '../icons/Download';
import { View } from '../icons/View';
import { Views } from '../icons/Views';
import useTheme from '../../providers/ThemeProvider';
import { DataGridHeaderProps } from './types';

export const DataGridHeader = ({ translations }: DataGridHeaderProps) => {
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
        <TertiaryButton startEnhancer={() => <View size={scale600} />}>{translations.defaultView}</TertiaryButton>
        <TertiaryButton startEnhancer={() => <Views size={scale600} />}>{translations.viewOptions}</TertiaryButton>
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
