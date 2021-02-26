import React, { useState } from 'react';
import TertiaryButton from '../../button/TertiaryButton';
import { View } from '../../icons/View';
import { Views } from '../../icons/Views';
import useTheme from '../../../providers/ThemeProvider';
import { DataGridViewsProps, DataGridView } from '../types';
import { DropdownItem } from '../../dropdown/DropdownOption';
import { Plus } from '../../icons/Plus';
import {
  StyledDataGridViews,
  StyledDataGridViewList,
  StyledDataGridViewsDivider,
  StyledViewOptionsFooter,
  StyledDataGridViewListItem,
  StyledDataGridViewListItemLabel,
} from '../StyledDataGrid';
import { StatefulPopover } from '../../popover';
import { Drag } from '../../icons';
import { Dropdown } from '../../dropdown/Dropdown';
import { Trash } from '../../icons/Trash';
import { Pin } from '../../icons/Pin';
import { Text } from '../../icons/Text';
import { PLACEMENT } from 'baseui/popover';
import { ActionMenu } from '../../icons/ActionMenu';
import SecondaryButton from '../../button/SecondaryButton';
import { SIZE } from 'baseui/button';
import { border, margin } from '../../../utils/css';
import LabelXSmall from '../../typography/LabelXSmall';
import ConfirmationModal from '../../confirmation-modal/ConfirmationModal';
import { ConfirmationModalType } from '../../../models/ConfirmationModalType';
import { CreateViewModal } from './CreateViewModal';
import { FlexItem } from '../../flex-item/FlexItem';

export const DataGridViews = ({
  translations,
  views,
  onCreateView,
  onDeleteView,
  onUpdateView,
}: DataGridViewsProps) => {
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState<boolean>(false);
  const [createModalIsOpen, setCreateModalIsOpen] = useState<boolean>(false);
  const [selectedView, setSelectedView] = useState<DataGridView>();

  const {
    theme: {
      current: {
        colors: { primary, contentStateDisabled },
        sizing: { scale400, scale600 },
        borders: { border300 },
      },
    },
  } = useTheme();

  const handleCreateView = async (view: DataGridView) => {
    setCreateModalIsOpen(false);
    if (onCreateView) {
      onCreateView(view);
    }
  };

  const handleViewDelete = async () => {
    if (selectedView && onDeleteView) {
      onDeleteView(selectedView);
    }
  };

  const getViewMenuItems = (view: DataGridView) => {
    return [
      {
        icon: <Pin color={contentStateDisabled} size={scale600} />,
        label: translations.unpinView,
        action: () => {
          if (onUpdateView) {
            onUpdateView({ ...view, pinned: !view.pinned });
          }
        },
      },
      {
        icon: <Text color={contentStateDisabled} size={scale600} />,
        label: translations.renameView,
      },
      {
        icon: <Views color={contentStateDisabled} size={scale600} />,
        label: translations.updateView,
        action: () => {
          setSelectedView(view);
          setDeleteModalIsOpen(true);
        },
      },
      {
        icon: <Trash color={contentStateDisabled} size={scale600} />,
        label: translations.deleteView,
        action: () => {
          setSelectedView(view);
          setDeleteModalIsOpen(true);
        },
      },
    ] as DropdownItem[];
  };

  return (
    <>
      <StyledDataGridViews>
        {views
          ?.filter((view) => view.pinned)
          .map((view) => (
            <FlexItem marg1="0" marg2="10px" marg3="0" marg4="0" width="fit-content">
              <SecondaryButton key={view.id} size={SIZE.mini} startEnhancer={() => <View size={scale600} />}>
                {view.name}
              </SecondaryButton>
            </FlexItem>
          ))}
        <StyledDataGridViewsDivider />
        <StatefulPopover
          focusLock
          placement={PLACEMENT.bottom}
          content={() => (
            <>
              <StyledDataGridViewList>
                {views?.map((view) => (
                  <StyledDataGridViewListItem key={view.id}>
                    <StyledDataGridViewListItemLabel>
                      <TertiaryButton>
                        <Drag size={scale400} color={contentStateDisabled} />
                      </TertiaryButton>
                      <Views color={contentStateDisabled} size={scale600} />
                      <LabelXSmall margin={[0, scale400]}>{view.name}</LabelXSmall>
                    </StyledDataGridViewListItemLabel>
                    <Dropdown placement={PLACEMENT.bottom} items={getViewMenuItems(view)}>
                      <TertiaryButton>
                        <ActionMenu size={scale400} color={primary} />
                      </TertiaryButton>
                    </Dropdown>
                  </StyledDataGridViewListItem>
                ))}
              </StyledDataGridViewList>
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
      <ConfirmationModal
        title={translations.deleteView!}
        description={translations.deleteViewConfirmation!}
        type={ConfirmationModalType.danger}
        isOpen={deleteModalIsOpen}
        setIsOpen={setDeleteModalIsOpen}
        submitLabel={translations.deleteView!}
        submitOnClick={handleViewDelete}
        cancelLabel={translations.cancel!}
        submitButtonTestId="view-delete-modal"
      />
      <CreateViewModal
        isOpen={createModalIsOpen}
        setIsOpen={setCreateModalIsOpen}
        handleCreateView={handleCreateView}
      />
    </>
  );
};

export default DataGridViews;
