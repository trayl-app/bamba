import { Property as CSS } from 'csstype';

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
}

export interface CoreSemanticColorTokens {
  backgroundPrimary: CSS.BackgroundColor;
}

export type SemanticColorTokens = {} & CoreSemanticColorTokens;

export interface ComponentColorTokens {
  // Button
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

export interface Theme {
  name: string;
  colors: Colors;
  breakpoints: Breakpoints;
  mediaQueries: MediaQueries;
  typography: Typography;
  sizing: Sizing;
  borders: Borders;
}
