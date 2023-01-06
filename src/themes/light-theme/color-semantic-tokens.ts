import {
  ColorTokens,
  CoreSemanticColorTokens,
  SemanticColorTokens,
} from '../types';
import lightColorTokens from './color-tokens';

const getSemanticColorTokens = (
  foundation: ColorTokens = lightColorTokens
): SemanticColorTokens => {
  const core: CoreSemanticColorTokens = {
    backgroundPrimary: foundation.white,
    backgroundSecondary: foundation.mono100,
    backgroundTertiary: foundation.mono200,
    backgroundInversePrimary: foundation.black,
    backgroundInverseSecondary: foundation.mono1000,
    backgroundInverseTertiary: foundation.mono800,
    borderOpaque: foundation.mono400,
    borderTransparent: foundation.mono200,
    borderInverseOpaque: foundation.mono600,
    borderInverseTransparent: foundation.mono800,
    contentPrimary: foundation.black,
    contentSecondary: foundation.mono600,
    contentTertiary: foundation.mono400,
    contentInversePrimary: foundation.white,
    contentInverseSecondary: foundation.mono200,
    contentInverseTertiary: foundation.mono400,
  };

  return {
    ...core,
  };
};

export default getSemanticColorTokens;
