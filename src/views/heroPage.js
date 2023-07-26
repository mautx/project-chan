import MenuResponsive from "../components/menu";
import Hero from "../components/hero";
import theme from "../themes/defaultTheme";
import { ThemeProvider } from "@mui/system";
function HeroPage() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <MenuResponsive></MenuResponsive>
        <Hero></Hero>
      </ThemeProvider>
    </>
  );
}

export default HeroPage;
