import MenuResponsive from "../components/menu";
import HeroTemplateChip from "../components/heroTemplateChip";
import theme from "../themes/defaultTheme";
import { ThemeProvider } from "@mui/system";



function HeroPage() {


  return (
    <>
      <ThemeProvider theme={theme}>
        <MenuResponsive></MenuResponsive>


      </ThemeProvider>
    </>
  );
}

export default HeroPage;
