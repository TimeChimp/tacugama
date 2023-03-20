import React from 'react';
import { CaretDownIcon } from '../../icons/caret-down';
import { Button } from '../../button';
import { HeaderColumnSettingsProps } from '..';
import { ButtonKind } from '../../../models';
import { SettingsIcon } from '../../icons';
import { useTheme } from '../../../providers';
import { Dropdown } from '../../dropdown';
import { MenuOption } from './MenuOption';

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
        startEnhancer={<SettingsIcon color={dark0} />}
      >
        <CaretDownIcon color={dark0} />
      </Button>
    </Dropdown>
  );
};

export default HeaderColumnSettings;
