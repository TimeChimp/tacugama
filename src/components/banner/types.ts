export enum BannerType {
  success = 'success',
  error = 'error',
  warning = 'warning',
  info = 'info',
}

export interface BannerProps {
  type?: BannerType;
  text?: string;
  customText?: JSX.Element;
}
