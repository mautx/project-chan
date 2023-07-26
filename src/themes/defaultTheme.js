import { createTheme } from '@mui/material/styles';
import Grid2 from "@mui/material/Unstable_Grid2";

let colorPalette = {
  darkBlue: "#222B45",
  lightBlue: "#2E364F",
  green: "#009357",
  white: "#EEEEEF",
};

const theme = createTheme({
  components: {
    MuiAppBar: {
      variants: [
        {
          props: {
            variant: "MainNav",
          },
          style: {
            backgroundColor: colorPalette.lightBlue,
          },
        },
      ],
    },

    MuiButton: {
      variants: [
        {
          props: {
            variant: "callToAction",
          },
          style: {
            color:colorPalette.white,
            backgroundColor:colorPalette.green,
            margin:"4vh",

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
            color: colorPalette.green,
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
            color: colorPalette.white,
            backgroundColor: colorPalette.lightBlue,
            height: "100vh",
          },
        },
        {
          props: {
            variant: "MainList",
          },
          style: {
            backgroundColor: colorPalette.white,
          },
        },
      ],
    },
    MuiGrid2: {
      variants: [
        {
          props: {
            variant: "heroGrid",
          },
          style: {
            backgroundColor: colorPalette.darkBlue,
            height:"65vh"
          },
        },
        {
          props: {
            variant: "lightBackground",
          },
          style: {
            backgroundColor: colorPalette.lightBlue,
          },
        },
      ],
    },
    MuiTypography: {
      variants: [
        {
          props: {
            variant: "h2",

          },
          style: {
            color: colorPalette.white,
            fontWeight:"bold",
            textAlign:"center",
            margin:"1vh"
          },
        },
        {
          props: {
            variant: "h5",
          },
          style: {
            color:colorPalette.white,
          textAlign:"center",
            margin:"1vh"
          },
        },
        {
          props: {
            variant: "h6",
          },
          style: {
            color:colorPalette.green,
          },
        },
      ],
    },
  },
});

export default theme;