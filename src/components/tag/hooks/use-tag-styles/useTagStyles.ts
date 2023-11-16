import { useTheme } from '../../../../providers';
import { padding, borderRadius, margin, border } from '../../../../utils';

export const useTagStyles = ({ color }: { color: string }) => {
  const {
    theme: {
      current: {
        sizing: { scale200, scale0, scale100, scale700 },
        borders: { border300 },
        customColors: { light4, dark4, light3, dark1 },
        typography: { ParagraphXSmall },
      },
    },
  } = useTheme();

  const rootStyles = {
    display: 'inline-flex',
    ...padding('0', scale200),
    ...borderRadius(scale0),
    ...margin('0', scale100, '0', '0'),
    ...border({
      ...border300,
      borderColor: dark4,
    }),
    backgroundColor: light3,
    // ...border({
    //   ...border300,
    //   borderColor: color,
    // }),
    // backgroundColor: color,
    cursor: 'default',
    height: scale700,
    color: dark1,
    maxWidth: '100%',
  };

  const textStyles = {
    ...ParagraphXSmall,
    color: dark1,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    maxWidth: 'auto',
  };

  return { rootStyles, textStyles };
};
