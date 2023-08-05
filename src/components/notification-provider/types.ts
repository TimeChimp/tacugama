import { SnackBarType } from '../snackbar';

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
  sendNotification: (type: SnackBarType, title: string) => void;
}

export interface NotificationContainerProps {
  notifications: Notification[];
  removeNotification: (id: number) => void;
}
