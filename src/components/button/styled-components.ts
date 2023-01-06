import styled, { DefaultTheme } from 'styled-components';
import { SHAPE, SIZE, VARIANT } from './constants';
import { Shape, Size, StyledButtonProps, Variant } from './types';
import { Property as CSS } from 'csstype';

/**
 * ==============================
 * Styled components
 * ==============================
 */
export const BaseButton = styled.button<Partial<StyledButtonProps>>(
  ({ theme, $variant, $size, $shape }) => ({
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    outline: 'none',
    transition: 'all 0.2s ease-in-out',
    ...getBorderStyles({ theme }),
    ...getPaddingStyles({ theme, $size }),
    ...getColorStyles({ theme, $variant }),
    ...getBorderRadiusStyles({ theme, $shape }),
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
    case VARIANT.secondary:
      return {
        color: theme.colors.buttonSecondaryText,
        backgroundColor: theme.colors.buttonSecondaryFill,
        borderColor: theme.colors.buttonSecondaryBorder,
        ':hover': {
          backgroundColor: theme.colors.buttonSecondaryHoverFill,
          borderColor: theme.colors.buttonSecondaryHoverBorder,
        },
        ':active': {
          backgroundColor: theme.colors.buttonSecondaryActiveFill,
          borderColor: theme.colors.buttonSecondaryActiveBorder,
        },
        ':focus': {
          boxShadow: theme.shadows.focus,
          backgroundColor: theme.colors.buttonSecondaryActiveFill,
          borderColor: theme.colors.buttonSecondaryActiveBorder,
        },
      };
    case VARIANT.tertiary:
      return {
        color: theme.colors.buttonTertiaryText,
        backgroundColor: theme.colors.buttonTertiaryFill,
        borderColor: theme.colors.buttonTertiaryBorder,
        ':hover': {
          backgroundColor: theme.colors.buttonTertiaryHoverFill,
          borderColor: theme.colors.buttonTertiaryHoverBorder,
        },
        ':active': {
          backgroundColor: theme.colors.buttonTertiaryActiveFill,
          borderColor: theme.colors.buttonTertiaryActiveBorder,
        },
        ':focus': {
          boxShadow: theme.shadows.focus,
          backgroundColor: theme.colors.buttonTertiaryActiveFill,
          borderColor: theme.colors.buttonTertiaryActiveBorder,
        },
      };
    default:
      return Object.freeze({});
  }
};

const getPaddingStyles = ({
  theme,
  $size,
}: {
  theme: DefaultTheme;
  $size?: Size;
}): PaddingStyles => {
  switch ($size) {
    case SIZE.mini:
      return {
        paddingLeft: theme.sizing.scale300,
        paddingRight: theme.sizing.scale300,
        paddingTop: theme.sizing.scale0,
        paddingBottom: theme.sizing.scale0,
      };
    case SIZE.compact:
      return {
        paddingLeft: theme.sizing.scale500,
        paddingRight: theme.sizing.scale500,
        paddingTop: theme.sizing.scale100,
        paddingBottom: theme.sizing.scale100,
      };
    case SIZE.large:
      return {
        paddingLeft: theme.sizing.scale700,
        paddingRight: theme.sizing.scale700,
        paddingTop: theme.sizing.scale400,
        paddingBottom: theme.sizing.scale400,
      };
    default:
      return {
        paddingLeft: theme.sizing.scale600,
        paddingRight: theme.sizing.scale600,
        paddingTop: theme.sizing.scale300,
        paddingBottom: theme.sizing.scale300,
      };
  }
};

const getBorderStyles = ({ theme }: { theme: DefaultTheme }) => ({
  borderWidth: theme.borders.border100,
  borderStyle: theme.borders.borderStyle100,
});

const getBorderRadiusStyles = ({
  theme,
  $shape,
}: {
  theme: DefaultTheme;
  $shape?: Shape;
}): BorderRadiusStyles => {
  switch ($shape) {
    case SHAPE.pill:
      return {
        borderTopLeftRadius: theme.sizing.scale1000,
        borderTopRightRadius: theme.sizing.scale1000,
        borderBottomLeftRadius: theme.sizing.scale1000,
        borderBottomRightRadius: theme.sizing.scale1000,
      };
    default:
      return {
        borderTopLeftRadius: theme.sizing.scale200,
        borderTopRightRadius: theme.sizing.scale200,
        borderBottomLeftRadius: theme.sizing.scale200,
        borderBottomRightRadius: theme.sizing.scale200,
      };
  }
};

/**
 * ==============================
 * Utility types
 * ==============================
 */
interface ColorStyles {
  color?: CSS.Color;
  backgroundColor?: CSS.BackgroundColor;
  borderColor?: CSS.BorderColor;
  ':hover'?: {
    boxShadow?: CSS.BoxShadow;
    backgroundColor?: CSS.BackgroundColor;
    borderColor?: CSS.BorderColor;
  };
  ':active'?: {
    boxShadow?: CSS.BoxShadow;
    backgroundColor?: CSS.BackgroundColor;
    borderColor?: CSS.BorderColor;
  };
  ':focus'?: {
    boxShadow?: CSS.BoxShadow;
    backgroundColor?: CSS.BackgroundColor;
    borderColor?: CSS.BorderColor;
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
