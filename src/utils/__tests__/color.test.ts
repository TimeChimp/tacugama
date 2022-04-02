import { ButtonType } from '../../models';
import {
  getButtonBackgroundColor,
  getButtonBackgroundHoverColor,
  getInputBorderColor,
  getInputContainerColors,
  getInputPlaceholderTextColor,
} from '../color';

describe('utils/colors', () => {
  describe('getInputContainerColors', () => {
    const colors = {
      contentPrimary: 'contentPrimary',
      backgroundPrimary: 'backgroundPrimary',
      inputFillError: 'inputFillError',
      contentStateDisabled: 'contentStateDisabled',
    };

    it('should get normal colors', () => {
      const inputColors = getInputContainerColors(colors as any);

      expect(inputColors.backgroundColor).toBe(colors.backgroundPrimary);
      expect(inputColors.color).toBe(colors.contentPrimary);
    });

    it('should get error colors', () => {
      const inputColors = getInputContainerColors(colors as any, true, true);

      expect(inputColors.backgroundColor).toBe(colors.inputFillError);
      expect(inputColors.color).toBe(colors.contentPrimary);
    });

    it('should get disabled colors', () => {
      const inputColors = getInputContainerColors(colors as any, false, true);

      expect(inputColors.backgroundColor).toBe(colors.backgroundPrimary);
      expect(inputColors.color).toBe(colors.contentStateDisabled);
    });
  });

  describe('getInputBorderColor', () => {
    const colors = { borderError: 'borderError', primary: 'primary' };
    const borders = { border300: { borderColor: 'borderColor' } };

    it('should get a normal color', () => {
      const inputBorderColor = getInputBorderColor(false, false, colors as any, borders as any);

      expect(inputBorderColor).toBe(borders.border300.borderColor);
    });

    it('should get a focused color', () => {
      const inputBorderColor = getInputBorderColor(false, true, colors as any, borders as any);

      expect(inputBorderColor).toBe(colors.primary);
    });

    it('should get an error color', () => {
      const inputBorderColor = getInputBorderColor(true, true, colors as any, borders as any);

      expect(inputBorderColor).toBe(colors.borderError);
    });
  });

  describe('getInputPlaceholderTextColor', () => {
    const colors = {
      contentSecondary: 'contentSecondary',
      contentTertiary: 'contentTertiary',
      contentStateDisabled: 'contentStateDisabled',
    };

    it('should get a normal color', () => {
      const inputBorderColor = getInputPlaceholderTextColor(false, false, colors as any);

      expect(inputBorderColor).toBe(colors.contentTertiary);
    });

    it('should get a focused color', () => {
      const inputBorderColor = getInputPlaceholderTextColor(false, true, colors as any);

      expect(inputBorderColor).toBe(colors.contentSecondary);
    });

    it('should get a disabled color', () => {
      const inputBorderColor = getInputPlaceholderTextColor(true, false, colors as any);

      expect(inputBorderColor).toBe(colors.contentStateDisabled);
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
