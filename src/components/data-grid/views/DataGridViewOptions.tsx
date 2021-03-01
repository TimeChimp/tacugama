import React, { useState } from 'react';
import { PLACEMENT } from 'baseui/popover';
import { SIZE } from 'baseui/button';
import { SecondaryButton, TertiaryButton } from '../../button';
import { DataGridViewOptionsProps } from '../types';
import {
  StyledViewOptionsFooter,
  StyledDataGridViewListItemLabel,
  StyledDataGridViewListItem,
} from '../StyledDataGrid';
import { StatefulPopover } from '../../popover';
import { Trash, Pin, Text, ActionMenu, Views, Plus } from '../../icons';
import { Dropdown, DropdownItem } from '../../dropdown';
import { StatefulMenu } from '../../menu';
import LabelXSmall from '../../typography/LabelXSmall';
import { SearchInput } from '../../input';
import { StyledDropdownSearch } from '../../dropdown/StyledDropdownOption';

import { useTheme } from '../../../providers';
import { border, padding } from '../../../utils';

export const DataGridViewOptions = ({
  translations,
  views,
  setEditView,
  setDeleteModalIsOpen,
  setCreateModalIsOpen,
  onPinView,
  onUnpinView,
  setSaveModalIsOpen,
  setRenameModalIsOpen,
}: DataGridViewOptionsProps) => {
  const [viewSearchTerm, setViewSearchTerm] = useState<string>();

  const {
    theme: {
      current: {
        colors: { primary, primaryB, contentStateDisabled },
        sizing: { scale400, scale600 },
        borders: { border300 },
      },
    },
  } = useTheme();

  const getViewById = (id: string) => views?.find((view) => view.id === id);

  const getViewMenuItems = (id: string) => {
    let items: DropdownItem[] = [];
    const view = getViewById(id);

    if (view) {
      items = [
        {
          icon: <Pin color={contentStateDisabled} size={scale600} />,
          label: view.pinned ? translations.unpinView : translations.pinView,
          action: () => {
            if (view.pinned && onUnpinView) {
              onUnpinView(view.id!);
            } else if (!view.pinned && onPinView) {
              onPinView(view.id!);
            }
          },
        },
        {
          icon: <Text color={contentStateDisabled} size={scale600} />,
          label: translations.renameView,
          action: () => {
            setEditView(view);
            setRenameModalIsOpen(true);
          },
        },
        {
          icon: <Views color={contentStateDisabled} size={scale600} />,
          label: translations.saveView,
          action: () => {
            setEditView(view);
            setSaveModalIsOpen(true);
          },
        },
        {
          icon: <Trash color={contentStateDisabled} size={scale600} />,
          label: translations.deleteView,
          action: () => {
            setEditView(view);
            setDeleteModalIsOpen(true);
          },
        },
      ];
    }

    return items;
  };

  return (
    <StatefulPopover
      focusLock
      placement={PLACEMENT.bottom}
      content={() => (
        <>
          <StyledDropdownSearch>
            <SearchInput
              size={SIZE.compact}
              placeholder={translations.search}
              onChange={(event) => setViewSearchTerm(event.currentTarget.value)}
            />
          </StyledDropdownSearch>
          <StatefulMenu
            items={
              views
                ? views
                    ?.filter((x) => !viewSearchTerm || x.name.toLowerCase().includes(viewSearchTerm.toLowerCase()))
                    .map(({ id, name }) => ({ id, label: name }))
                : []
            }
            overrides={{
              List: {
                style: {
                  ...padding(),
                  paddingInlineStart: '0',
                  boxShadow: 'none',
                  outline: 'none',
                },
              },
              ListItem: {
                component: ({ item: { id, label } }: { item: DropdownItem }) => (
                  <StyledDataGridViewListItem>
                    <StyledDataGridViewListItemLabel>
                      <Views color={contentStateDisabled} size={scale600} />
                      <LabelXSmall margin={[0, scale400]}>{label}</LabelXSmall>
                    </StyledDataGridViewListItemLabel>
                    <Dropdown placement={PLACEMENT.bottom} items={id ? getViewMenuItems(id) : []}>
                      <TertiaryButton>
                        <ActionMenu size={scale400} color={primary} />
                      </TertiaryButton>
                    </Dropdown>
                  </StyledDataGridViewListItem>
                ),
              },
            }}
          />
          <StyledViewOptionsFooter>
            <TertiaryButton
              onClick={() => setCreateModalIsOpen(true)}
              startEnhancer={() => <Plus size={scale400} color={primary} />}
            >
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
              ':hover': {
                backgroundColor: primaryB,
              },
              ':active': {
                backgroundColor: primaryB,
              },
            },
          },
        }}
        size={SIZE.mini}
        startEnhancer={() => <Views size={scale600} />}
      >
        {translations.viewOptions}
      </SecondaryButton>
    </StatefulPopover>
  );
};

export default DataGridViewOptions;
