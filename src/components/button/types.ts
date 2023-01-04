import * as React from 'react';
import { SHAPE, SIZE, VARIANT } from './constants';

export type Variant = typeof VARIANT[keyof typeof VARIANT];
export type Size = typeof SIZE[keyof typeof SIZE];
export type Shape = typeof SHAPE[keyof typeof SHAPE];

export interface ButtonProps {
  children?: React.ReactNode;
  variant?: Variant;
  size?: Size;
  shape?: Shape;
  isDisabled?: boolean;
  isLoading?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (event: React.SyntheticEvent<HTMLButtonElement>) => void;
}

export interface StyledButtonProps {
  $variant: Variant;
  $size: Size;
  $shape: Shape;
  $isDisabled: boolean;
  $isLoading: boolean;
}
