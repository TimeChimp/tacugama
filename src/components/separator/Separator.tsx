import React from 'react';
import { Seperator as SeparatorComponent } from './styles';
import { SeparatorProps } from './types';

export const Separator = ({ noMargin }: SeparatorProps) => <SeparatorComponent $noMargin={noMargin} />;
