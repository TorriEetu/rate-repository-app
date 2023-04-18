import { Platform } from 'react-native';

const theme = {
  colors: {
    textPrimary: '#24292e',
    textSecondary: '#586069',
    textBar: '#ffffff',
    primary: '#0366d6',
    inputBox: '#d3d3d3',
    backGround: '#808080',
    repoContainer: '#f5f5f5',
  },
  fontSizes: {
    body: 14,
    subheading: 16,
    bar: 24,
  },
  fonts: Platform.select({
    android: 'Roboto',
    ios: 'Arial',
    default: 'sans-serif',
  }),
  fontWeights: {
    normal: '400',
    bold: '700',
  },
};

export default theme;
