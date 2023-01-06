import { ColorTokens, ComponentColorTokens } from '../types';
import lightColorTokens from './color-tokens';

const getComponentColorTokens = (
  foundation: ColorTokens = lightColorTokens
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
  buttonSecondaryFill: foundation.mono100,
  buttonSecondaryText: foundation.black,
  buttonSecondaryBorder: foundation.mono400,
  buttonSecondaryHoverFill: foundation.mono200,
  buttonSecondaryHoverText: foundation.black,
  buttonSecondaryHoverBorder: foundation.mono500,
  buttonSecondaryActiveFill: foundation.mono300,
  buttonSecondaryActiveText: foundation.black,
  buttonSecondaryActiveBorder: foundation.mono600,
  buttonSecondarySelectedFill: foundation.mono300,
  buttonSecondarySelectedText: foundation.black,
  buttonSecondarySelectedBorder: foundation.mono600,
  // Tertiary
  buttonTertiaryFill: foundation.black,
  buttonTertiaryText: foundation.white,
  buttonTertiaryBorder: foundation.black,
  buttonTertiaryHoverFill: foundation.mono1000,
  buttonTertiaryHoverText: foundation.white,
  buttonTertiaryHoverBorder: foundation.mono1000,
  buttonTertiaryActiveFill: foundation.mono800,
  buttonTertiaryActiveText: foundation.white,
  buttonTertiaryActiveBorder: foundation.mono800,
  buttonTertiarySelectedFill: foundation.mono800,
  buttonTertiarySelectedText: foundation.white,
  buttonTertiarySelectedBorder: foundation.mono800,
  // Disabled
  buttonDisabledFill: foundation.mono200,
  buttonDisabledText: foundation.mono600,
  buttonDisabledBorder: foundation.mono200,
});

export default getComponentColorTokens;
