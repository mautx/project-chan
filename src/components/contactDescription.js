import {Button, Icon, Paper, useMediaQuery} from "@mui/material";
import theme from "../themes/defaultTheme";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {Directions, Email, Phone, WhatsApp} from "@mui/icons-material";
import ListItemButton from "@mui/material/ListItemButton";
import * as React from "react";

function ContactDescription() {
    const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

    const papersData = [
        {
            icon: <Phone margin="1vh"/>,
            text: "Teléfono: 55-55-62-90-80",
        },
        {
            icon: <WhatsApp/>,
            text: "WA: 55-18-37-02-48",
        },
        {
            icon: <Directions/>,
            text: "Dirección: Calzada San Agustín #70, Col. Exhacienda del cristo, Naucalpan Edo. Méx",
        },
        {
            icon: <Email/>,
            text: "acricristal@gmail.com",
        }
        // Agrega más objetos si necesitas más "papers"
    ];

    return (
        <Grid container spacing={5} margin="5vh">
            {papersData.map((paper, index) => (
                <Grid item xs={12} sm={12} md={12} lg={6} xl={6} key={index}>
                    <Paper
                        height="2vh"
                        width="4vh"
                        sx={{
                            padding: 2,
                            display: "flex",
                            alignItems: "center",
                            backgroundColor : theme.palette.secondary.main
                        }}
                    >

                            {paper.icon}
                        <Typography variant="body2">{paper.text}</Typography>
                    </Paper>
                </Grid>
            ))}
            <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                <ListItemButton to="https://www.google.com/maps/search/?api=1&query=Laminas+y+Domos+A.G.H+S.A.+de+C.V./"
                                height="2vh"
                                width="7vh">
                    {" "}
                    <Button
                        to="/"
                        component="div"
                        margin="2vh"
                        variant="contained" color="secondary"
                    >
                        Indicaciones de cómo llegar
                    </Button>
                </ListItemButton>
            </Grid>
        </Grid>
    );
}

export default ContactDescription;