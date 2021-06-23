import React from 'react';
import ErrorPage from './ErrorPage';
import { ErrorPageProps } from './types';

export const Forbidden = ({
  title,
  description,
  primaryButtonText,
  secondaryButtonText,
  onPrimaryButtonClick,
  onSecondaryButtonClick,
}: ErrorPageProps) => {
  return (
    <ErrorPage
      title={title}
      description={description}
      primaryButtonText={primaryButtonText}
      secondaryButtonText={secondaryButtonText}
      onPrimaryButtonClick={onPrimaryButtonClick}
      onSecondaryButtonClick={onSecondaryButtonClick}
    />
  );
};

export default Forbidden;
