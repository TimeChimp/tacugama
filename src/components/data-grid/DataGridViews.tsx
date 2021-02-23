import React, { useEffect, useState } from 'react';
import TertiaryButton from '../button/TertiaryButton';
import { View } from '../icons/View';
import { Views } from '../icons/Views';
import useTheme from '../../providers/ThemeProvider';
import { DataGridHeaderProps } from './types';
import { DropdownItem } from '../dropdown/DropdownOption';
import { Plus } from '../icons/Plus';
import { StyledDataGridViews, StyledDataGridViewList } from './StyledDataGrid';
import { StatefulPopover } from '../popover';
import { ListItem, ListItemLabel } from '../list';
import { Drag, Menu } from '../icons';
import { Dropdown } from '../dropdown/Dropdown';
import { Trash } from '../icons/Trash';
import { arrayMove, List as MovableList } from 'react-movable';

export const DataGridViews = ({ translations }: DataGridHeaderProps) => {
  const [views, setViews] = React.useState(['Item 1', 'Item 2', 'Item 3']);

  const {
    theme: {
      current: {
        colors: { primary },
        sizing: { scale400, scale600 },
      },
    },
  } = useTheme();

  const addView = () => {
    alert('Add view');
  };

  const viewMenuItems = [
    {
      icon: <Views />,
      label: translations.unpinView,
      action: () => alert('unpinView'),
    },
    {
      icon: <Views />,
      label: translations.renameView,
      action: () => alert('renameView'),
    },
    {
      icon: <Views />,
      label: translations.updateView,
      action: () => alert('updateView'),
    },
    {
      icon: <Trash />,
      label: translations.deleteView,
      action: () => alert('deleteView'),
    },
  ] as DropdownItem[];

  return (
    <StyledDataGridViews>
      <TertiaryButton startEnhancer={() => <View size={scale600} />}>{translations.defaultView}</TertiaryButton>
      <StatefulPopover
        focusLock
        content={() => (
          <>
            <MovableList
              values={views}
              onChange={({ oldIndex, newIndex }) => setViews(arrayMove(views, oldIndex, newIndex))}
              renderList={({ children, props }) => (
                <StyledDataGridViewList {...props}>{children}</StyledDataGridViewList>
              )}
              renderItem={({ value, props }) => (
                <ListItem
                  endEnhancer={() => (
                    <Dropdown items={viewMenuItems}>
                      <TertiaryButton>
                        <Menu size={scale400} color={primary} />
                      </TertiaryButton>
                    </Dropdown>
                  )}
                  {...props}
                >
                  <ListItemLabel>
                    <TertiaryButton data-movable-handle>
                      <Drag size={scale400} />
                      {/* https://github.com/tajo/react-movable/blob/master/examples/Handle.tsx */}
                    </TertiaryButton>
                    {value}
                  </ListItemLabel>
                </ListItem>
              )}
            ></MovableList>
            <TertiaryButton onClick={addView} startEnhancer={() => <Plus size={scale400} color={primary} />}>
              {translations.addView}
            </TertiaryButton>
          </>
        )}
      >
        <TertiaryButton startEnhancer={() => <Views size={scale600} />}>{translations.viewOptions}</TertiaryButton>
      </StatefulPopover>
    </StyledDataGridViews>
  );
};

export default DataGridViews;
