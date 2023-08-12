import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import theme from "../themes/defaultTheme";
import {Button, useMediaQuery} from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import ListItemButton from "@mui/material/ListItemButton";




function ServicesDescription(){
    const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

    return (
        <Box margin={isMobile ? "3vw" : "5vw"}>

            <Typography variant="h3" color={theme.palette.text.primary}>
                Servicios
            </Typography>
            <Typography variant="h5" color={theme.palette.text.primary}>
                Nuestros servicios abarcan desde el pegado de acrílico en distintas formas y tamaños, hasta la creación de diseños personalizados y a medida para proyectos únicos. Si tienes una idea en mente, nuestro equipo de expertos trabajará contigo para convertirla en realidad.

                Además, ofrecemos el servicio de doblado de acrílico, lo que nos permite crear piezas con formas curvas y sofisticadas. Si necesitas hojas de acrílico de alta calidad, también las tenemos disponibles en nuestra tienda, en una variedad de tamaños y grosores.

            </Typography>
            <Grid container justifyContent="center" margin="4vh">
                <ListItemButton to="/contacto">
                    <Button variant="contained" color="secondary" >
                        Comunícate con nosotros!
                    </Button>
                </ListItemButton>
            </Grid>
        </Box>
    );
}

export default ServicesDescription