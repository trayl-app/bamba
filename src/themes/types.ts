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
  // Accent Palette
  accent: string;
  accent50: string;
  accent100: string;
  accent200: string;
  accent300: string;
  accent400: string;
  accent500: string;
  accent600: string;
  accent700: string;
  // Alert Palette
  negative: string;
  negative50: string;
  negative100: string;
  negative200: string;
  negative300: string;
  negative400: string;
  negative500: string;
  negative600: string;
  negative700: string;
  // Warning Palette
  warning: string;
  warning50: string;
  warning100: string;
  warning200: string;
  warning300: string;
  warning400: string;
  warning500: string;
  warning600: string;
  warning700: string;
  // Success Palette
  positive: string;
  positive50: string;
  positive100: string;
  positive200: string;
  positive300: string;
  positive400: string;
  positive500: string;
  positive600: string;
  positive700: string;
}

export interface CoreSemanticColorTokens {
  // Background
  backgroundPrimary: CSS.BackgroundColor;
  backgroundSecondary: CSS.BackgroundColor;
  backgroundTertiary: CSS.BackgroundColor;
  backgroundInversePrimary: CSS.BackgroundColor;
  backgroundInverseSecondary: CSS.BackgroundColor;
  backgroundInverseTertiary: CSS.BackgroundColor;
  // Content
  contentPrimary: CSS.Color;
  contentSecondary: CSS.Color;
  contentTertiary: CSS.Color;
  contentInversePrimary: CSS.Color;
  contentInverseSecondary: CSS.Color;
  contentInverseTertiary: CSS.Color;
  // Border
  borderOpaque: CSS.BorderColor;
  borderTransparent: CSS.BorderColor;
  borderInverseOpaque: CSS.BorderColor;
  borderInverseTransparent: CSS.BorderColor;
}

export type SemanticColorTokens = {} & CoreSemanticColorTokens;

export interface ComponentColorTokens {
  // Button
  // Primary
  buttonPrimaryFill: CSS.BackgroundColor;
  buttonPrimaryText: CSS.Color;
  buttonPrimaryBorder: CSS.BorderColor;
  buttonPrimaryHoverFill: CSS.BackgroundColor;
  buttonPrimaryHoverText: CSS.Color;
  buttonPrimaryHoverBorder: CSS.BorderColor;
  buttonPrimaryActiveFill: CSS.BackgroundColor;
  buttonPrimaryActiveText: CSS.Color;
  buttonPrimaryActiveBorder: CSS.BorderColor;
  buttonPrimarySelectedFill: CSS.BackgroundColor;
  buttonPrimarySelectedText: CSS.Color;
  buttonPrimarySelectedBorder: CSS.BorderColor;
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
  // Disabled
  buttonDisabledFill: CSS.BackgroundColor;
  buttonDisabledText: CSS.Color;
  buttonDisabledBorder: CSS.BorderColor;
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
  font450: Font;
  font500: Font;
  font550: Font;
  font600: Font;
  font650: Font;
  font700: Font;
  font750: Font;
  font800: Font;
  font850: Font;
  font900: Font;
  font950: Font;
  font1000: Font;
  ParagraphXSmall: Font;
  ParagraphSmall: Font;
  ParagraphMedium: Font;
  ParagraphLarge: Font;
  LabelXSmall: Font;
  LabelSmall: Font;
  LabelMedium: Font;
  LabelLarge: Font;
  HeadingXSmall: Font;
  HeadingSmall: Font;
  HeadingMedium: Font;
  HeadingLarge: Font;
  HeadingXLarge: Font;
  HeadingXXLarge: Font;
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
  overlay0: CSS.BoxShadow;
  overlay100: CSS.BoxShadow;
  overlay200: CSS.BoxShadow;
  overlay300: CSS.BoxShadow;
  overlay400: CSS.BoxShadow;
  overlay500: CSS.BoxShadow;
  shallowAbove: CSS.BoxShadow;
  shallowBelow: CSS.BoxShadow;
  deepAbove: CSS.BoxShadow;
  deepBelow: CSS.BoxShadow;
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
