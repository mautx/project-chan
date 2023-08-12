import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import theme from "../themes/defaultTheme";
import {Button, useMediaQuery} from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import ListItemButton from "@mui/material/ListItemButton";



function RightMostPeninsula(){
    const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

    return (
        <Box margin={isMobile ? "3vw" : "5vw"}>
            <Typography
                variant={isMobile ? "h4" : "h2"}
                color={theme.palette.text.primary}
                margin="2vh"
            >
                Transforma tus ideas con{" "}
                <span
                    style={{ color: theme.palette.text.secondary, fontWeight: "bold" }}
                >
          nosotros
        </span>
                .
            </Typography>
            <Typography
                variant="body1"
                color={theme.palette.text.primary}
                margin="2vh"
            >
                Estamos ubicados en ,{" "}
                <span
                    style={{ color: theme.palette.text.secondary, fontWeight: "bold" }}
                >
          Naucalpan{" "}
        </span>
                Estado de México. Ofrecemos {" "}
                <span
                    style={{ color: theme.palette.text.secondary, fontWeight: "bold" }}
                >
          calidad profesional{" "}
        </span>{" "}
                y hemos trabajado con grandes empresas. Contamos con una {" "}
                <span
                    style={{ color: theme.palette.text.secondary, fontWeight: "bold" }}
                >
          máquina laser{" "}
        </span>{" "}
                para llevar a cabo proyectos personalizados. También ofrecemos servicios
                de {" "}
                <span
                    style={{ color: theme.palette.text.secondary, fontWeight: "bold" }}
                >
          Trabajos urgentes{" "}
        </span>{" "}
                para satisfacer tus necesidades con rapidez.
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

export default RightMostPeninsula