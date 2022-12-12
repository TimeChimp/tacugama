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
  backgroundPrimary: 'backgroundPrimary',
  inputFillError: 'inputFillError',
  contentStateDisabled: 'contentStateDisabled',
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

      expect(inputBorderColor).toBe(CUSTOM_COLORS.purple2);
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

      expect(inputBorderColor).toBe(CUSTOM_COLORS.purple2);
    });
  });

  describe('getInputBackgroundColor', () => {
    it('should get a default color', () => {
      const inputBorderColor = getInputBackgroundColor({
        disabled: false,
        customColors: CUSTOM_COLORS,
        colors: COLORS,
      });

      expect(inputBorderColor).toBe(COLORS.backgroundPrimary);
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
    const colors = {
      primary400: 'primary400',
      primary600: 'primary600',
      backgroundPositive: 'backgroundPositive',
    };

    it('should get a default color', () => {
      const buttonBackgroundColor = getButtonBackgroundColor(ButtonType.default, colors as any);

      expect(buttonBackgroundColor).toBe(colors.primary400);
    });

    it('should get a success color', () => {
      const buttonBackgroundColor = getButtonBackgroundColor(ButtonType.success, colors as any);

      expect(buttonBackgroundColor).toBe(colors.backgroundPositive);
    });

    it('should get an error color', () => {
      const buttonBackgroundColor = getButtonBackgroundColor(ButtonType.error, colors as any);

      expect(buttonBackgroundColor).toBe('#FF5C5C');
    });
  });

  describe('getButtonBackgroundHoverColor', () => {
    const colors = {
      primary600: 'primary600',
    };
    it('should get a default color', () => {
      const buttonBackgroundColor = getButtonBackgroundHoverColor(ButtonType.default, colors as any);

      expect(buttonBackgroundColor).toBe(colors.primary600);
    });

    it('should get a success color', () => {
      const buttonBackgroundColor = getButtonBackgroundHoverColor(ButtonType.success, colors as any);

      expect(buttonBackgroundColor).toBe('#06C270');
    });

    it('should get an error color', () => {
      const buttonBackgroundColor = getButtonBackgroundHoverColor(ButtonType.error, colors as any);

      expect(buttonBackgroundColor).toBe('#FF3B3B');
    });
  });
});
