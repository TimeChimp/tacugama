import React, { useEffect, useState } from 'react';
import { FooterRowCountProps } from '../types';
import { StyledFooterPagination } from '../styles';
import { Pagination } from '../../pagination';

const EVENT_LISTENER = 'paginationChanged';

export const FooterPagination = ({ api: gridApi, translations }: FooterRowCountProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [numPages, setNumPages] = useState(1);

  useEffect(() => {
    const onPaginationChanged = () => {
      setNumPages(gridApi?.paginationGetTotalPages());
    };

    gridApi?.addEventListener(EVENT_LISTENER, onPaginationChanged);

    return () => {
      gridApi?.removeEventListener(EVENT_LISTENER, onPaginationChanged);
    };
  }, [gridApi]);

  const handlePageChange = (page: number) => {
    // Ag-grid and baseweb have a different way of counting the total number of pages
    gridApi.paginationGoToPage(page - 1);
    setCurrentPage(page);
  };

  return (
    <StyledFooterPagination>
      <Pagination
        numPages={numPages}
        currentPage={currentPage}
        onPageChange={({ nextPage }) => {
          handlePageChange(nextPage);
        }}
        labels={{
          prevButton: translations.paginationPrevious,
          nextButton: translations.paginationNext,
          preposition: translations.paginationOutOf,
        }}
      />
    </StyledFooterPagination>
  );
};

export default FooterPagination;
