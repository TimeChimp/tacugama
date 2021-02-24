import React from 'react';
import TertiaryButton from '../button/TertiaryButton';
import { View } from '../icons/View';
import { Views } from '../icons/Views';
import useTheme from '../../providers/ThemeProvider';
import { DataGridHeaderProps } from './types';
import { DropdownItem } from '../dropdown/DropdownOption';
import { Plus } from '../icons/Plus';
import {
  StyledDataGridViews,
  StyledDataGridViewList,
  StyledDataGridViewsDivider,
  StyledViewOptionsFooter,
} from './StyledDataGrid';
import { StatefulPopover } from '../popover';
import { ListItem, ListItemLabel } from '../list';
import { Drag } from '../icons';
import { Dropdown } from '../dropdown/Dropdown';
import { Trash } from '../icons/Trash';
import { Pin } from '../icons/Pin';
import { Text } from '../icons/Text';
import { arrayMove, List as MovableList } from 'react-movable';
import { PLACEMENT } from 'baseui/popover';
import { ActionMenu } from '../icons/ActionMenu';
import SecondaryButton from '../button/SecondaryButton';
import { SIZE } from 'baseui/button';
import { border, padding, margin } from '../../utils/css';

export const DataGridViews = ({ translations }: DataGridHeaderProps) => {
  const [views, setViews] = React.useState(['Item 1', 'Item 2', 'Item 3']);

  const {
    theme: {
      current: {
        colors: { primary, contentStateDisabled },
        sizing: { scale400, scale600, scale1200 },
        borders: { border300 },
      },
    },
  } = useTheme();

  const addView = () => {
    alert('Add view');
  };

  const viewMenuItems = [
    {
      icon: <Pin color={contentStateDisabled} size={scale600} />,
      label: translations.unpinView,
      action: () => alert('unpinView'),
    },
    {
      icon: <Text color={contentStateDisabled} size={scale600} />,
      label: translations.renameView,
      action: () => alert('renameView'),
    },
    {
      icon: <Views color={contentStateDisabled} size={scale600} />,
      label: translations.updateView,
      action: () => alert('updateView'),
    },
    {
      icon: <Trash color={contentStateDisabled} size={scale600} />,
      label: translations.deleteView,
      action: () => alert('deleteView'),
    },
  ] as DropdownItem[];

  return (
    <StyledDataGridViews>
      <SecondaryButton size={SIZE.mini} startEnhancer={() => <View size={scale600} />}>
        {translations.defaultView}
      </SecondaryButton>
      <StyledDataGridViewsDivider />
      <StatefulPopover
        focusLock
        placement={PLACEMENT.bottom}
        content={() => (
          <>
            <MovableList
              lockVertically
              values={views}
              onChange={({ oldIndex, newIndex }) => setViews(arrayMove(views, oldIndex, newIndex))}
              renderList={({ children, props }) => (
                <StyledDataGridViewList {...props}>{children}</StyledDataGridViewList>
              )}
              renderItem={({ value, props }) => (
                <ListItem
                  overrides={{
                    Content: {
                      style: {
                        ...padding('0'),
                        ...margin('0'),
                        height: scale1200,
                      },
                    },
                  }}
                  endEnhancer={() => (
                    <Dropdown placement={PLACEMENT.bottom} items={viewMenuItems}>
                      <TertiaryButton>
                        <ActionMenu size={scale400} color={primary} />
                      </TertiaryButton>
                    </Dropdown>
                  )}
                  {...props}
                >
                  <ListItemLabel>
                    <TertiaryButton data-movable-handle>
                      <Drag size={scale400} color={contentStateDisabled} />
                    </TertiaryButton>
                    <TertiaryButton startEnhancer={() => <Views color={contentStateDisabled} size={scale600} />}>
                      {value}
                    </TertiaryButton>
                  </ListItemLabel>
                </ListItem>
              )}
            ></MovableList>
            <StyledViewOptionsFooter>
              <TertiaryButton onClick={addView} startEnhancer={() => <Plus size={scale400} color={primary} />}>
                {translations.addView}
              </TertiaryButton>
            </StyledViewOptionsFooter>
          </>
        )}
      >
        <SecondaryButton
          overrides={{
            BaseButton: {
              style: {
                ...border({
                  borderColor: border300.borderColor,
                  borderStyle: 'dashed',
                  borderWidth: border300.borderWidth,
                }),
                boxSizing: 'border-box',
              },
            },
          }}
          size={SIZE.mini}
          startEnhancer={() => <Views size={scale600} />}
        >
          {translations.viewOptions}
        </SecondaryButton>
      </StatefulPopover>
    </StyledDataGridViews>
  );
};

export default DataGridViews;
