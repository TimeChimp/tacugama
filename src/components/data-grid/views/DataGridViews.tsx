import React, { useState } from 'react';
import { View } from '../../icons/View';
import useTheme from '../../../providers/ThemeProvider';
import { DataGridViewsProps, DataGridView } from '../types';
import { StyledDataGridViews, StyledDataGridViewsDivider } from '../StyledDataGrid';
import SecondaryButton from '../../button/SecondaryButton';
import { SIZE } from 'baseui/button';
import ConfirmationModal from '../../confirmation-modal/ConfirmationModal';
import { CreateViewModal } from './CreateViewModal';
import { FlexItem } from '../../flex-item/FlexItem';
import { SaveViewModal } from './SaveViewModal';
import { RenameViewModal } from './RenameViewModal';
import { ConfirmationModalType } from 'models';
import { DataGridViewOptions } from '.';

const DELETE_VIEW_SUBMIT_BUTTON_TEST_ID = 'delete-view-confirmation-button';

export const DataGridViews = ({
  translations,
  views,
  onCreateView,
  onDeleteView,
  onRenameView,
  onPinView,
  onUnpinView,
  onSaveViewState,
  gridApi,
  gridColumnApi,
}: DataGridViewsProps) => {
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState<boolean>(false);
  const [createModalIsOpen, setCreateModalIsOpen] = useState<boolean>(false);
  const [saveModalIsOpen, setSaveModalIsOpen] = useState<boolean>(false);
  const [renameModalIsOpen, setRenameModalIsOpen] = useState<boolean>(false);
  const [selectedView, setSelectedView] = useState<DataGridView>();

  const {
    theme: {
      current: {
        sizing: { scale400, scale600 },
      },
    },
  } = useTheme();

  const handleCreateView = async (view: DataGridView) => {
    setCreateModalIsOpen(false);
    if (onCreateView) {
      onCreateView(view);
    }
  };

  const handleSaveViewState = async (id: string, viewState: string) => {
    setSaveModalIsOpen(false);
    if (onSaveViewState) {
      onSaveViewState(id, viewState);
    }
  };

  const handleRenameView = async (id: string, name: string) => {
    setRenameModalIsOpen(false);
    if (onRenameView) {
      onRenameView(id, name);
    }
  };

  const handleViewDelete = async () => {
    if (onDeleteView) {
      onDeleteView(selectedView?.id!);
    }
  };

  return (
    <>
      <StyledDataGridViews>
        {views
          ?.filter((view) => view.pinned)
          .map((view) => (
            <FlexItem marg1="0" marg2={scale400} marg3="0" marg4="0" width="fit-content">
              <SecondaryButton key={view.id} size={SIZE.mini} startEnhancer={() => <View size={scale600} />}>
                {view.name}
              </SecondaryButton>
            </FlexItem>
          ))}
        <StyledDataGridViewsDivider />
        <DataGridViewOptions
          translations={translations}
          views={views}
          setSelectedView={setSelectedView}
          setDeleteModalIsOpen={setDeleteModalIsOpen}
          setCreateModalIsOpen={setCreateModalIsOpen}
          setRenameModalIsOpen={setRenameModalIsOpen}
          setSaveModalIsOpen={setSaveModalIsOpen}
          onPinView={onPinView}
          onUnpinView={onUnpinView}
        />
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
        submitButtonTestId={DELETE_VIEW_SUBMIT_BUTTON_TEST_ID}
      />
      <CreateViewModal
        isOpen={createModalIsOpen}
        setIsOpen={setCreateModalIsOpen}
        handleCreateView={handleCreateView}
        translations={translations}
        gridApi={gridApi}
        gridColumnApi={gridColumnApi}
      />
      {selectedView && (
        <SaveViewModal
          view={selectedView}
          isOpen={saveModalIsOpen}
          setIsOpen={setSaveModalIsOpen}
          handleSaveView={handleSaveViewState}
          translations={translations}
          gridApi={gridApi}
          gridColumnApi={gridColumnApi}
        />
      )}
      {selectedView && (
        <RenameViewModal
          view={selectedView}
          isOpen={renameModalIsOpen}
          setIsOpen={setRenameModalIsOpen}
          handleRenameView={handleRenameView}
          translations={translations}
        />
      )}
    </>
  );
};

export default DataGridViews;
