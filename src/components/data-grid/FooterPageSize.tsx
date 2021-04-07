import React, { useEffect, useState } from 'react';
import { FooterRowCountProps } from './types';
import { StyledFooterFooterPageSize } from './styles';
import { Select } from '../select/Select';
import { SIZE } from 'baseui/select';
import { useTheme } from '../../providers';
import { ParagraphSmall } from '../typography';

const EVENT_LISTENER = 'paginationChanged';

export const FooterPageSize = ({ api: gridApi, translations }: FooterRowCountProps) => {
  const [pageSize, setPageSize] = useState<number>(25);
  const {
    theme: {
      current: {
        sizing: { scale300 },
        customColors: { dark4 },
      },
    },
  } = useTheme();

  useEffect(() => {
    const onPaginationChanged = () => {
      setPageSize(gridApi?.paginationGetPageSize());
    };

    gridApi?.addEventListener(EVENT_LISTENER, onPaginationChanged);

    return () => {
      gridApi?.removeEventListener(EVENT_LISTENER, onPaginationChanged);
    };
  }, [gridApi]);

  const handlePageSizeChange = (pageSize: number) => {
    gridApi.paginationSetPageSize(pageSize);
    setPageSize(pageSize);
  };

  return (
    <StyledFooterFooterPageSize>
      <ParagraphSmall margin={['0', scale300]} color={dark4}>
        {translations.showResultsBy}
      </ParagraphSmall>
      <Select
        clearable={false}
        size={SIZE.mini}
        options={[
          { name: '10', id: 10 },
          { name: '25', id: 25 },
          { name: '50', id: 50 },
          { name: '100', id: 100 },
          { name: '250', id: 250 },
        ]}
        value={[{ id: pageSize }]}
        onChange={({ value }) => handlePageSizeChange(value[0].id as number)}
      />
    </StyledFooterFooterPageSize>
  );
};

export default FooterPageSize;
