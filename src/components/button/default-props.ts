import { VARIANT } from './constants';
import { ButtonProps } from './types';

export const defaultProps: Partial<ButtonProps> = Object.freeze({
  variant: VARIANT.SECONDARY,
  isDisabled: false,
  isLoading: false,
});
