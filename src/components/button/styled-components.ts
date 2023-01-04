import styled, { DefaultTheme } from 'styled-components';
import { SIZE, VARIANT } from './constants';
import { Size, StyledButtonProps, Variant } from './types';
import { Property as CSS } from 'csstype';

/**
 * ==============================
 * Styled components
 * ==============================
 */
export const BaseButton = styled.button<Partial<StyledButtonProps>>(
  ({ theme, $variant, $size }) => ({
    cursor: 'pointer',
    ...getBorderStyles({ theme }),
    ...getPaddingStyles({ theme, $size }),
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
    case VARIANT.secondary:
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
