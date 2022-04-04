import { useTheme } from '../../../providers';
import React from 'react';
import { Icon, SVGProps, defaultIconProps } from '../icon';

export const Settings = ({ title = 'Settings', size = defaultIconProps.size, color }: SVGProps) => {
  const { theme } = useTheme();
  return (
    <Icon title={title} lineHeight="0">
      <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.2101 12.0741C17.725 11.6707 17.4582 11.0617 17.4901 10.4309V10V9.56914C17.4582 8.9383 17.725 8.32932 18.2101 7.92587L19.0101 7.26455C19.3862 6.95336 19.4834 6.41563 19.2401 5.99202L18.0801 3.98803C17.9025 3.67987 17.5752 3.48918 17.2201 3.48703C17.0997 3.48502 16.9804 3.50894 16.8701 3.55717L15.8701 3.91789C15.6471 4.00535 15.4095 4.04955 15.1701 4.04815C14.7869 4.04715 14.412 3.93586 14.0901 3.72751C13.855 3.56478 13.6076 3.42072 13.3501 3.29665C12.7874 3.0075 12.3943 2.46873 12.2901 1.84376L12.1201 0.84176C12.0409 0.351727 11.6155 -0.00630458 11.1201 8.41592e-05H8.82008C8.32469 -0.00630458 7.89931 0.351727 7.82008 0.84176L7.65008 1.84376C7.55457 2.46084 7.17743 2.99804 6.63008 3.29665C6.37258 3.42072 6.12516 3.56478 5.89008 3.72751C5.56817 3.93586 5.1933 4.04715 4.81008 4.04815C4.57062 4.04955 4.33307 4.00535 4.11008 3.91789L3.11008 3.55717C2.99977 3.50894 2.88041 3.48502 2.76008 3.48703C2.40497 3.48918 2.07763 3.67987 1.90008 3.98803L0.760079 5.99202C0.519004 6.41797 0.620499 6.95612 1.00008 7.26455L1.80008 7.92587C2.28513 8.32932 2.55195 8.9383 2.52008 9.56914V10V10.4309C2.55195 11.0617 2.28513 11.6707 1.80008 12.0741L1.00008 12.7354C0.620499 13.0439 0.519004 13.582 0.760079 14.008L1.92008 16.012C2.09763 16.3201 2.42497 16.5108 2.78008 16.513C2.90041 16.515 3.01977 16.4911 3.13008 16.4428L4.13008 16.0821C4.35307 15.9947 4.59062 15.9504 4.83008 15.9519C5.2133 15.9528 5.58817 16.0641 5.91008 16.2725C6.14516 16.4352 6.39258 16.5793 6.65008 16.7034C7.21278 16.9925 7.60585 17.5313 7.71008 18.1562L7.88008 19.1582C7.95931 19.6483 8.38469 20.0063 8.88008 19.9999H11.1801C11.6755 20.0063 12.1009 19.6483 12.1801 19.1582L12.3501 18.1562C12.4543 17.5313 12.8474 16.9925 13.4101 16.7034C13.6676 16.5793 13.915 16.4352 14.1501 16.2725C14.472 16.0641 14.8469 15.9528 15.2301 15.9519C15.4695 15.9504 15.7071 15.9947 15.9301 16.0821L16.9301 16.4428C17.0404 16.4911 17.1597 16.515 17.2801 16.513C17.6352 16.5108 17.9625 16.3201 18.1401 16.012L19.3001 14.008C19.5281 13.5679 19.4006 13.0268 19.0001 12.7354L18.2101 12.0741ZM10.0001 15.511C6.96251 15.511 4.50008 13.0436 4.50008 10C4.50008 6.95637 6.96251 4.48902 10.0001 4.48902C13.0376 4.48902 15.5001 6.95637 15.5001 10C15.5001 11.4616 14.9206 12.8633 13.8892 13.8968C12.8577 14.9304 11.4588 15.511 10.0001 15.511ZM8.00008 10C8.00008 8.89323 8.89551 7.99601 10.0001 7.99601C11.1046 7.99601 12.0001 8.89323 12.0001 10C12.0001 11.1068 11.1046 12.004 10.0001 12.004C8.89551 12.004 8.00008 11.1068 8.00008 10Z"
          fill={color || theme.current.colors.primary}
        />
      </svg>
    </Icon>
  );
};
