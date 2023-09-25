export interface CopyTextProps {
  value: string;
  copyTextHandler: (value: string) => void;
  copiedText?: string;
  backgroundColor?: string;
  buttonText: string;
}
