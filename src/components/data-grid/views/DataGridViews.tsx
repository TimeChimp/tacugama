import React, { useEffect, useState } from 'react';
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
import { ConfirmationModalType } from '../../../models';
import { DataGridViewOptions } from './DataGridViewOptions';
import { sortBy, nameOf } from '@timechimp/timechimp-typescript-helpers';

const DELETE_VIEW_SUBMIT_BUTTON_TEST_ID = 'delete-view-confirmation-button';

export const DataGridViews = ({
  translations,
  views,
  selectedView,
  onCreateView,
  onDeleteView,
  onRenameView,
  onPinView,
  onUnpinView,
  onSaveViewState,
  onSelectView,
  gridApi,
  gridColumnApi,
}: DataGridViewsProps) => {
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState<boolean>(false);
  const [createModalIsOpen, setCreateModalIsOpen] = useState<boolean>(false);
  const [saveModalIsOpen, setSaveModalIsOpen] = useState<boolean>(false);
  const [renameModalIsOpen, setRenameModalIsOpen] = useState<boolean>(false);
  const [editView, setEditView] = useState<DataGridView>();
  const [allViews, setAllViews] = useState<DataGridView[]>([]);

  const {
    theme: {
      current: {
        sizing: { scale200, scale400, scale600 },
        colors: { primary, primary100, primaryB, contentPrimary },
      },
    },
  } = useTheme();

  const handleCreateView = async (view: DataGridView) => {
    if (onCreateView) {
      await onCreateView(view);
    }
    return;
  };

  const handleSaveViewState = async (id: string, viewState: string) => {
    if (onSaveViewState) {
      await onSaveViewState(id, viewState);
    }
    return;
  };

  const handleRenameView = async (id: string, name: string) => {
    if (onRenameView) {
      await onRenameView(id, name);
    }
    return;
  };

  const handleViewDelete = async () => {
    if (onDeleteView) {
      await onDeleteView(editView?.id!);
    }
    return;
  };

  const handleSelectView = (view: DataGridView) => {
    if (onSelectView) {
      onSelectView(view);
    }
  };

  const isSelectedView = (id: string | undefined) => {
    return selectedView?.id === id;
  };

  useEffect(() => {
    const allViews = views ? sortBy<DataGridView>(views, [nameOf<DataGridView>('name')]) : [];

    allViews.unshift({
      name: translations.defaultView,
      pinned: true,
    } as DataGridView);

    setAllViews(allViews);
  }, [views, translations, allViews]);

  return (
    <>
      <StyledDataGridViews>
        {allViews
          ?.filter((view) => view.pinned)
          .map((view) => (
            <FlexItem marg1={scale200} marg2={scale400} marg3={scale200} marg4={scale400} width="fit-content">
              <SecondaryButton
                onClick={() => handleSelectView(view)}
                key={view.id}
                size={SIZE.mini}
                startEnhancer={() =>
                  isSelectedView(view.id) ? (
                    <View color={isSelectedView(view.id) ? primary : contentPrimary} size={scale600} />
                  ) : (
                    ''
                  )
                }
                overrides={{
                  BaseButton: {
                    style: {
                      backgroundColor: isSelectedView(view.id) ? primary100 : primaryB,
                      color: isSelectedView(view.id) ? primary : contentPrimary,
                      borderColor: isSelectedView(view.id) ? primary : contentPrimary,
                      borderWidth: '1px',
                      ':hover': {
                        backgroundColor: primaryB,
                      },
                      ':active': {
                        backgroundColor: primaryB,
                      },
                    },
                  },
                }}
              >
                {view.name}
              </SecondaryButton>
            </FlexItem>
          ))}
        <StyledDataGridViewsDivider />
        <DataGridViewOptions
          translations={translations}
          views={allViews}
          setEditView={setEditView}
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
