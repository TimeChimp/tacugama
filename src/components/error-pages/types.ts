export interface ErrorPageProps {
  title: string;
  description: string;
  primaryButtonText: string;
  secondaryButtonText?: string;
  onPrimaryButtonClick: () => void;
  onSecondaryButtonClick?: () => void;
}
