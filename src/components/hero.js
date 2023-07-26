import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";


function Hero() {
    return (
        <>

            <Box variant={"MainBoxHero"}>
                <Typography variant="h2">
                    Título del Hero
                </Typography>
                <Typography variant="body1">
                    Aquí va el texto descriptivo del Hero. Puedes añadir toda la
                    información que necesites para resaltar tu contenido.
                </Typography>
            </Box>
        </>
    );
}

export default Hero;