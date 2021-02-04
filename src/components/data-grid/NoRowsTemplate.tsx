import React from 'react';
import { useTheme } from '../../providers';
import { StyledNoRowsTemplate, StyledNoRowsTemplateContainer } from './StyledDataGrid';
import { HeadingSmall, ParagraphMedium } from '../typography';
import { NoRowsTemplateProps } from './types';

const DEFAULT_TITLE = `It's a bit lonely in here`;
const DEFAULT_SUBTEXT = 'Quick, add some items!';

export const NoRowsTemplate = ({
  noRowsTitle = DEFAULT_TITLE,
  noRowsSubtext = DEFAULT_SUBTEXT,
}: NoRowsTemplateProps) => {
  const {
    theme: {
      current: {
        sizing: { scale900 },
        colors: { primary },
      },
    },
  } = useTheme();

  return (
    <StyledNoRowsTemplate>
      <StyledNoRowsTemplateContainer>
        {/* Only for demo purpose */}
        <svg width="302" height="202" viewBox="0 0 302 202" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            opacity="0.1"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M175.019 33.2249C155.718 32.555 137.335 26.3224 119.779 19.5053C102.224 12.6881 84.837 5.13428 65.9951 1.52286C53.8796 -0.802018 40.0211 -1.13033 30.2572 5.3665C20.8616 11.6178 17.8267 22.4093 16.1932 32.4242C14.9653 39.9593 14.2446 47.8869 17.6078 54.9416C19.9434 59.8369 24.0913 63.9528 26.95 68.6426C36.9302 84.9647 29.8861 105.088 19.0599 121.026C13.9884 128.499 8.10014 135.631 4.18709 143.588C0.274045 151.545 -1.53033 160.663 1.91026 168.794C5.30549 176.839 13.3878 182.882 22.1615 187.134C39.949 195.753 60.9263 198.224 81.3804 199.623C126.661 202.719 172.184 201.379 217.584 200.037C234.384 199.537 251.262 199.036 267.789 196.436C276.969 194.994 286.444 192.699 293.109 187.176C301.568 180.159 303.666 168.276 297.997 159.475C288.489 144.715 262.2 141.058 255.556 125.208C251.897 116.491 255.655 106.777 260.972 98.6924C272.375 81.3426 291.489 66.1282 292.495 46.2987C293.189 32.6858 283.999 19.0408 269.791 12.5974C254.897 5.84429 234.248 6.6931 223.259 17.8744C211.944 29.3866 192.061 33.8148 175.019 33.2249Z"
            fill="#6559D2"
          />
        </svg>
        {/* Only for demo purpose */}
        <HeadingSmall color={primary} margin={[scale900, 0, 0, 0]}>
          {noRowsTitle}
        </HeadingSmall>
        <ParagraphMedium margin={[0, 0, scale900, 0]}>{noRowsSubtext}</ParagraphMedium>
      </StyledNoRowsTemplateContainer>
    </StyledNoRowsTemplate>
  );
};

export default NoRowsTemplate;
