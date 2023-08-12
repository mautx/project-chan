import MenuResponsive from "../components/menu";

import theme from "../themes/defaultTheme";
import { ThemeProvider } from "@mui/system";


import Footer from "../components/footer";
import GenericTemplate from "../components/genericTemplate";
import ServicesDescription from "../components/servicesDescription";
import ServicesCarousel from "../components/servicesCarousel";
import MapComponent from "../components/mapComponent";
import ContactDescription from "../components/contactDescription";
import PageUnderConst from "../components/pageUnderConst";



function GalleryM() {


    return (
        <>
            <ThemeProvider theme={theme}>
                <MenuResponsive></MenuResponsive>
                <GenericTemplate componentCrop1={<PageUnderConst/>} color={theme.palette.primary.dark}></GenericTemplate>
                <Footer></Footer>
            </ThemeProvider>
        </>
    );
}

export default GalleryM;