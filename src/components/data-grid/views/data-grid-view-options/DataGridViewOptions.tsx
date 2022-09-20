import React, { useState } from 'react';
import { PLACEMENT } from 'baseui/popover';
import { SIZE } from 'baseui/button';
import { SecondaryButton, TertiaryButton } from '../../../button';
import { DataGridViewOptionsProps } from '../../types';
import { StyledViewOptionsFooter, StyledDataGridViewListItem } from '../../styles';
import { StatefulPopover } from '../../../popover';
import { Trash, Pin, Text, ActionMenuHorizontal, Views, Plus } from '../../../icons';
import { Dropdown, DropdownItem } from '../../../dropdown';
import { StatefulMenu } from '../../../menu';
import { LabelXSmall } from '../../../typography';
import { SearchInput } from '../../../input';
import { StyledDropdownSearch } from '../../../dropdown/styles';

import { useTheme } from '../../../../providers';
import { border, borderRadius, margin, padding } from '../../../../utils';

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
  handleActivateView,
}: DataGridViewOptionsProps) => {
  const [viewSearchTerm, setViewSearchTerm] = useState<string>();

  const {
    theme: {
      current: {
        colors: { primary, primaryB, contentStateDisabled },
        sizing: { scale200, scale400, scale500, scale600, scale650 },
        borders: { border300, radius200 },
      },
    },
  } = useTheme();

  const getViewById = (id: string) => views?.find((view) => view.id === id);

  const isActiveView = (id: string) => getViewById(id)?.active;

  const onViewSelect = (id: string) => {
    const view = getViewById(id);
    if (!view?.active) {
      handleActivateView(id);
    }
  };

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
              onUnpinView(view.id);
            } else if (!view.pinned && onPinView) {
              onPinView(view.id);
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
                    .map(({ id, name }) => ({ id, label: name }))
                    .filter((x) => !viewSearchTerm || x.label.toLowerCase().includes(viewSearchTerm.toLowerCase()))
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
                    <TertiaryButton
                      size={SIZE.mini}
                      onClick={() => id && onViewSelect(id)}
                      startEnhancer={() => (
                        <Views color={isActiveView(id!) ? primary : contentStateDisabled} size={scale600} />
                      )}
                    >
                      <LabelXSmall
                        marginTop={scale400}
                        marginBottom={scale400}
                        marginLeft={scale400}
                        marginRight={scale400}
                      >
                        {label}
                      </LabelXSmall>
                    </TertiaryButton>
                    {id !== 'default' && (
                      <Dropdown placement={PLACEMENT.bottom} items={id ? getViewMenuItems(id) : []}>
                        <TertiaryButton>
                          <ActionMenuHorizontal size={scale400} color={primary} />
                        </TertiaryButton>
                      </Dropdown>
                    )}
                  </StyledDataGridViewListItem>
                ),
              },
            }}
          />
          <StyledViewOptionsFooter>
            <TertiaryButton
              onClick={() => setCreateModalIsOpen(true)}
              startEnhancer={() => <Plus size={scale650} color={primary} />}
              overrides={{
                Root: {
                  style: {
                    ...padding(scale200, scale500),
                    ':hover': {
                      backgroundColor: 'transparent',
                    },
                    ':active': {
                      backgroundColor: 'transparent',
                    },
                  },
                },
              }}
            >
              <LabelXSmall
                color={primary}
                marginTop={scale400}
                marginBottom={scale400}
                marginLeft={scale400}
                marginRight={scale400}
              >
                {translations.addView}
              </LabelXSmall>
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
              ...borderRadius(radius200),
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
