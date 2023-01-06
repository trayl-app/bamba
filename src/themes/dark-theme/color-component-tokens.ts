import { ColorTokens, ComponentColorTokens } from '../types';
import darkColorTokens from './color-tokens';

const getComponentColorTokens = (
  foundation: ColorTokens = darkColorTokens
): ComponentColorTokens => ({
  // Button
  // Primary
  buttonPrimaryFill: foundation.primary500,
  buttonPrimaryText: foundation.white,
  buttonPrimaryBorder: foundation.primary500,
  buttonPrimaryHoverFill: foundation.primary600,
  buttonPrimaryHoverText: foundation.white,
  buttonPrimaryHoverBorder: foundation.primary600,
  buttonPrimaryActiveFill: foundation.primary700,
  buttonPrimaryActiveText: foundation.white,
  buttonPrimaryActiveBorder: foundation.primary700,
  buttonPrimarySelectedFill: foundation.primary700,
  buttonPrimarySelectedText: foundation.white,
  buttonPrimarySelectedBorder: foundation.primary700,
  // Secondary
  buttonSecondaryFill: foundation.mono1000,
  buttonSecondaryText: foundation.mono200,
  buttonSecondaryBorder: foundation.mono500,
  buttonSecondaryHoverFill: foundation.mono900,
  buttonSecondaryHoverText: foundation.mono200,
  buttonSecondaryHoverBorder: foundation.mono400,
  buttonSecondarySelectedFill: foundation.mono900,
  buttonSecondarySelectedText: foundation.mono200,
  buttonSecondarySelectedBorder: foundation.mono500,
  buttonSecondaryActiveFill: foundation.mono1000,
  buttonSecondaryActiveText: foundation.mono200,
  buttonSecondaryActiveBorder: foundation.mono500,
  // Tertiary
  buttonTertiaryFill: foundation.mono1000,
  buttonTertiaryText: foundation.mono200,
  buttonTertiaryBorder: foundation.mono1000,
  buttonTertiaryHoverFill: foundation.mono900,
  buttonTertiaryHoverText: foundation.mono200,
  buttonTertiaryHoverBorder: foundation.mono900,
  buttonTertiaryActiveFill: foundation.mono800,
  buttonTertiaryActiveText: foundation.mono200,
  buttonTertiaryActiveBorder: foundation.mono800,
  buttonTertiarySelectedFill: foundation.mono800,
  buttonTertiarySelectedText: foundation.mono200,
  buttonTertiarySelectedBorder: foundation.mono800,
  // Disabled
  buttonDisabledFill: foundation.mono800,
  buttonDisabledText: foundation.mono500,
  buttonDisabledBorder: foundation.mono800,
});

export default getComponentColorTokens;
