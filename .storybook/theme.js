import { create } from '@storybook/theming/create';
import logo from '../logo.svg';

export default create({
  base: 'light',

  colorPrimary: '#10c7a2',
  colorSecondary: '#6559d2',

  brandTitle: 'TimeChimp',
  brandUrl: 'https://timechimp.com',
  brandImage: logo,
});
