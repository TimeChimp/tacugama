import React from 'react';
import { FlexItem } from '../../../flex-item';

export const EmptyMessage = ({ message }: { message: string }) => {
  return (
    <FlexItem height="100%" justifyContent="flex-start" alignItems="center">
      {message}
    </FlexItem>
  );
};
