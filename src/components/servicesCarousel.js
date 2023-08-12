
import Grid from '@mui/material/Unstable_Grid2';
import {useEffect, useState} from "react";
import {Fade} from "@mui/material";
function HeroCarousel() {


    const images = ["images/services1.jpeg", "images/services2.jpeg","images/services2.jpeg"];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        // Function to change state
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Changes the state

        // Cleans the interval for performance
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        // Restablishes the index
        return () => setCurrentImageIndex(0);
    }, []);

    return (
        <Fade in={true} timeout={3000}>
            <Grid container justifyContent="center">
                {" "}
                <img
                    height="500vh"
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