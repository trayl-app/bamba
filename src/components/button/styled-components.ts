import styled, { DefaultTheme } from 'styled-components';
import { VARIANT } from './constants';
import { StyledButtonProps, Variant } from './types';
import { Property as CSS } from 'csstype';

/**
 * ==============================
 * Styled components
 * ==============================
 */
export const BaseButton = styled.button<Partial<StyledButtonProps>>(
  ({ theme, $variant }) => ({
    cursor: 'pointer',
    ...getPaddingStyles({ theme }),
    ...getColorStyles({ theme, $variant }),
    ...getBorderRadiusStyles({ theme }),
  })
);

/**
 * ==============================
 * Utility functions
 * ==============================
 */
const getColorStyles = ({
  theme,
  $variant,
}: {
  theme: DefaultTheme;
  $variant?: Variant;
}): ColorStyles => {
  switch ($variant) {
    case VARIANT.SECONDARY:
      return {
        color: theme.colors.buttonSecondaryText,
        backgroundColor: theme.colors.buttonSecondaryFill,
        ':hover': {
          backgroundColor: theme.colors.buttonSecondaryHoverFill,
        },
        ':active': {
          backgroundColor: theme.colors.buttonSecondaryActiveFill,
        },
        ':focus': {
          backgroundColor: theme.colors.buttonSecondaryActiveFill,
        },
      };
    default:
      return Object.freeze({});
  }
};

const getPaddingStyles = ({
  theme,
}: {
  theme: DefaultTheme;
}): PaddingStyles => ({
  paddingLeft: theme.sizing.scale500,
  paddingRight: theme.sizing.scale500,
  paddingTop: theme.sizing.scale100,
  paddingBottom: theme.sizing.scale100,
});

const getBorderRadiusStyles = ({
  theme,
}: {
  theme: DefaultTheme;
}): BorderRadiusStyles => ({
  borderTopLeftRadius: theme.sizing.scale200,
  borderTopRightRadius: theme.sizing.scale200,
  borderBottomLeftRadius: theme.sizing.scale200,
  borderBottomRightRadius: theme.sizing.scale200,
});

/**
 * ==============================
 * Utility types
 * ==============================
 */
interface ColorStyles {
  color?: CSS.Color;
  backgroundColor?: CSS.BackgroundColor;
  ':hover'?: {
    boxShadow?: CSS.BoxShadow;
    backgroundColor?: CSS.BackgroundColor;
  };
  ':active'?: {
    boxShadow?: CSS.BoxShadow;
    backgroundColor?: CSS.BackgroundColor;
  };
  ':focus'?: {
    boxShadow?: CSS.BoxShadow;
    backgroundColor?: CSS.BackgroundColor;
  };
}

interface PaddingStyles {
  paddingLeft?: CSS.PaddingLeft;
  paddingRight?: CSS.PaddingRight;
  paddingTop?: CSS.PaddingTop;
  paddingBottom?: CSS.PaddingBottom;
}

interface BorderRadiusStyles {
  borderTopLeftRadius?: CSS.BorderTopLeftRadius;
  borderTopRightRadius?: CSS.BorderTopRightRadius;
  borderBottomLeftRadius?: CSS.BorderBottomLeftRadius;
  borderBottomRightRadius?: CSS.BorderBottomRightRadius;
}
