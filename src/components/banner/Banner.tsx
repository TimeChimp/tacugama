import React from 'react';
import { ParagraphSmall } from '../typography';
import { useTheme } from '../../providers';
import { StyledBanner, StyledContainer } from './styles';
import { BannerType, BannerProps } from './types';
import { Block } from '../block';
import { Check, Info, Warning, XCircle } from '@phosphor-icons/react';

export const Banner = ({ type = BannerType.info, text }: BannerProps) => {
  const {
    theme: {
      current: {
        colors: { primary },
        customColors: { red0, green0, yellow5 },
        sizing: { scale0 },
      },
    },
  } = useTheme();

  const getBannerBackgroundColor = () => {
    const map = {
      [BannerType.success]: green0,
      [BannerType.error]: red0,
      [BannerType.warning]: yellow5,
      [BannerType.info]: primary,
    };

    return map[type];
  };

  const getBannerIcon = () => {
    const color = getBannerBackgroundColor();

    const map = {
      [BannerType.success]: <Check color={color} />,
      [BannerType.error]: <XCircle color={color} />,
      [BannerType.warning]: <Warning color={color} />,
      [BannerType.info]: <Info color={color} />,
    };

    return map[type];
  };

  return (
    <StyledBanner $backgroundColor={getBannerBackgroundColor()}>
      <StyledContainer>
        <Block paddingTop={scale0}>{getBannerIcon()}</Block>
        <ParagraphSmall>{text}</ParagraphSmall>
      </StyledContainer>
    </StyledBanner>
  );
};

export default Banner;
