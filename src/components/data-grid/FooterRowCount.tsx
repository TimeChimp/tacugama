import React, { useEffect, useState } from 'react';
import { FooterRowCountProps } from './types';
import { StyledFooterRowCount } from './styles';
import { useTheme } from '../../providers';
import { LabelSmall } from '../typography';

const EVENT_LISTENER = 'modelUpdated';

export const FooterRowCount = ({ api: gridApi, translations }: FooterRowCountProps) => {
  const [count, setCount] = useState(Number);
  const {
    theme: {
      current: {
        colors: { contentTertiary },
      },
    },
  } = useTheme();

  useEffect(() => {
    const onModelUpdated = () => {
      setCount(gridApi?.getDisplayedRowCount());
    };

    gridApi?.addEventListener(EVENT_LISTENER, onModelUpdated);

    return () => {
      gridApi?.removeEventListener(EVENT_LISTENER, onModelUpdated);
    };
  }, [gridApi]);

  return (
    <StyledFooterRowCount>
      <LabelSmall color={contentTertiary}>{translations.rowCountText && translations.rowCountText(count)}</LabelSmall>
    </StyledFooterRowCount>
  );
};

export default FooterRowCount;
