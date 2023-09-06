import React, { useState } from 'react';
import { PLACEMENT } from 'baseui/popover';
import { SIZE } from 'baseui/button';
import { Button } from '../../../button';
import { DataGridViewOptionsProps } from '../../types';
import { StyledViewOptionsFooter, StyledDataGridViewListItem } from '../../styles';
import { StatefulPopover } from '../../../popover';
import { CaretDownIcon } from '../../../icons/caret-down';
import { AddLineIcon } from '../../../icons/add-line';
import { DeleteIcon } from '../../../icons/delete';
import { PinIcon } from '../../../icons/pin';
import { ViewIcon } from '../../../icons/view';
import { EditIcon } from '../../../icons/edit';
import { MoreIcon } from '../../../icons/more';
import { Dropdown, DropdownItem } from '../../../dropdown';
import { StatefulMenu } from '../../../menu';
import { ParagraphSmall } from '../../../typography';
import { SearchInput } from '../../../input';
import { StyledDropdownSearch } from '../../../dropdown/styles';
import { useTheme } from '../../../../providers';
import { borderRadius, padding } from '../../../../utils';
import { ButtonKind } from '../../../../models';

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
        colors: { primary, contentStateDisabled },
        sizing: { scale400, scale600, scale1400 },
        customColors: { dark1 },
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
          icon: <PinIcon color={contentStateDisabled} />,
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
          icon: <EditIcon color={contentStateDisabled} size={scale600} />,
          label: translations.renameView,
          action: () => {
            setEditView(view);
            setRenameModalIsOpen(true);
          },
        },
        {
          icon: <ViewIcon color={contentStateDisabled} />,
          label: translations.saveView,
          action: () => {
            setEditView(view);
            setSaveModalIsOpen(true);
          },
        },
        {
          icon: <DeleteIcon color={contentStateDisabled} size={scale600} />,
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
              value={viewSearchTerm}
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
                  ...borderRadius('0'),
                },
              },
              ListItem: {
                component: ({ item: { id, label } }: { item: DropdownItem }) => (
                  <StyledDataGridViewListItem>
                    <Button
                      kind={ButtonKind.minimal}
                      height={scale1400}
                      onClick={() => id && onViewSelect(id)}
                      startEnhancer={() => <ViewIcon color={isActiveView(id!) ? primary : contentStateDisabled} />}
                    >
                      <ParagraphSmall
                        marginTop={scale400}
                        marginBottom={scale400}
                        marginLeft={scale400}
                        marginRight={scale400}
                      >
                        {label}
                      </ParagraphSmall>
                    </Button>
                    {id !== 'default' && (
                      <Dropdown placement={PLACEMENT.bottom} items={id ? getViewMenuItems(id) : []}>
                        <Button kind={ButtonKind.minimal}>
                          <MoreIcon color={primary} />
                        </Button>
                      </Dropdown>
                    )}
                  </StyledDataGridViewListItem>
                ),
              },
            }}
          />
          <StyledViewOptionsFooter>
            <Button
              kind={ButtonKind.minimal}
              height={scale1400}
              onClick={() => setCreateModalIsOpen(true)}
              startEnhancer={() => <AddLineIcon color={primary} />}
            >
              <ParagraphSmall
                color={primary}
                marginTop={scale400}
                marginBottom={scale400}
                marginLeft={scale400}
                marginRight={scale400}
              >
                {translations.addView}
              </ParagraphSmall>
            </Button>
          </StyledViewOptionsFooter>
        </>
      )}
    >
      <Button kind={ButtonKind.tertiary} endEnhancer={() => <CaretDownIcon color={dark1} />}>
        <ParagraphSmall color={dark1}>{translations.viewOptions}</ParagraphSmall>
      </Button>
    </StatefulPopover>
  );
};

export default DataGridViewOptions;
