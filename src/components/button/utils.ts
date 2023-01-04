import { ButtonProps, StyledButtonProps } from './types';

export const getStyledButtonProps = ({
  variant,
  shape,
  size,
  isDisabled,
  isLoading,
}: ButtonProps): Partial<StyledButtonProps> => ({
  $variant: variant,
  $shape: shape,
  $size: size,
  $isDisabled: isDisabled,
  $isLoading: isLoading,
});
