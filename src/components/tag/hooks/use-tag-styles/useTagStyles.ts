import { useTheme } from '../../../../providers';
import { padding, borderRadius, margin, border } from '../../../../utils';

export const useTagStyles = ({ color }: { color: string }) => {
  const {
    theme: {
      current: {
        sizing: { scale200, scale0, scale100, scale700 },
        borders: { border300 },
        customColors: { light4 },
        typography: { ParagraphXSmall },
      },
    },
  } = useTheme();

  const rootStyles = {
    display: 'inline-flex',
    ...padding('0px', scale200),
    ...borderRadius(scale0),
    ...margin('0px', scale100, '0px', '0px'),
    ...border({
      ...border300,
      borderColor: color,
    }),
    backgroundColor: color,
    cursor: 'default',
    height: scale700,
    color: light4,
  };

  const textStyles = {
    ...ParagraphXSmall,
    color: light4,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    maxWidth: 'auto',
  };

  return { rootStyles, textStyles };
};
