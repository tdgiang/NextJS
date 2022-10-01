import { createTheme,responsiveFontSizes } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
export let theme = createTheme({
  typography:{
    fontFamily: 'Heebo, sans-serif'
  },
  palette: {
    primary: {
      main: '#FF6464',
      light:"#EDF7FA"
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    text:{
      primary:"#21243D"
    }

    
  },
  components:{
    MuiContainer:{
      defaultProps:{
        maxWidth:'md'
      },
      styleOverrides:{
        maxWidthSm:{
          maxWidth:'680px',
          '@media (min-width:600px)':{
            maxWidth:'680px'
          }
        },
        maxWidthMd:{
          maxWidth:'860px',
          '@media (min-width:900px)':{
            maxWidth:'860px'
          }

        }
      }
    },
    MuiLink:{
      defaultProps:{
        underline:'hover'
      },
      styleOverrides:{
      root:{
        color:"black",
        '&:hover':{
          color:'#FF6464',
        }
      }
      }

    },
    MuiButton:{
      variants:[
        {
          props:{variant:'contained',color:'primary'},
          style:{
            color:'white'
          }

        }
      ]
        
    }
  }
});

theme =responsiveFontSizes(theme)

// theme.typography.h3={
//   fontSize:'2rem',
//   [theme.breakpoints.up('md')]:{
//     fontSize:'3rem'
//   }

// }
