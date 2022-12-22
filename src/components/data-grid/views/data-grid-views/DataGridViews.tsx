import React, { useState } from 'react';
import { ParagraphSmall } from '../../../typography';
import { useTheme } from '../../../../providers';
import { DataGridViewsProps, DataGridView, CreateViewInput } from '../../types';
import { StyledDataGridViews } from '../../styles';
import { Button } from '../../../button';
import { ConfirmationModal } from '../../../confirmation-modal';
import { CreateViewModal } from '../create-view-modal';
import { FlexItem } from '../../../flex-item';
import { SaveViewModal } from '../save-view-modal';
import { RenameViewModal } from '../rename-view-modal';
import { ConfirmationModalType, ButtonKind } from '../../../../models';
import { DataGridViewOptions } from '../data-grid-view-options';

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
  onActivateView,
  onModalClose,
  onModalOpen,
  gridApi,
  gridColumnApi,
}: DataGridViewsProps) => {
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState<boolean>(false);
  const [createModalIsOpen, setCreateModalIsOpen] = useState<boolean>(false);
  const [saveModalIsOpen, setSaveModalIsOpen] = useState<boolean>(false);
  const [renameModalIsOpen, setRenameModalIsOpen] = useState<boolean>(false);
  const [editView, setEditView] = useState<DataGridView>();
  const [activeViewId, setActiveViewId] = useState<string>();

  const {
    theme: {
      current: {
        sizing: { scale200, scale400, scale800 },
        colors: { primaryB },
      },
    },
  } = useTheme();

  const handleCreateView = async (input: CreateViewInput) => {
    if (onCreateView) {
      await onCreateView(input);
    }
  };

  const handleSaveViewState = async (id: string, viewState: string) => {
    if (onSaveViewState) {
      await onSaveViewState(id, viewState);
    }
  };

  const handleRenameView = async (id: string, name: string) => {
    if (onRenameView) {
      await onRenameView(id, name);
    }
  };

  const handleViewDelete = async () => {
    if (editView && onDeleteView) {
      await onDeleteView(editView.id);
    }
  };

  const handleActivateView = async (id: string) => {
    setActiveViewId(id);

    if (onActivateView) {
      await onActivateView(id);
    }
  };

  const isActiveView = (id: string) => {
    if (activeViewId) {
      return activeViewId === id;
    }

    const view = views?.find((x) => x.id === id);
    if (view) {
      return view.active;
    }
  };

  const openDeleteModal = () => {
    setDeleteModalIsOpen(true);
    if (onModalOpen) {
      onModalOpen();
    }
  };

  const onDeleteModalClose = () => {
    setDeleteModalIsOpen(false);
    if (onModalClose) {
      onModalClose();
    }
  };

  const openCreateModal = () => {
    setCreateModalIsOpen(true);
    if (onModalOpen) {
      onModalOpen();
    }
  };

  const onCreateModalClose = () => {
    setCreateModalIsOpen(false);
    if (onModalClose) {
      onModalClose();
    }
  };

  const openRenameModal = () => {
    setRenameModalIsOpen(true);
    if (onModalOpen) {
      onModalOpen();
    }
  };

  const onRenameModalClose = () => {
    setRenameModalIsOpen(false);
    if (onModalClose) {
      onModalClose();
    }
  };

  const openSaveModal = () => {
    setSaveModalIsOpen(true);
    if (onModalOpen) {
      onModalOpen();
    }
  };

  const onSaveModalClose = () => {
    setSaveModalIsOpen(false);
    if (onModalClose) {
      onModalClose();
    }
  };

  return (
    <>
      <StyledDataGridViews>
        {views
          ?.filter((view) => view.pinned)
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((view) => (
            <FlexItem
              key={view.id}
              marg1={scale200}
              marg2={scale400}
              marg3={scale200}
              marg4={scale400}
              height={scale800}
              width="fit-content"
            >
              {isActiveView(view.id) ? (
                <Button kind={ButtonKind.quarternary}>
                  <ParagraphSmall color={primaryB}>{view.name}</ParagraphSmall>
                </Button>
              ) : (
                <Button kind={ButtonKind.tertiary} onClick={() => handleActivateView(view.id)}>
                  <ParagraphSmall>{view.name}</ParagraphSmall>
                </Button>
              )}
            </FlexItem>
          ))}
        <DataGridViewOptions
          translations={translations}
          views={views}
          setEditView={setEditView}
          setDeleteModalIsOpen={openDeleteModal}
          setCreateModalIsOpen={openCreateModal}
          setRenameModalIsOpen={openRenameModal}
          setSaveModalIsOpen={openSaveModal}
          onPinView={onPinView}
          onUnpinView={onUnpinView}
          handleActivateView={handleActivateView}
        />
      </StyledDataGridViews>
      <ConfirmationModal
        title={translations.deleteView!}
        description={translations.deleteViewConfirmation!}
        type={ConfirmationModalType.danger}
        isOpen={deleteModalIsOpen}
        onClose={onDeleteModalClose}
        submitLabel={translations.deleteView!}
        submitOnClick={handleViewDelete}
        cancelLabel={translations.cancel!}
        submitButtonTestId={DELETE_VIEW_SUBMIT_BUTTON_TEST_ID}
      />
      <CreateViewModal
        isOpen={createModalIsOpen}
        onClose={onCreateModalClose}
        handleCreateView={handleCreateView}
        translations={translations}
        gridApi={gridApi}
        gridColumnApi={gridColumnApi}
      />
      {editView && (
        <SaveViewModal
          view={editView}
          isOpen={saveModalIsOpen}
          onClose={onSaveModalClose}
          handleSaveView={handleSaveViewState}
          translations={translations}
          gridApi={gridApi}
          gridColumnApi={gridColumnApi}
        />
      )}
      {editView && (
        <RenameViewModal
          view={editView}
          isOpen={renameModalIsOpen}
          onClose={onRenameModalClose}
          handleRenameView={handleRenameView}
          translations={translations}
        />
      )}
    </>
  );
};

export default DataGridViews;
