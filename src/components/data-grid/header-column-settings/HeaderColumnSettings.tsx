import React from 'react';
import { Button } from '../../button';
import { HeaderColumnSettingsProps } from '..';
import { ButtonKind } from '../../../models';
import { useTheme } from '../../../providers';
import { Dropdown } from '../../dropdown';
import { MenuOption } from './MenuOption';
import { CaretDown, Gear } from '@phosphor-icons/react';

export const HeaderColumnSettings = ({ settings }: HeaderColumnSettingsProps) => {
  const {
    theme: {
      current: {
        customColors: { dark0 },
      },
    },
  } = useTheme();

  const toggledSettings = settings.filter(({ value }) => value).map(({ id }) => id);

  return (
    <Dropdown items={settings} selection selectedIds={toggledSettings} customOption={MenuOption}>
      <Button
        kind={ButtonKind.tertiary}
        size="compact"
        data-test-id="dropdown-button"
        startEnhancer={<Gear color={dark0} />}
      >
        <CaretDown color={dark0} />
      </Button>
    </Dropdown>
  );
};

export default HeaderColumnSettings;
