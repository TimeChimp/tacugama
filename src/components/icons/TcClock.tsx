// @ts-nocheck - Types not set up properly for animations
import React from 'react';
import { themedStyled } from '../../theme';
import { Icon, SVGProps, defaultIconProps } from './Icon';

const StyledSvg = themedStyled('svg', {
  animationDuration: '1.5s',
  animationIterationCount: 'infinite',
  animationTimingFunction: 'linear',
  animationName: {
    from: {
      transform: 'rotate(0deg)',
    },
    to: {
      transform: 'rotate(360deg)',
    },
  },
});

export const TcClock = ({ title = 'TcClock', size = defaultIconProps.size, color = '#33D5B4' }: SVGProps) => {
  return (
    <Icon title={title}>
      <StyledSvg width={size} height={size} viewBox="0 0 420 420" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0)">
          <path
            d="M414.748 163.106L371.632 206.222C371.678 207.698 371.699 209.173 371.696 210.648C371.696 305.527 290.318 381.393 193.557 372.27C116.458 365.016 54.988 303.545 47.7094 226.445C38.5915 129.683 114.456 48.3041 209.334 48.3041C210.76 48.3041 212.191 48.3041 213.612 48.3582L256.753 5.21724C242.134 1.89479 227.202 0.145492 212.211 -0.000795514C96.1416 -1.19096 0.629635 92.773 0.00505184 208.853C-0.619531 325.706 94.1941 420.56 211.035 419.999C327.213 419.434 421.264 323.822 420 207.648C419.838 192.656 418.077 177.724 414.748 163.106Z"
            fill="#33D5B4"
          />
          <path
            d="M406.5 135.767L406.161 135.875L367.624 174.408C362.705 152.867 353.414 132.566 340.329 114.762L227.555 227.552C225.25 229.857 222.514 231.685 219.503 232.932C216.492 234.179 213.265 234.82 210.006 234.82C206.747 234.82 203.519 234.178 200.509 232.93C197.498 231.683 194.762 229.855 192.458 227.55C190.153 225.245 188.325 222.509 187.078 219.498C185.831 216.487 185.19 213.26 185.19 210.001C185.19 206.742 185.832 203.514 187.08 200.504C188.327 197.493 190.155 194.757 192.46 192.452L192.883 192.029L305.249 79.6721C287.643 66.7479 267.6 57.5247 246.332 52.559L260.028 38.8525L285.066 13.8148C312.755 24.4458 337.886 40.8064 358.813 61.8251C379.74 82.8438 395.99 108.046 406.5 135.782V135.767Z"
            fill="#33D5B4"
          />
        </g>
        <defs>
          <clipPath id="clip0">
            <rect width="420" height="420" fill="white" />
          </clipPath>
        </defs>
      </StyledSvg>
    </Icon>
  );
};
