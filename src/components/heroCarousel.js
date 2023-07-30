
import Grid from '@mui/material/Unstable_Grid2';
import {useEffect, useState} from "react";
import {Fade} from "@mui/material";
function HeroCarousel() {


    const images = ["/heroImg1.png", "/heroImg2.png", "/heroImg3.png"];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        // Función para cambiar el índice de la imagen cada 5 segundos
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Cambia la imagen cada 5000 milisegundos (5 segundos)

        // Limpia el intervalo cuando el componente se desmonta para evitar problemas de rendimiento
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        // Restablecer el índice de la imagen cuando el componente se desmonta
        return () => setCurrentImageIndex(0);
    }, []);

  return (
      <Fade in={true} timeout={1000}>
          <Grid container justifyContent="center">
              {" "}
              <img
                  height="600vh"
                  src={images[currentImageIndex]}
                  srcSet={images[currentImageIndex]}
                  alt="hero_acrylic_image"
                  loading="lazy"
              />
          </Grid>
      </Fade>

  );
}

export default HeroCarousel