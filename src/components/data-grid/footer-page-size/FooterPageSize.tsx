import React, { useEffect, useState } from 'react';
import { FooterRowCountProps } from '../types';
import { StyledFooterFooterPageSize } from '../styles';
import { ParagraphSmall } from '../../typography';
import { useTheme } from '../../../providers';
import { Button } from '../../../components/button';
import { Dropdown } from '../../../components/dropdown';
import { FlexItem } from '../../../components/flex-item';
import { ButtonKind } from '../../../models';
import { CaretDown } from '@phosphor-icons/react';

const EVENT_LISTENER = 'paginationChanged';

export const FooterPageSize = ({ api: gridApi, translations }: FooterRowCountProps) => {
  const [pageSize, setPageSize] = useState<number>(25);
  const {
    theme: {
      current: {
        sizing: { scale300, scale500 },
        customColors: { dark1 },
      },
    },
  } = useTheme();

  useEffect(() => {
    const onPaginationChanged = () => {
      setPageSize(gridApi?.paginationGetPageSize());
    };

    gridApi?.addEventListener(EVENT_LISTENER, onPaginationChanged);

    return () => {
      if (!gridApi?.isDestroyed()) {
        gridApi?.removeEventListener(EVENT_LISTENER, onPaginationChanged);
      }
    };
  }, [gridApi]);

  const handlePageSizeChange = (pageSize: number) => {
    gridApi.setGridOption('paginationPageSize', pageSize);
    gridApi.setGridOption('cacheBlockSize', pageSize);
    setPageSize(pageSize);
  };

  const options = [
    { label: '10', id: '10', action: () => handlePageSizeChange(10) },
    { label: '25', id: '25', action: () => handlePageSizeChange(25) },
    { label: '50', id: '50', action: () => handlePageSizeChange(50) },
    { label: '100', id: '100', action: () => handlePageSizeChange(100) },
    { label: '250', id: '250', action: () => handlePageSizeChange(250) },
    { label: '1000', id: '1000', action: () => handlePageSizeChange(1000) },
  ];

  const selectedOption = options.find((item) => item.label === pageSize.toString());

  return (
    <StyledFooterFooterPageSize>
      <ParagraphSmall marginLeft={scale300} marginRight={scale300} color={dark1}>
        {translations.showResultsBy}
      </ParagraphSmall>
      <Dropdown items={options}>
        <Button kind={ButtonKind.tertiary}>
          <ParagraphSmall color={dark1}>{selectedOption?.label}</ParagraphSmall>
          <FlexItem marg4={scale500}>
            <CaretDown color={dark1} />
          </FlexItem>
        </Button>
      </Dropdown>
    </StyledFooterFooterPageSize>
  );
};

export default FooterPageSize;
