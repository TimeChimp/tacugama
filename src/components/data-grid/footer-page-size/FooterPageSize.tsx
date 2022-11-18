import React, { useEffect, useMemo, useState } from 'react';
import { FooterRowCountProps } from '../types';
import { StyledFooterFooterPageSize } from '../styles';
import { Select } from '../../select';
import { ParagraphSmall } from '../../typography';
import { SIZE } from 'baseui/select';
import { useTheme } from '../../../providers';

const EVENT_LISTENER = 'paginationChanged';

export const FooterPageSize = ({ api: gridApi, translations }: FooterRowCountProps) => {
  const [pageSize, setPageSize] = useState<number>(25);
  const {
    theme: {
      current: {
        sizing: { scale300 },
        colors: { contentTertiary },
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

  const options = useMemo(
    () =>
      [
        { name: '10', id: 10 },
        { name: '25', id: 25 },
        { name: '50', id: 50 },
        { name: '100', id: 100 },
        { name: '250', id: 250 },
        { name: '1000', id: 1000 },
      ].sort((a, b) => a.id - b.id),
    [],
  );

  return (
    <StyledFooterFooterPageSize>
      <ParagraphSmall marginLeft={scale300} marginRight={scale300} color={contentTertiary}>
        {translations.showResultsBy}
      </ParagraphSmall>
      <Select
        clearable={false}
        searchable={false}
        size={SIZE.mini}
        options={options}
        value={[{ id: pageSize }]}
        onChangeHandler={({ value }) => {
          const selectedValue = (value as unknown) as { name: string; id: number };
          handlePageSizeChange(selectedValue.id);
        }}
      />
    </StyledFooterFooterPageSize>
  );
};

export default FooterPageSize;
