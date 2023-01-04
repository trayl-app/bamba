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
  };

  return {
    ...core,
  };
};

export default getSemanticColorTokens;
