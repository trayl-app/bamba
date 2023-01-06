import { Property as CSS } from 'csstype';
import { ColorTokens as FoundationColorTokens } from '../tokens';

export interface ColorTokens {
  // Monochrome Palette
  white: string;
  black: string;
  mono100: string;
  mono200: string;
  mono300: string;
  mono400: string;
  mono500: string;
  mono600: string;
  mono700: string;
  mono800: string;
  mono900: string;
  mono1000: string;
  // Primary Palette
  primary50: string;
  primary100: string;
  primary200: string;
  primary300: string;
  primary400: string;
  primary500: string;
  primary600: string;
  primary700: string;
  primary800: string;
  primary900: string;
}

export interface CoreSemanticColorTokens {
  backgroundPrimary: CSS.BackgroundColor;
}

export type SemanticColorTokens = {} & CoreSemanticColorTokens;

export interface ComponentColorTokens {
  // Button
  // Secondary
  buttonSecondaryFill: CSS.BackgroundColor;
  buttonSecondaryText: CSS.Color;
  buttonSecondaryBorder: CSS.BorderColor;
  buttonSecondaryHoverFill: CSS.BackgroundColor;
  buttonSecondaryHoverText: CSS.Color;
  buttonSecondaryHoverBorder: CSS.BorderColor;
  buttonSecondaryActiveFill: CSS.BackgroundColor;
  buttonSecondaryActiveText: CSS.Color;
  buttonSecondaryActiveBorder: CSS.BorderColor;
  buttonSecondarySelectedFill: CSS.BackgroundColor;
  buttonSecondarySelectedText: CSS.Color;
  buttonSecondarySelectedBorder: CSS.BorderColor;
  buttonSecondaryDisabledFill: CSS.BackgroundColor;
  buttonSecondaryDisabledText: CSS.Color;
  buttonSecondaryDisabledBorder: CSS.BorderColor;
  // Tertiary
  buttonTertiaryFill: CSS.BackgroundColor;
  buttonTertiaryText: CSS.Color;
  buttonTertiaryBorder: CSS.BorderColor;
  buttonTertiaryHoverFill: CSS.BackgroundColor;
  buttonTertiaryHoverText: CSS.Color;
  buttonTertiaryHoverBorder: CSS.BorderColor;
  buttonTertiaryActiveFill: CSS.BackgroundColor;
  buttonTertiaryActiveText: CSS.Color;
  buttonTertiaryActiveBorder: CSS.BorderColor;
  buttonTertiarySelectedFill: CSS.BackgroundColor;
  buttonTertiarySelectedText: CSS.Color;
  buttonTertiarySelectedBorder: CSS.BorderColor;
  buttonTertiaryDisabledFill: CSS.BackgroundColor;
  buttonTertiaryDisabledText: CSS.Color;
  buttonTertiaryDisabledBorder: CSS.BorderColor;
}

export interface Breakpoints {
  xSmall: number;
  small: number;
  medium: number;
  large: number;
  xLarge: number;
}

export type MediaQueries = {
  [key in keyof Breakpoints]: string;
};

export type Colors = {} & ColorTokens &
  FoundationColorTokens &
  SemanticColorTokens &
  ComponentColorTokens;

export interface FontTokens {
  fontFamily: CSS.FontFamily;
}

export interface Font {
  fontFamily: CSS.FontFamily;
  fontWeight: CSS.FontWeight;
  fontSize: CSS.FontSize;
  lineHeight: CSS.LineHeight;
}

export interface Typography {
  font100: Font;
  font150: Font;
  font200: Font;
  font250: Font;
  font300: Font;
  font350: Font;
  font400: Font;
  ParagraphXSmall: Font;
}

export interface Sizing {
  scale0: string;
  scale100: string;
  scale200: string;
  scale300: string;
  scale400: string;
  scale500: string;
  scale550: string;
  scale600: string;
  scale650: string;
  scale700: string;
  scale750: string;
  scale800: string;
  scale850: string;
  scale900: string;
  scale950: string;
  scale1000: string;
  scale1200: string;
  scale1400: string;
  scale1600: string;
  scale2400: string;
  scale3200: string;
  scale4800: string;
}

export interface Borders {
  // Widths
  border50: CSS.BorderWidth;
  border100: CSS.BorderWidth;
  border150: CSS.BorderWidth;
  border200: CSS.BorderWidth;
  border300: CSS.BorderWidth;
  border400: CSS.BorderWidth;
  border500: CSS.BorderWidth;
  // Styles
  borderStyle100: CSS.BorderStyle;
  borderStyle200: CSS.BorderStyle;
  // Radii
  borderRadius100: CSS.BorderRadius;
  borderRadius200: CSS.BorderRadius;
  borderRadius300: CSS.BorderRadius;
  borderRadius400: CSS.BorderRadius;
  borderRadiusCircle: CSS.BorderRadius;
}

export interface Shadows {
  shadow100: CSS.BoxShadow;
  shadow200: CSS.BoxShadow;
  shadow300: CSS.BoxShadow;
  shadow400: CSS.BoxShadow;
  shadow500: CSS.BoxShadow;
  insetShadow100: CSS.BoxShadow;
  insetShadow200: CSS.BoxShadow;
  insetShadow300: CSS.BoxShadow;
  insetShadow400: CSS.BoxShadow;
  insetShadow500: CSS.BoxShadow;
  highlight: CSS.BoxShadow;
  focus: CSS.BoxShadow;
}

export interface Theme {
  name: string;
  colors: Colors;
  breakpoints: Breakpoints;
  mediaQueries: MediaQueries;
  typography: Typography;
  sizing: Sizing;
  borders: Borders;
  shadows: Shadows;
}
