import * as React from 'react';
import { VARIANT } from './constants';

export type Variant = typeof VARIANT[keyof typeof VARIANT];

export interface ButtonProps {
  children?: React.ReactNode;
  variant?: Variant;
  isDisabled?: boolean;
  isLoading?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (event: React.SyntheticEvent<HTMLButtonElement>) => void;
}

export interface StyledButtonProps {
  $variant: Variant;
  $isDisabled: boolean;
  $isLoading: boolean;
}
