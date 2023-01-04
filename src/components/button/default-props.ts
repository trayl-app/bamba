import { VARIANT } from './constants';
import { ButtonProps } from './types';

export const defaultProps: Partial<ButtonProps> = {
  variant: VARIANT.PRIMARY,
  isDisabled: false,
  isLoading: false,
};
