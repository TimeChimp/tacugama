import React from 'react';
import { ParagraphSmall, ParagraphXSmall } from 'baseui/typography';
import { Box } from '../../components/box';
import { TertiaryButton } from '../../components/button';
import { FlexGrid, FlexGridItem } from '../../components/flex-grid';
import { Download, FileAttachment, Trash } from '../../components/icons';
import { Separator } from '../../components/separator';
import { useTheme } from '../../providers/ThemeProvider';
import bytes from 'bytes';
import { TcDate } from '@timechimp/timechimp-typescript-helpers';

interface Attachment {
  id?: string;
  clientId?: string;
  fileName?: string;
  customFileName?: string;
  uploadedOn?: string;
  fileSize?: number;
}

export interface AttachementsListProps {
  attachments: Attachment[];
  onDownload: (id: string, customFileName: string) => void;
  onDelete: (id: string) => void;
}

export const AttachmentsList = ({ attachments, onDownload, onDelete }: AttachementsListProps) => {
  const {
    theme: {
      current: {
        sizing: { scale300, scale500, scale600 },
        customColors: { dark4, light0, dark0 },
      },
    },
  } = useTheme();

  return (
    <Box noBorder>
      <Separator />
      {attachments.map((attachment: Attachment) => (
        <>
          <FlexGrid
            flexGridColumnCount={2}
            alignItems="center"
            overrides={{
              Block: {
                style: {
                  flexWrap: 'nowrap',
                },
              },
            }}
          >
            <FlexGridItem
              justifyContent="flex-start"
              overrides={{
                Block: {
                  style: {
                    minWidth: '90%',
                  },
                },
              }}
            >
              <FlexGrid alignItems="center">
                <FileAttachment />
                <ParagraphSmall alignSelf="center" marginLeft={scale600} marginRight={scale300}>
                  {attachment.customFileName}
                </ParagraphSmall>
                <ParagraphXSmall alignItems="center" marginRight={scale300} color={dark4}>
                  {`${new TcDate(attachment.uploadedOn).format('d MMM y').toLowerCase()} at ${new TcDate(
                    attachment.uploadedOn,
                  ).format('hh:mm')}`}
                </ParagraphXSmall>
                <ParagraphXSmall color={light0}>{bytes(attachment.fileSize as number)}</ParagraphXSmall>
              </FlexGrid>
            </FlexGridItem>
            <FlexGridItem display="flex" justifyContent="flex-end">
              <TertiaryButton
                size="mini"
                onClick={() => onDownload(attachment.id as string, attachment.customFileName as string)}
              >
                <Download size={scale500} />
              </TertiaryButton>
              <TertiaryButton size="mini" onClick={() => onDelete(attachment.id as string)}>
                <Trash size={scale500} color={dark0} />
              </TertiaryButton>
            </FlexGridItem>
          </FlexGrid>
          <Separator />
        </>
      ))}
    </Box>
  );
};
