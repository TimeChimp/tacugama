import { ButtonType } from '../../models';
import {
  getButtonBackgroundColor,
  getButtonBackgroundHoverColor,
  getInputBackgroundColor,
  getInputBorderColor,
  getInputTextColor,
} from '../color';

const COLORS: any = {
  contentPrimary: 'contentPrimary',
  primaryB: 'primaryB',
  inputFillError: 'inputFillError',
  contentStateDisabled: 'contentStateDisabled',
  primary: 'primary',
  primary600: 'primary600',
};

const CUSTOM_COLORS: any = {
  dark1: 'dark1',
  dark4: 'dark4',
};

describe('utils/colors', () => {
  describe('getInputTextColor', () => {
    it('should get a default', () => {
      const textColor = getInputTextColor({
        isFocused: false,
        hasValue: false,
        customColors: CUSTOM_COLORS,
        colors: COLORS,
      });

      expect(textColor).toBe(CUSTOM_COLORS.dark4);
    });

    it('should get active colors', () => {
      const textColor = getInputTextColor({
        isFocused: true,
        hasValue: true,
        customColors: CUSTOM_COLORS,
        colors: COLORS,
      });

      expect(textColor).toBe(CUSTOM_COLORS.dark1);
    });
  });

  describe('getInputBorderColor', () => {
    it('should get a default color', () => {
      const inputBorderColor = getInputBorderColor({
        error: false,
        success: false,
        disabled: false,
        isFocused: false,
        hover: false,
        customColors: CUSTOM_COLORS,
        colors: COLORS,
      });

      expect(inputBorderColor).toBe(CUSTOM_COLORS.light2);
    });

    it('should get a disabled color', () => {
      const inputBorderColor = getInputBorderColor({
        error: false,
        success: false,
        disabled: true,
        isFocused: false,
        hover: false,
        customColors: CUSTOM_COLORS,
        colors: COLORS,
      });

      expect(inputBorderColor).toBe(CUSTOM_COLORS.light2);
    });

    it('should get an error color', () => {
      const inputBorderColor = getInputBorderColor({
        error: true,
        success: false,
        disabled: false,
        isFocused: false,
        hover: false,
        customColors: CUSTOM_COLORS,
        colors: COLORS,
      });

      expect(inputBorderColor).toBe(CUSTOM_COLORS.red0);
    });

    it('should get a success color', () => {
      const inputBorderColor = getInputBorderColor({
        error: false,
        success: true,
        disabled: false,
        isFocused: false,
        hover: false,
        customColors: CUSTOM_COLORS,
        colors: COLORS,
      });

      expect(inputBorderColor).toBe(CUSTOM_COLORS.green0);
    });

    it('should get a focused color', () => {
      const inputBorderColor = getInputBorderColor({
        error: false,
        success: false,
        disabled: false,
        isFocused: true,
        hover: false,
        customColors: CUSTOM_COLORS,
        colors: COLORS,
      });

      expect(inputBorderColor).toBe(COLORS.primary);
    });

    it('should get a hover color', () => {
      const inputBorderColor = getInputBorderColor({
        error: false,
        success: false,
        disabled: false,
        isFocused: false,
        hover: true,
        customColors: CUSTOM_COLORS,
        colors: COLORS,
      });

      expect(inputBorderColor).toBe(COLORS.primary);
    });
  });

  describe('getInputBackgroundColor', () => {
    it('should get a default color', () => {
      const inputBorderColor = getInputBackgroundColor({
        disabled: false,
        customColors: CUSTOM_COLORS,
        colors: COLORS,
      });

      expect(inputBorderColor).toBe(COLORS.primaryB);
    });

    it('should get a disabled color', () => {
      const inputBorderColor = getInputBackgroundColor({
        disabled: true,
        customColors: CUSTOM_COLORS,
        colors: COLORS,
      });

      expect(inputBorderColor).toBe(CUSTOM_COLORS.light3);
    });
  });

  describe('getButtonBackgroundColor', () => {
    const customColors = {
      purple2: 'purple2',
      green1: 'green1',
      red2: 'red2',
      red0: 'red0',
    };

    it('should get a default color', () => {
      const buttonBackgroundColor = getButtonBackgroundColor(ButtonType.default, customColors as any, COLORS);

      expect(buttonBackgroundColor).toBe(COLORS.primary);
    });

    it('should get a success color', () => {
      const buttonBackgroundColor = getButtonBackgroundColor(ButtonType.success, customColors as any, COLORS);

      expect(buttonBackgroundColor).toBe(customColors.green1);
    });

    it('should get an error color', () => {
      const buttonBackgroundColor = getButtonBackgroundColor(ButtonType.error, customColors as any, COLORS);

      expect(buttonBackgroundColor).toBe(customColors.red0);
    });
  });

  describe('getButtonBackgroundHoverColor', () => {
    it('should get a default color', () => {
      const buttonBackgroundColor = getButtonBackgroundHoverColor(ButtonType.default, COLORS as any);

      expect(buttonBackgroundColor).toBe(COLORS.primary);
    });

    it('should get a success color', () => {
      const buttonBackgroundColor = getButtonBackgroundHoverColor(ButtonType.success, COLORS as any);

      expect(buttonBackgroundColor).toBe('#06C270');
    });

    it('should get an error color', () => {
      const buttonBackgroundColor = getButtonBackgroundHoverColor(ButtonType.error, COLORS as any);

      expect(buttonBackgroundColor).toBe('#BF2828');
    });
  });
});
