import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import theme from "../themes/defaultTheme";
import {Button, useMediaQuery} from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';



function HeroCallToAction(){



    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Box margin={isMobile ? "3vw" : "10vw"}>
            <Typography variant={isMobile ? "h4" : "h2"} color={theme.palette.text.primary} margin="2vh">
                Transforma tus ideas con {' '}
                <span style={{color:theme.palette.text.secondary, fontWeight:"bold"}}>nosotros</span>
                .
            </Typography>
            <Typography variant="body1" color={theme.palette.text.primary} margin="2vh">
                Estamos ubicados en Naucalpan, Estado de México, y realizamos entregas a Distrito Federal.
                Ofrecemos calidad profesional y hemos trabajado con grandes empresas.
                Contamos con una máquina láser para llevar a cabo proyectos personalizados.
                También ofrecemos servicios de trabajos urgentes para satisfacer tus necesidades con rapidez.
            </Typography>
            <Grid container justifyContent="center">
                <Button variant="contained" color="secondary">
                    Comunícate con nosotros!
                </Button>
            </Grid>
        </Box>
    )
}

export default HeroCallToAction