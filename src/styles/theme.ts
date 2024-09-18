import { DefaultTheme } from 'styled-components'

export const theme: DefaultTheme = {
  colors: {
    neutral: '#F1F1F7',
    positive: '#B1FFC7',
    negative: '#FFBFB1',
    white: '#ffffff',
    xLightGray: '#F6F6FA',
    lightGray: '#F1F1F7',
    gray: '#D3D3DC',
    darkGray: '#585D71',
    xDarkGray: '#343A4E',
    xxDarkGray: '#1B2134',
    black: '#000000',
  },
  fonts: {
    default: 'Inter'
  },
  fontSizes: {
    small: '12px',
    medium: '14px'
  },
  spacings: {
    xs4: '2px',
    xs3: '4px',
    xs2: '8px',
    xs: '12px',
    s: '16px',
    m: '20px',
    l: '24px',
    xl: '32px',
    xl2: '48px'
  },
  breakpoints: {
    mobile: '768px'
  }
}