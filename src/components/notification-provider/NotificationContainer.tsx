import React from 'react';
import { NotificationContainerProps } from './types';
import { useTheme } from '../../providers';
import { Block } from '../block';
import { Snackbar } from '../snackbar';

export const NotificationContainer = ({ notifications, removeNotification }: NotificationContainerProps) => {
  const onClose = (id: number) => {
    removeNotification(id);
  };

  const {
    theme: {
      current: {
        sizing: { scale800, scale600 },
      },
    },
  } = useTheme();

  return (
    <Block position="fixed" display="flex" flexDirection="column" right={scale800} bottom={scale600}>
      <Block display="flex" flexDirection="column" data-test-id="notification-container">
        {notifications.map((notification) => (
          <Snackbar
            key={notification.id}
            type={notification.type}
            onClose={() => onClose(notification.id)}
            message={notification.message}
          />
        ))}
      </Block>
    </Block>
  );
};
