import React, { useEffect, useState } from 'react';
import { PLACEMENT } from 'baseui/popover';
import { SIZE } from 'baseui/button';
import { SecondaryButton, TertiaryButton } from '../../button';
import { DataGridViewOptionsProps, DataGridView } from '../types';
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
import { border, margin, padding } from '../../../utils';
import { ItemsT } from 'baseui/menu';
import { StatefulTooltip } from '../../tooltip';
import { nameOf, sortBy } from '@timechimp/timechimp-typescript-helpers';

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
  const [viewItems, setViewItems] = useState<any[]>([]);

  const {
    theme: {
      current: {
        colors: { primary, primaryB, contentStateDisabled },
        sizing: { scale200, scale400, scale600 },
        borders: { border300 },
      },
    },
  } = useTheme();

  useEffect(() => {
    let viewItems = views ? views.map(({ id, name }) => ({ id, label: name })) : [];

    viewItems = sortBy<any>(viewItems, ['label']);

    viewItems.unshift({
      id: undefined,
      label: translations.defaultView,
    });

    viewItems = viewItems.filter(
      (x) => !viewSearchTerm || x.label.toLowerCase().includes(viewSearchTerm.toLowerCase()),
    );

    setViewItems(viewItems);
  }, [views, viewSearchTerm, translations]);

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
            items={viewItems}
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
                      {id ? (
                        <TertiaryButton>
                          <ActionMenu size={scale400} color={primary} />
                        </TertiaryButton>
                      ) : (
                        <StatefulTooltip
                          accessibilityType={'tooltip'}
                          content={translations.defaultViewTooltip}
                          placement={PLACEMENT.right}
                        >
                          <TertiaryButton>
                            <ActionMenu size={scale400} color={primary} />
                          </TertiaryButton>
                        </StatefulTooltip>
                      )}
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
              ...margin(scale200, scale400),
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
