import MenuResponsive from "../components/menu";
import HeroTemplateChip from "../components/heroTemplateChip";
import theme from "../themes/defaultTheme";
import { ThemeProvider } from "@mui/system";
import HeroCallToAction from "../components/heroCallToAction";
import HeroCarousel from "../components/heroCarousel";
import TemplateChip from "../components/templateChip";



function HeroPage() {


  return (
    <>
      <ThemeProvider theme={theme}>
        <MenuResponsive></MenuResponsive>
        <HeroTemplateChip componentCrop1={<HeroCallToAction/>} color={theme.palette.primary.dark} componentCrop2={<HeroCarousel/>}></HeroTemplateChip>
          <TemplateChip color={theme.palette.primary.main}></TemplateChip>
      </ThemeProvider>
    </>
  );
}

export default HeroPage;
