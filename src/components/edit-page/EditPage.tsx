import React from 'react';
import { ButtonBox } from './styles';
import { EditPageProps } from './types';
import { EditPageSkeleton } from './EditPageSkeleton';
import { useTheme } from '../../providers';
import { FlexItem } from '../flex-item';
import { HeadingSmall } from '../typography';
import { Button } from '../button';
import { ButtonKind } from '../../models';
import { EditPageContent } from './EditPageContent';
import { CaretLeft } from '@phosphor-icons/react';

export const EditPage = ({
  sideNavItems,
  title,
  selectedTab,
  selectedSubTab,
  loading,
  updating,
  isSaveDisabled,
  saveText,
  backText,
  cancelText,
  onCancel,
}: EditPageProps) => {
  const {
    theme: {
      current: {
        sizing: { scale500 },
      },
    },
  } = useTheme();

  const onCancelClick = () => {
    if (onCancel) {
      onCancel();
    }
  };

  if (loading) {
    return <EditPageSkeleton numberOfSideNavItems={sideNavItems.length} />;
  }

  return (
    <>
      <FlexItem justifyContent="space-between" marg1="0" marg2="0" marg3={scale500} marg4="0" flexWrap="nowrap">
        <HeadingSmall whiteSpace="nowrap" textOverflow="ellipsis" overflow="hidden">
          {title}
        </HeadingSmall>
        <ButtonBox>
          {saveText ? (
            <>
              <Button kind={ButtonKind.secondary} onClick={onCancelClick}>
                {cancelText}
              </Button>
              <Button isLoading={updating} disabled={isSaveDisabled} type="submit">
                {saveText}
              </Button>
            </>
          ) : (
            <Button kind={ButtonKind.secondary} onClick={onCancelClick} startEnhancer={<CaretLeft />}>
              {backText}
            </Button>
          )}
        </ButtonBox>
      </FlexItem>
      <EditPageContent sideNavItems={sideNavItems} selectedTab={selectedTab} selectedSubTab={selectedSubTab} />
    </>
  );
};

export default EditPage;
