import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiAppBar: {
      variants: [
        {
          props: {
            variant: "MainNav",
          },
          style: {
            backgroundColor: "#2E364F",
          },
        },
      ],
    },

    MuiIconButton: {
      variants: [
        {
          props: {
            variant: "MainIcon",
          },
          style: {
            color: "#009357",
            mr: 2,
          },
        },
      ],
    },
    MuiList: {
      variants: [
        {
          props: {
            variant: "MainListBack",
          },
          style: {
            color: "#009357",
            backgroundColor:"blue",
            height:"100vh"
          },
        },
      ],
    },

  },
});

export default theme;