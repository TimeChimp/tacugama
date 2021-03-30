import React, { useEffect, useState } from 'react';
import { FooterRowCountProps } from './types';
import { StyledFooterFooterPageSize } from './styles';
import { Select } from '../select/Select';

const EVENT_LISTENER = 'paginationChanged';

export const FooterPageSize = ({ api: gridApi, translations }: FooterRowCountProps) => {
  const [pageSize, setPageSize] = useState<number>(1);

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
      <Select
        options={[
          { name: '1', id: 1 },
          { name: '2', id: 2 },
        ]}
        value={[{ id: pageSize }]}
        placeholder="Select page size"
        onChange={({ value }) => handlePageSizeChange(value[0].id as number)}
      />
    </StyledFooterFooterPageSize>
  );
};

export default FooterPageSize;
