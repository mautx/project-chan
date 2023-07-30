import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: "#2E364F",
    },
    secondary: {
      main: "#009357",
    },
    text: {
      primary: "#EEEEEF",
    },

  },
  components:{
    MuiList: {
      variants: [
        {
          props: {
            variant: "MainList",
          },
          style: {
            color: "#EEEEEF",
            backgroundColor: "#2E364F",
            height:"100vh",
          },
        },
      ],
    },
    MuiIconButton:{
      variants: [
        {
          props: {
            variant: "MainIcon",
          },
          style: {
            color: "#009357",
            edge:"start",
            mr:2
          },
        },
      ],
    }
  }

});

export default theme;