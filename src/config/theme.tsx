import React, {ReactNode} from 'react';
import {
  createTheme,
  useTheme as useReTheme,
  ThemeProvider as ReStyleThemeProvider,
} from '@shopify/restyle';
import {ImageStyle, TextStyle, ViewStyle, FlexStyle} from 'react-native';

type NamedStyles<T> = {
  [P in keyof T]: ViewStyle | TextStyle | ImageStyle | FlexStyle;
};

const palette = {
  primary: '#312651',
  secondary: '#444262',
  tertiary: '#FF7754',
  gray: '#83829A',
  lightGray: '#C1C0C8',
  white: '#F3F4F8',
  lightWhite: '#FAFAFC',
};

const theme = createTheme({
  spacing: {
    xs: 8,
    sm: 12,
    m: 16,
    l: 20,
    xl: 24,
    xxl: 32,
  },
  colors: {
    primary: palette.primary,
    secondary: palette.secondary,
    tertiary: palette.tertiary,
    gray: palette.gray,
    lightGray: palette.lightGray,
    white: palette.white,
    lightWhite: palette.lightWhite,
  },
  borderRadii: {
    xs: 8,
    sm: 12,
    m: 16,
    l: 20,
    xl: 24,
    xxl: 32,
  },
  textVariants: {
    defaults: {
      fontFamily: 'DMSans-Regular',
      fontSize: 16,
    },
  },
});

export const ThemeProvider = ({children}: {children: ReactNode}) => (
  <ReStyleThemeProvider theme={theme}>{children}</ReStyleThemeProvider>
);

export type Theme = typeof theme;
export const useTheme = () => useReTheme<Theme>();

export const makeStyle =
  <T extends NamedStyles<T>>(styles: (theme: Theme) => T) =>
  () => {
    const curretTheme = useTheme();
    return styles(curretTheme);
  };

export default theme;
