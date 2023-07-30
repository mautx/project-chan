import MenuResponsive from "../components/menu";
import HeroTemplateChip from "../components/heroTemplateChip";
import theme from "../themes/defaultTheme";
import { ThemeProvider } from "@mui/system";
import HeroCallToAction from "../components/heroCallToAction";



function HeroPage() {


  return (
    <>
      <ThemeProvider theme={theme}>
        <MenuResponsive></MenuResponsive>
        <HeroTemplateChip componentCrop1={<HeroCallToAction/>} color={theme.palette.primary.dark}></HeroTemplateChip>

      </ThemeProvider>
    </>
  );
}

export default HeroPage;
