import MenuResponsive from "../components/menu";
import HeroTemplateChip from "../components/heroTemplateChip";
import theme from "../themes/defaultTheme";
import { ThemeProvider } from "@mui/system";
import HeroCallToAction from "../components/heroCallToAction";
import HeroCarousel from "../components/heroCarousel";
import TemplateChip from "../components/templateChip";
import GalleryChip from "../components/galleryChip";
import TitlebarImageList from "../components/imageList";
import GalleryDescription from "../components/galleryDescription";



function HeroPage() {


  return (
    <>
      <ThemeProvider theme={theme}>
        <MenuResponsive></MenuResponsive>
        <HeroTemplateChip componentCrop1={<HeroCallToAction/>} color={theme.palette.primary.dark} componentCrop2={<HeroCarousel/>}></HeroTemplateChip>
          <TemplateChip color={theme.palette.primary.main}></TemplateChip>
          <HeroTemplateChip componentCrop1={<GalleryDescription/>} componentCrop2={<TitlebarImageList/>} color={theme.palette.primary.dark}></HeroTemplateChip>
      </ThemeProvider>
    </>
  );
}

export default HeroPage;
