import {Dimensions} from 'react-native';

export const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} =
  Dimensions.get('window');

// based on iphone 6 scale
const ScaleHeight = SCREEN_HEIGHT / 812;
const ScaleWidth = SCREEN_WIDTH / 375;
export const scaleHeight = height => Math.round(height * ScaleHeight);

export const scaleWidth = width => Math.round(width * ScaleWidth);
