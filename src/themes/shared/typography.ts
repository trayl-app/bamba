import { Font, FontTokens, Typography } from '../types';

export const defaultFontTokens: FontTokens = {
  fontFamily: 'Segoe UI, Helvetica, Arial, sans-serif',
};

const getTypography = (
  fontTokens: FontTokens = defaultFontTokens
): Typography => {
  const font100: Font = {
    fontFamily: fontTokens.fontFamily,
    fontWeight: 'normal',
    fontSize: '12px',
    lineHeight: '16px',
  };

  const font150: Font = {
    fontFamily: fontTokens.fontFamily,
    fontWeight: 'normal',
    fontSize: '14px',
    lineHeight: '20px',
  };

  const font200: Font = {
    fontFamily: fontTokens.fontFamily,
    fontWeight: 'normal',
    fontSize: '16px',
    lineHeight: '24px',
  };

  const font250: Font = {
    fontFamily: fontTokens.fontFamily,
    fontWeight: 'normal',
    fontSize: '18px',
    lineHeight: '28px',
  };

  const font300: Font = {
    fontFamily: fontTokens.fontFamily,
    fontWeight: 'normal',
    fontSize: '20px',
    lineHeight: '28px',
  };

  const font350: Font = {
    fontFamily: fontTokens.fontFamily,
    fontWeight: 'normal',
    fontSize: '22px',
    lineHeight: '28px',
  };

  const font400: Font = {
    fontFamily: fontTokens.fontFamily,
    fontWeight: 'normal',
    fontSize: '24px',
    lineHeight: '32px',
  };

  return {
    font100,
    font150,
    font200,
    font250,
    font300,
    font350,
    font400,

    ParagraphXSmall: font100,
  };
};

export default getTypography;
