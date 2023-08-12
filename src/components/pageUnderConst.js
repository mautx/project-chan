import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import theme from "../themes/defaultTheme";
import {Button, useMediaQuery} from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import ListItemButton from "@mui/material/ListItemButton";




function PageUnderConst(){
    const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

    return (
        <Box margin={isMobile ? "3vw" : "5vw"}>

            <Typography variant="h3" color={theme.palette.text.primary}>
                Sección en construcción
            </Typography>
            <img
                height="400vh"
                src="/images/monkey.png"
                srcSet="/images/monkey.png"
                alt="hero_acrylic_image"
                loading="lazy"
            />
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

export default PageUnderConst