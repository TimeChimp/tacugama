import { SnackbarElementProps as BaseSnackbarElementProps } from 'baseui/snackbar';

export enum SnackBarType {
  success = 'success',
  error = 'error',
  warning = 'warning',
  info = 'info',
}

export interface SnackbarProps extends BaseSnackbarElementProps {
  type?: SnackBarType;
  onClose: () => void;
}
