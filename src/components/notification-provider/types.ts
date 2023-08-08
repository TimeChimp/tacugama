import { SnackBarType } from '../snackbar';

export enum NotificationType {
  Success = 'success',
  Error = 'error',
  Info = 'info',
  Warning = 'warning',
}

export interface Notification {
  id: number;
  message: string;
  type: SnackBarType;
}

export interface NotificationContextProps {
  notifications: Notification[];
  newNotification: (type: SnackBarType, message: string) => void;
  removeNotification: (id: number) => void;
}

export interface NotificationProviderProps {
  children: React.ReactNode;
  isInIframe: boolean;
  sendNotification: ({
    message,
    type,
    title,
  }: {
    type: NotificationType | SnackBarType;
    message?: string;
    title: string;
  }) => void;
}
