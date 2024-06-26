import React, { useRef } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { InputProps } from './types';
import { Input } from './Input';
import { ColorInput, ColorInputProps } from './color-input';
import { PriceInput, PriceInputProps } from './price-input';
import { HoursInput, HoursInputProps } from './hours-input';
import { FileInput, FileInputProps } from './file-input';
import { NumberInput, NumberInputProps } from './number-input';
import { PercentageInput, PercentageInputProps } from './percentage-input';
import { ATTACHMENTS_IMAGES_TYPE_ACCEPT, ButtonKind, PRICE_INPUT_PREFIX } from '../../models';
import { SearchInput, SearchInputProps } from './search-input';
import { Button } from '../button';
import { MagnifyingGlass, Plus } from '@phosphor-icons/react';

export default {
  title: 'Components/Input',
  component: Input,
} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;

const SearchTemplate: Story<SearchInputProps> = (args) => <SearchInput {...args} />;

const ColorTemplate: Story<ColorInputProps> = (args) => <ColorInput {...args} />;

const NumberTemplate: Story<NumberInputProps> = (args) => <NumberInput {...args} />;

const PriceTemplate: Story<PriceInputProps> = (args) => <PriceInput {...args} />;

const HoursTemplate: Story<HoursInputProps> = (args) => <HoursInput {...args} />;

const PercentageTemplate: Story<PercentageInputProps> = (args) => <PercentageInput {...args} />;

const FileTemplate: Story<FileInputProps> = () => {
  const inputRef = useRef<any>(null);
  const title = 'Download';

  const handleFileChange = (e: React.FormEvent<HTMLInputElement>) => {
    const file = (e.target as HTMLInputElement).files && (e.target as HTMLInputElement)?.files?.[0];
    if (!file) {
      return;
    }
  };

  const handleClick = () => {
    inputRef?.current?.click();
  };

  return (
    <>
      <Button kind={ButtonKind.secondary} onClick={handleClick} startEnhancer={<Plus />}>
        {title}
      </Button>
      <FileInput inputRef={inputRef} onChange={handleFileChange} accept={ATTACHMENTS_IMAGES_TYPE_ACCEPT} />
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  placeholder: 'placeholder',
  testId: 'test-input',
  error: false,
  success: false,
  disabled: false,
  value: '',
  startEnhancer: '',
  endEnhancer: '',
};
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/QrIqXt997mm9ePey5JCLAJ/DS-1.0?node-id=2434%3A25687&t=CngHCgPvvPNqKbFU-4',
  },
};

export const Search = SearchTemplate.bind({});
Search.args = {
  placeholder: 'Search ...',
  testId: 'test-input',
  error: false,
  success: false,
  disabled: false,
  value: '',
  endEnhancer: '',
};
Search.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/QrIqXt997mm9ePey5JCLAJ/DS-1.0?node-id=2434%3A25687&t=CngHCgPvvPNqKbFU-4',
  },
};

export const WithStartEnhancer = Template.bind({});
WithStartEnhancer.args = {
  placeholder: 'placeholder',
  startEnhancer: <MagnifyingGlass size="18px" />,
  error: false,
  success: false,
  disabled: false,
  value: '',
  endEnhancer: '',
};
WithStartEnhancer.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/QrIqXt997mm9ePey5JCLAJ/DS-1.0?node-id=2434%3A27286&t=N57j8nqiSc9cqSnt-4',
  },
};

export const WithEndEnhancer = Template.bind({});
WithEndEnhancer.args = {
  placeholder: 'placeholder',
  endEnhancer: <MagnifyingGlass size="18px" />,
  error: false,
  success: false,
  disabled: false,
  value: '',
  startEnhancer: '',
};
WithEndEnhancer.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/QrIqXt997mm9ePey5JCLAJ/DS-1.0?node-id=2434%3A27384&t=N57j8nqiSc9cqSnt-4',
  },
};

export const Password = Template.bind({});
Password.args = {
  type: 'password',
};
Password.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/QrIqXt997mm9ePey5JCLAJ/DS-1.0?node-id=2434%3A28390&t=N57j8nqiSc9cqSnt-4',
  },
};

export const Color = ColorTemplate.bind({});
Color.args = {
  onChange: (color: string) => console.log(color),
  testId: 'test-input',
  error: false,
  success: false,
  disabled: false,
};
Color.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/QrIqXt997mm9ePey5JCLAJ/DS-1.0?node-id=2434%3A28377&t=N57j8nqiSc9cqSnt-4',
  },
};

export const Number = NumberTemplate.bind({});
Number.args = {
  testId: 'test-input',
  error: false,
  disabled: false,
  value: '',
};
Number.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/QrIqXt997mm9ePey5JCLAJ/DS-1.0?node-id=2434%3A28351&t=N57j8nqiSc9cqSnt-4',
  },
};

export const Price = PriceTemplate.bind({});
Price.args = {
  testId: 'test-input',
  error: false,
  disabled: false,
  value: '',
  prefix: PRICE_INPUT_PREFIX,
};
Price.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/QrIqXt997mm9ePey5JCLAJ/DS-1.0?node-id=2434%3A28216&t=N57j8nqiSc9cqSnt-4',
  },
};

export const Hours = HoursTemplate.bind({});
Hours.args = {
  defaultValue: undefined,
  timeFormat: 'HH:mm',
  disabled: false,
};
Hours.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/QrIqXt997mm9ePey5JCLAJ/DS-1.0?node-id=2434%3A28364&t=N57j8nqiSc9cqSnt-4',
  },
};

export const NoBorderSearch = Template.bind({});
NoBorderSearch.args = {
  noBorder: true,
  startEnhancer: <MagnifyingGlass size="18px" />,
  placeholder: 'Type to search',
  disabled: false,
};
NoBorderSearch.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/QrIqXt997mm9ePey5JCLAJ/DS-1.0?node-id=2434%3A28364&t=N57j8nqiSc9cqSnt-4',
  },
};

export const File = FileTemplate.bind({});

export const Percentage = PercentageTemplate.bind({});
