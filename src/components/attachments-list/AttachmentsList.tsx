import React from 'react';
import { ParagraphSmall, ParagraphXSmall } from 'baseui/typography';
import { Box } from '../box';
import { Button } from '../button';
import { FlexGrid, FlexGridItem } from '../flex-grid';
import { Download, Attachment as PaperClip, Trash } from '../icons';
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
                <PaperClip />
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
            <FlexGridItem display="flex" justifyContent="flex-end" gridGap={scale600} paddingRight={scale300}>
              <Button
                kind="minimal"
                isTransparent
                onClick={() => onDownload(attachment.id as string, attachment.customFileName as string)}
              >
                <Download size={scale500} />
              </Button>
              <Button kind="minimal" isTransparent onClick={() => onDelete(attachment.id as string)}>
                <Trash size={scale500} color={dark0} />
              </Button>
            </FlexGridItem>
          </FlexGrid>
          <Separator />
        </>
      ))}
    </Box>
  );
};
