import MenuResponsive from "../components/menu";

import theme from "../themes/defaultTheme";
import { ThemeProvider } from "@mui/system";


import Footer from "../components/footer";
import GenericTemplate from "../components/genericTemplate";
import TitlebarImageList from "../components/imageList";
import RightMostPeninsula from "../components/rightMostPeninsula";
import GalleryDescription from "../components/galleryDescription";



function GalleryProduct() {


    return (
        <>
            <ThemeProvider theme={theme}>
                <MenuResponsive></MenuResponsive>
                <GenericTemplate componentCrop1={<TitlebarImageList/>} componentCrop2={<GalleryDescription/>} color={theme.palette.primary.dark}></GenericTemplate>
                <Footer></Footer>
            </ThemeProvider>
        </>
    );
}

export default GalleryProduct;