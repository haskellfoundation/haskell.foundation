import { extendDefaultTheme } from '@input-output-hk/front-end-themes/themes/defaultTheme'

const primaryGrad = `linear-gradient(145deg, rgba(0,51,173,1) 0%, rgba(51,92,190,1) 100%)`
const secondaryGrad = `linear-gradient(145deg, rgba(255,85,83,1) 0%, rgba(0,51,173,1) 100%)`
const primary = {
  main: '#614c8b',
  light: '#7C62B2',
  dark: '#453a62',
  contrastText: '#fff'
}

const secondary = {
  main: '#984590',
  light: '#BF56B4',
  dark: '#72226A',
  contrastText: '#fff'
}

const accentColour = {
  main: '#ff7676'
}

const accentGrey = {
  main: '#1D1E21'
}

const text = {
  primary: '#323232',
  disabled: '#bbb',
  hint: '#eee'
}

const background = {
  default: '#fdfdfb',
  primary: '#000',
  primaryGrad: primaryGrad,
  secondaryGrad: secondaryGrad,
  hero: '#f8f8f5',
  alternateBackground: 'rgba(204, 214, 238, 0.15)'
}

const theme = extendDefaultTheme({
  type: 'light',
  name: 'Cardano Light',
  overrides: {
    MuiButton: {
      root: {
        padding: '1.4rem 4rem',
        '&:hover': {
          color: '#000'
        }
      },
      colorInherit: {
        '&:hover': {
          color: 'currentColor'
        }
      },
      containedPrimary: {
        '&:hover': {
          color: primary.contrastText
        }
      },
      containedSecondary: {
        '&:hover': {
          color: secondary.contrastText
        }
      },
      outlinedPrimary: {
        '&:hover': {
          color: primary.dark
        }
      },
      outlinedSecondary: {
        '&:hover': {
          color: secondary.dark
        }
      }
    },
    MuiPaper: {
      root: {
        backgroundColor: 'transparent'
      }
    },
    MuiIconButton: {
      root: {
        color: 'black'
      }
    }
  },
  colors: {
    primary,
    secondary,
    accentColour,
    accentGrey,
    text,
    background
  },
  shape: {
    borderRadius: 30
  },
  shadows: [ '0', '0', '0', 'transparent' ],
  typography: {
    baseFontSize: 18,
    lineHeight: 1.6,
    fontWeight: 'normal',
    fontFamily: 'Gibson Light, sans-serif',
    fontDisplay: 'swap',
    h1: {
      fontSize: 3,
      fontWeight: 'normal',
      lineHeight: 1.1,
      letterSpacing: -0.1,
      fontFamily: 'Gibson Bold',
      textTransform: 'capitalize'
    },
    h2: {
      fontSize: 1.4,
      fontWeight: 'normal',
      letterSpacing: 0.05,
      lineHeight: 1.2,
      fontFamily: 'Gibson Regular',
      textTransform: 'capitalize'
    },
    h3: {
      fontSize: 1.3,
      fontWeight: 'normal',
      lineHeight: 1.2,
      letterSpacing: 0.05,
      fontFamily: 'Gibson Regular',
      textTransform: 'capitalize'
    },
    h4: {
      fontSize: 1.1,
      fontWeight: 'normal',
      letterSpacing: 0.05,
      lineHeight: 1.2,
      fontFamily: 'Gibson Bold',
      textTransform: 'capitalize'
    },
    h5: {
      fontSize: 0.7,
      fontWeight: 'normal',
      letterSpacing: 0.15,
      lineHeight: 1.4,
      fontFamily: 'Gibson Bold',
      textTransform: 'uppercase'
    },
    h6: {
      fontSize: 0.6,
      fontWeight: 'normal',
      lineHeight: 1.4,
      fontFamily: 'Gibson Bold',
      textTransform: 'uppercase'
    },
    body: {
      fontSize: 1,
      fontWeight: 300,
      letterSpacing: 0.05,
      lineHeight: 1.7
    },
    small: {
      fontSize: 0.85,
      fontWeight: 400,
      letterSpacing: 0.05,
      lineHeight: 1.7,
      '@media (min-width:2049px)': {
        fontSize: 0.8,
        lineHeight: 1.8
      }
    },
    button: {
      fontSize: 0.75,
      fontWeight: 400,
      letterSpacing: 0.1,
      lineHeight: 1.7,
      textTransform: 'none',
      borderRadius: 'none'
    },
    body1: {
      fontSize: 1.8
    },
    body2: {
      fontSize: 1.6
    }
  }
})

export const getThemes = () => [ { key: 'cardano', config: theme } ]
