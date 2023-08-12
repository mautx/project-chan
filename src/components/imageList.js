import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import {Dialog, useMediaQuery} from "@mui/material";
import theme from "../themes/defaultTheme";
import {useState} from "react";



const itemData = [

    {
        img:'/images/IMG_2537.JPG' ,
        title: 'Burger',
        author: '@rollelflex_graphy726',
    },
    {
        img:'/images/IMG_2538.JPG',
        title: 'Camera',
        author: '@helloimnik',
    },
    {
        img:'/images/IMG_2539.JPG',
        title: 'Coffee',
        author: '@nolanissac',
        cols: 2,
    },
    {
        img:'/images/IMG_2557.JPG',
        title: 'Hats',
        author: '@hjrc33',
        cols: 2,
    },
    {
        img:'/images/IMG_2541.JPG'  ,
        title: 'Honey',
        author: '@arwinneil',
        rows: 2,
        cols: 2,
        featured: true,
    },
    {
        img:'/images/IMG_2598.JPG',
        title: 'Basketball',
        author: '@tjdragotta',
    },
    {
        img:'/images/IMG_2543.JPG',
        title: 'Fern',
        author: '@katie_wasserman',
    },
    {
        img:'/images/IMG_2544.JPG',
        title: 'Mushrooms',
        author: '@silverdalex',
        rows: 2,
        cols: 2,
    },
    {
        img:'/images/IMG_2545.JPG',
        title: 'Tomato basil',
        author: '@shelleypauls',
    },
    {
        img:'/images/IMG_2546.JPG',
        title: 'Sea star',
        author: '@peterlaster',
    },
    {
        img:'/images/IMG_2547.JPG',
        title: 'Bike',
        author: '@southside_customs',
        cols: 2,
    },
    {
        img:'/images/IMG_2548.JPG' ,
        title: 'Burger',
        author: '@rollelflex_graphy726',
    },
    {
        img:'/images/IMG_2549.JPG',
        title: 'Camera',
        author: '@helloimnik',
    },
    {
        img:'/images/IMG_2550.JPG',
        title: 'Coffee',
        author: '@nolanissac',
        cols: 2,
    },
    {
        img:'/images/IMG_2551.JPG',
        title: 'Hats',
        author: '@hjrc33',
        cols: 2,
    },
    {
        img:'/images/IMG_2552.JPG'  ,
        title: 'Honey',
        author: '@arwinneil',
        rows: 2,
        cols: 2,
        featured: true,
    },
    {
        img:'/images/IMG_2553.JPG',
        title: 'Basketball',
        author: '@tjdragotta',
    },
    {
        img:'/images/IMG_2554.JPG',
        title: 'Fern',
        author: '@katie_wasserman',
    },
    {
        img:'/images/IMG_2555.JPG',
        title: 'Mushrooms',
        author: '@silverdalex',
        rows: 2,
        cols: 2,
    },
    {
        img:'/images/IMG_2556.JPG',
        title: 'Tomato basil',
        author: '@shelleypauls',
    },
    {
        img:'/images/IMG_2557.JPG',
        title: 'Sea star',
        author: '@peterlaster',
    },
    {
        img:'/images/IMG_2558.JPG',
        title: 'Bike',
        author: '@southside_customs',
        cols: 2,
    },

    {
        img:'/images/IMG_2560.JPG' ,
        title: 'Burger',
        author: '@rollelflex_graphy726',
    },
    {
        img:'/images/IMG_2560.JPG',
        title: 'Camera',
        author: '@helloimnik',
    },
    {
        img:'/images/IMG_2561.JPG',
        title: 'Coffee',
        author: '@nolanissac',
        cols: 2,
    },
    {
        img:'/images/IMG_2569.JPG',
        title: 'Hats',
        author: '@hjrc33',
        cols: 2,
    },
    {
        img:'/images/IMG_2563.JPG'  ,
        title: 'Honey',
        author: '@arwinneil',
        rows: 2,
        cols: 2,
        featured: true,
    },
    {
        img:'/images/IMG_2564.JPG',
        title: 'Basketball',
        author: '@tjdragotta',
    },
    {
        img:'/images/IMG_2565.JPG',
        title: 'Fern',
        author: '@katie_wasserman',
    },
    {
        img:'/images/IMG_2566.JPG',
        title: 'Mushrooms',
        author: '@silverdalex',
        rows: 2,
        cols: 2,
    },
    {
        img:'/images/IMG_2567.JPG',
        title: 'Tomato basil',
        author: '@shelleypauls',
    },
    {
        img:'/images/IMG_2561.JPG',
        title: 'Sea star',
        author: '@peterlaster',
    },
    {
        img:'/images/IMG_2569.JPG',
        title: 'Bike',
        author: '@southside_customs',
        cols: 2,
    },
    {
        img:'/images/IMG_2570.JPG' ,
        title: 'Burger',
        author: '@rollelflex_graphy726',
    },
    {
        img:'/images/IMG_2571.JPG',
        title: 'Camera',
        author: '@helloimnik',
    },
    {
        img:'/images/IMG_2572.JPG',
        title: 'Coffee',
        author: '@nolanissac',
        cols: 2,
    },
    {
        img:'/images/IMG_2573.JPG',
        title: 'Hats',
        author: '@hjrc33',
        cols: 2,
    },
    {
        img:'/images/IMG_2574.JPG'  ,
        title: 'Honey',
        author: '@arwinneil',
        rows: 2,
        cols: 2,
        featured: true,
    },
    {
        img:'/images/IMG_2575.JPG',
        title: 'Basketball',
        author: '@tjdragotta',
    },
    {
        img:'/images/IMG_2576.JPG',
        title: 'Fern',
        author: '@katie_wasserman',
    },
    {
        img:'/images/IMG_2577.JPG',
        title: 'Mushrooms',
        author: '@silverdalex',
        rows: 2,
        cols: 2,
    },
    {
        img:'/images/IMG_2578.JPG',
        title: 'Tomato basil',
        author: '@shelleypauls',
    },
    {
        img:'/images/IMG_2579.JPG',
        title: 'Sea star',
        author: '@peterlaster',
    },
    {
        img:'/images/IMG_2580.JPG',
        title: 'Bike',
        author: '@southside_customs',
        cols: 2,
    },
]

export default function TitlebarImageList() {
    const [selectedImage, setSelectedImage] = useState(null);
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    const handleCloseDialog = () => {
        setSelectedImage(null);
    };

    return (
        <>
            <ImageList       sx={{
                width: isMobile ? '100vw' : '40vw',
                height: isMobile ? '90vh' : '60vh',
                margin: isMobile ? '0vh' : '5vh',
            }} >
                {itemData.map((item) => (
                    <ImageListItem key={item.img} onClick={() => handleImageClick(item)}>
                        <ImageListItem key={item.img}>
                            <img
                                src={`${item.img}?w=248&fit=crop&auto=format`}
                                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                alt={item.title}
                                loading="lazy"
                            />
                            <ImageListItemBar
                                title={item.title}
                                subtitle={item.author}
                                actionIcon={
                                    <IconButton
                                        sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                                        aria-label={`info about ${item.title}`}
                                    >
                                        <InfoIcon />
                                    </IconButton>
                                }
                            />
                        </ImageListItem>
                    </ImageListItem>
                ))}
            </ImageList>

            <Dialog open={!!selectedImage} onClose={handleCloseDialog}>
                {selectedImage && (
                    <img
                        src={`${selectedImage.img}?w=600`}
                        alt={selectedImage.title}
                        style={{ width: '100%', height: 'auto' }}
                    />
                )}
            </Dialog>
        </>
    );
}