import { ColorTokens, ComponentColorTokens } from '../types';
import lightColorTokens from './color-tokens';

const getComponentColorTokens = (
  foundation: ColorTokens = lightColorTokens
): ComponentColorTokens => ({
  // Button
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
  buttonSecondaryDisabledBorder: foundation.mono400,
  buttonSecondaryDisabledFill: foundation.mono100,
  buttonSecondaryDisabledText: foundation.mono500,
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
  buttonTertiaryDisabledFill: foundation.mono1000,
  buttonTertiaryDisabledText: foundation.mono500,
  buttonTertiaryDisabledBorder: foundation.mono1000,
});

export default getComponentColorTokens;
