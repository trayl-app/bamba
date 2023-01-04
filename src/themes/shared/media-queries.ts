import { getMediaQuery } from '../../helpers/responsive-helpers';
import { MediaQueries } from '../types';
import breakpoints from './breakpoints';

const mediaQueries: MediaQueries = {
  xSmall: getMediaQuery(breakpoints.xSmall),
  small: getMediaQuery(breakpoints.small),
  medium: getMediaQuery(breakpoints.medium),
  large: getMediaQuery(breakpoints.large),
  xLarge: getMediaQuery(breakpoints.xLarge),
};

export default mediaQueries;
