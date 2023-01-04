import { SHAPE, SIZE, VARIANT } from './constants';
import { ButtonProps } from './types';

export const defaultProps: Partial<ButtonProps> = Object.freeze({
  variant: VARIANT.secondary,
  size: SIZE.default,
  shape: SHAPE.default,
  isDisabled: false,
  isLoading: false,
});
