import { Dimensions, Platform, PixelRatio } from 'react-native';
export const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } =
  Dimensions.get('window');
const ScaleHeight = SCREEN_HEIGHT / 812;
const ScaleWidth = SCREEN_WIDTH / 375;
export const scaleHeight = height => Math.round(height * ScaleHeight);

export const scaleWidth = width => Math.round(width * ScaleWidth);
const scale = SCREEN_WIDTH / 320;
export const normalize = (size) => {
  const newSize = size * scale
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize))
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
  }
}