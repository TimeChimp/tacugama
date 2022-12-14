import React from 'react';
import { ParagraphSmall, ParagraphXSmall } from 'baseui/typography';
import { Box } from '../box';
import { TertiaryButton } from '../button';
import { FlexGrid, FlexGridItem } from '../flex-grid';
import { AttachmentIcon } from '../icons/attachment';
import { DownloadIcon } from '../icons/download';
import { DeleteIcon } from '../icons/delete';
import { Separator } from '../separator';
import { useTheme } from '../../providers';
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
                <AttachmentIcon />
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
                <DownloadIcon />
              </TertiaryButton>
              <TertiaryButton size="mini" onClick={() => onDelete(attachment.id as string)}>
                <DeleteIcon color={dark0} />
              </TertiaryButton>
            </FlexGridItem>
          </FlexGrid>
          <Separator />
        </>
      ))}
    </Box>
  );
};
