import { SupportedLocale } from '@timechimp/timechimp-typescript-helpers';
import { DatepickerRangeTranslations } from '../datepicker';
import { SingleSelectOption as Option } from '../select';
import { QuickSelectDateOption } from '../../models';

interface QuickSelectOptionCustom {
  id: QuickSelectDateOption.CUSTOM;
  label: string;
}

interface QuickSelectOptionPredefined {
  id: Exclude<QuickSelectDateOption, QuickSelectDateOption.CUSTOM>;
  label: string;
  beginDate: Date;
  endDate: Date;
}

export type QuickSelectOption = QuickSelectOptionCustom | QuickSelectOptionPredefined;

export interface DateFilterProps {
  locale: SupportedLocale;
  translations?: DatepickerRangeTranslations;
  onChange: (date: [Date, Date]) => void;
  dateFormat: string;
  defaultQuickSelect?: Exclude<QuickSelectDateOption, QuickSelectDateOption.CUSTOM>;
  dates?: Date[];
}
