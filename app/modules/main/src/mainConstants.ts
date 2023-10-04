import { Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

export const COLORS = {
  primary: '#2DB875',
  secondary: '#F1F1F1',
  white: '#FFFFFF',
  black: '#000000',
  gray: '#757575',
  lightGrey: '#c0c0c0',
};
export const SIZES = {
  // global sizes
  S_1: 2,
  S_2: 4,
  S_3: 6,
  S_4: 8,
  S_5: 10,
  S_6: 12,
  S_7: 14,
  S_8: 16,
  S_9: 18,
  S_10: 20,

  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  navBarHeight: Platform.OS === 'ios' ? 54 : 44,
  buttonRadius: 4,
  borderRadius: 8,
  width,
  height,
};

export const TYPOGRAPHY = {
  displayLarge: 'displayLarge',
  displayMedium: 'displayMedium',
  displaySmall: 'displaySmall',

  headlineLarge: 'headlineLarge',
  headlineMedium: 'headlineMedium',
  headlineSmall: 'headlineSmall',

  titleLarge: 'titleLarge',
  titleMedium: 'titleMedium',
  titleSmall: 'titleSmall',

  bodyLarge: 'bodyLarge',
  bodyMedium: 'bodyMedium',
  bodySmall: 'bodySmall',

  labelLarge: 'labelLarge',
  labelMedium: 'labelMedium',
  labelSmall: 'labelSmall',
};

const appTheme = { COLORS, SIZES,typography: TYPOGRAPHY };

export default appTheme;