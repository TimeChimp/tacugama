import React from 'react';
import TertiaryButton from '../button/TertiaryButton';
import { Trash } from '../icons/Trash';
import { Download } from '../icons/Download';
import useTheme from '../../providers/ThemeProvider';
import { StyledDataGridActions } from './styles';

export const DataGridActions = () => {
  const {
    theme: {
      current: {
        colors: { contentStateDisabled },
        sizing: { scale600 },
      },
    },
  } = useTheme();

  return (
    <StyledDataGridActions>
      <TertiaryButton>
        <Download color={contentStateDisabled} size={scale600} />
      </TertiaryButton>
      <TertiaryButton>
        <Trash color={contentStateDisabled} size={scale600} />
      </TertiaryButton>
    </StyledDataGridActions>
  );
};

export default DataGridActions;
