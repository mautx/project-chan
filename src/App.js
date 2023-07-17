import "./App.css";
import MenuResponsive from "./components/menu";
import theme from "./themes/defaultTheme";
import {ThemeProvider} from "@mui/system";
import Box from "@mui/material/Box";


function App() {
  return (
    <>
        <ThemeProvider theme={theme}>
      <MenuResponsive></MenuResponsive>
            </ThemeProvider>

        <Box sx={{ backgroundColor: '#1A2138', height: '100vh' }}>
            {/* Contenido de la página */}
        </Box>
    </>
  );
}

export default App;
