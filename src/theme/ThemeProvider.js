import React from 'react';
import LocationProvider from '@cloudhub-ux/core/customhooks/LocationProvider';
import MinThemeProvider from '@cloudhub-ux/core/theme/ThemeProvider';
import colors from './Colors';
import sizes from './Sizes';
import fonts from './Fonts';

const ThemeProvider = ({ children }) => (
  <MinThemeProvider
    colors={colors}
    fonts={fonts}
    sizes={sizes}
    // addBaseWeb
  >
    <LocationProvider>{children}</LocationProvider>
  </MinThemeProvider>
);

export default ThemeProvider;
