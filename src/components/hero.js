import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import {Button} from "@mui/material";
import { motion } from "framer-motion";
import Box from "@mui/material/Box";


function Hero() {
  return (
    <Grid
      container
      alignItems="center"
      justifyItems="center"
      spacing={2}
      variant="heroGrid"
    >
      <Grid xs={7}>
        <Typography variant="h2">Transformando tus visiones en  realidad.</Typography>
        <Typography variant="h5">
            En nuestra tienda de manufactura de acrílico en Naucalpan, nos enorgullecemos de ofrecer un servicio altamente profesional y dedicado a plasmar tus ideas en piezas de acrílico con una calidad excepcional. Nuestra experiencia y pasión por el arte del acrílico nos permiten convertir tus visiones en realidades tangibles, reflejando la elegancia y sofisticación que buscas en cada producto.
        </Typography>
          <Grid container justifyContent="center">
              <Button variant="callToAction">
                  Botón
              </Button>
          </Grid>
      </Grid>

      <Grid xs={5}>
          <Box
              component="img"
              sx={{
                  height: 233,
                  width: 350,
                  maxHeight: { xs: 233, md: 167 },
                  maxWidth: { xs: 350, md: 250 },
                  marginLeft: "10vh",
              }}
              alt="The house from the offer."
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
          />
      </Grid>
    </Grid>
  );
}

export default Hero;