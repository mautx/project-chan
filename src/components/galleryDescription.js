import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import theme from "../themes/defaultTheme";
import {Button, useMediaQuery} from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';




function HeroCallToAction(){
    const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

    return (
        <Box margin={isMobile ? "3vw" : "5vw"}>

            <Typography variant="h3" color={theme.palette.text.primary}>
                Productos
            </Typography>
            <Typography variant="body1" color={theme.palette.text.primary}>
                Somos expertos en crear trabajos únicos y a medida para satisfacer todas tus necesidades. Desde impresionantes tombolas y elegantes capelos, hasta prácticos portainfo, portaretratos y portamenús, nuestro equipo altamente capacitado está listo para materializar tus ideas en impresionantes piezas de acrílico. Déjanos ser tu aliado creativo y llevar tus proyectos al siguiente nivel con la belleza y versatilidad del acrílico. ¡Explora nuestras opciones y déjanos sorprenderte con la excelencia de nuestro trabajo!
            </Typography>
            <Grid container justifyContent="center" margin="4vh">
                <Button variant="contained" color="secondary" >
                    Comunícate con nosotros!
                </Button>
            </Grid>
        </Box>
    );
}

export default HeroCallToAction