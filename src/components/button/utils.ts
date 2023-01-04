import { ButtonProps, StyledButtonProps } from './types';

export const getStyledButtonProps = ({
  variant,
  isDisabled,
  isLoading,
}: ButtonProps): Partial<StyledButtonProps> => ({
  $variant: variant,
  $isDisabled: isDisabled,
  $isLoading: isLoading,
});
