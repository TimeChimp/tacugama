import React, { FunctionComponent, useState, createContext } from 'react';
import { NotificationContextProps, NotificationProviderProps, Notification } from './types';
import { SnackBarType } from '../snackbar';

const NOTIFICATION_DURATION = 8000;

const defaultNotificationContextProps: NotificationContextProps = {
  notifications: [],
  newNotification: () => null,
  removeNotification: () => null,
};

export const NotificationContext = createContext(defaultNotificationContextProps);

export const NotificationProvider: FunctionComponent<NotificationProviderProps> = ({
  children,
  isInIframe,
  sendNotification,
}: NotificationProviderProps) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [notificationId, setNotificationId] = useState<number>(0);

  const removeNotification = (id: number) =>
    setNotifications((oldNotifications) => oldNotifications.filter((notification) => notification.id !== id));

  const newNotification = async (type: SnackBarType, message: string) => {
    if (isInIframe) {
      sendNotification({ type, title: message });
      return;
    }
    const id = notificationId + 1;

    const notification: Notification = {
      id,
      type,
      message,
    };

    setNotificationId(id);
    setNotifications((oldNotifications) => [...oldNotifications, notification]);

    setTimeout(() => {
      removeNotification(notification.id);
    }, NOTIFICATION_DURATION);
  };

  return (
    <NotificationContext.Provider value={{ notifications, newNotification, removeNotification }}>
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationProvider;
