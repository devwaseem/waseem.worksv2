module.exports = {
  purge: [],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'dark': '#131316',
        'gray': '#58585F',
        'accent': '#0D86F8'
      },
      backgroundImage: theme => ({
        'logo-black': "url('/static/images/logo-black.svg')",
        'logo-white': "url('/static/images/logo-white.svg')"
      }),
      textColor: theme => theme.colors,
      backgroundColor: theme => theme.colors,
      height: {
        '90per': '90%'
      },
      fontSize: {
        '42': '42px',
        '22': '22px'
      },
      fontFamily: {
        'sans': ['CircularStd', 'system-ui']
      }
    },
  },
  variants: {
    extend: {
      
    },
  },
  plugins: [],
}
