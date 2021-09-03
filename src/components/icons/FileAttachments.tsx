import React from 'react';
import { Icon, SVGProps } from './Icon';

export const FileAttachment = ({ title = 'FileAttachment', size = '18', color }: SVGProps) => {
  return (
    <Icon title={title}>
      <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M16 18C16 19.1046 15.1046 20 14 20H2C0.89543 20 0 19.1046 0 18V7.24C0.000700208 6.44462 0.31723 5.68207 0.88 5.12L5.12 0.88C5.68207 0.31723 6.44462 0.000700208 7.24 0H14C15.1046 0 16 0.89543 16 2V18ZM2 8V18H14V2H8V7C8 7.55228 7.55228 8 7 8H2Z"
          fill="#EB8909"
        />
        <path
          d="M6.097 12.666C6.25 12.09 6.403 11.397 6.547 10.785H6.583C6.736 11.397 6.889 12.09 7.042 12.666L7.168 13.17H5.971L6.097 12.666ZM3.928 15.6H5.359L5.701 14.25H7.438L7.78 15.6H9.256L7.429 9.74098H5.755L3.928 15.6ZM9.75255 15.6H11.1385V11.127H9.75255V15.6ZM10.4455 10.497C10.9045 10.497 11.2285 10.218 11.2285 9.77698C11.2285 9.34498 10.9045 9.06598 10.4455 9.06598C9.98655 9.06598 9.66255 9.34498 9.66255 9.77698C9.66255 10.218 9.98655 10.497 10.4455 10.497Z"
          fill="#EB8909"
        />
      </svg>
    </Icon>
  );
};
