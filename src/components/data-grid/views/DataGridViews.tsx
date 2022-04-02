import React, { useState } from 'react';
import { View } from '../../icons/view/View';
import useTheme from '../../../providers/ThemeProvider';
import { DataGridViewsProps, DataGridView, CreateViewInput } from '../types';
import { StyledDataGridViews, StyledDataGridDivider } from '../styles';
import { SecondaryButton, ActiveButton } from '../../button';
import { SIZE } from 'baseui/button';
import ConfirmationModal from '../../confirmation-modal/ConfirmationModal';
import { CreateViewModal } from './CreateViewModal';
import { FlexItem } from '../../flex-item/FlexItem';
import { SaveViewModal } from './SaveViewModal';
import { RenameViewModal } from './RenameViewModal';
import { ConfirmationModalType } from '../../../models';
import { DataGridViewOptions } from './DataGridViewOptions';

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
        sizing: { scale200, scale400, scale600 },
        colors: { primary },
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
              width="fit-content"
            >
              {isActiveView(view.id) ? (
                <ActiveButton size={SIZE.mini} startEnhancer={() => <View color={primary} size={scale600} />}>
                  {view.name}
                </ActiveButton>
              ) : (
                <SecondaryButton onClick={() => handleActivateView(view.id)} size={SIZE.mini}>
                  {view.name}
                </SecondaryButton>
              )}
            </FlexItem>
          ))}
        <StyledDataGridDivider />
        <DataGridViewOptions
          translations={translations}
          views={views}
          setEditView={setEditView}
          setDeleteModalIsOpen={setDeleteModalIsOpen}
          setCreateModalIsOpen={setCreateModalIsOpen}
          setRenameModalIsOpen={setRenameModalIsOpen}
          setSaveModalIsOpen={setSaveModalIsOpen}
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
      {editView && (
        <SaveViewModal
          view={editView}
          isOpen={saveModalIsOpen}
          setIsOpen={setSaveModalIsOpen}
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
          setIsOpen={setRenameModalIsOpen}
          handleRenameView={handleRenameView}
          translations={translations}
        />
      )}
    </>
  );
};

export default DataGridViews;
