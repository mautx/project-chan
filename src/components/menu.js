import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";

import * as React from "react";
import {
  Category,
  Collections,
  ContactPhone,
  Facebook,
  Home,
  HomeRepairService,
  Twitter,
  WhatsApp,
} from "@mui/icons-material";



function MenuResponsive() {
  const [state, setState] = useState(false);

  const redirectToExternalPage = (url) => {
    window.location.href = url;
  };

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState(open);
  };

  const list = () => (

      <List variant={"MainListBack"}>
        {["Inicio", "Productos", "Servicios", "Galería", "Contacto"].map(
          (text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon variant={"MainList"}>
                  {index === 0 ? <Home /> : undefined}
                  {index === 1 ? <Category /> : undefined}
                  {index === 2 ? <HomeRepairService /> : undefined}
                  {index === 3 ? <Collections /> : undefined}
                  {index === 4 ? <ContactPhone /> : undefined}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>


  );

  return (
    <>
      <Box sx={{ flexGrow: 1}}>
        <AppBar position="static" variant={"MainNav"} >
          <Toolbar>
            <IconButton
              onClick={toggleDrawer(true)}
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="Left"
              open={state}
              onClose={toggleDrawer(false)}
              variant={"MainDraw"}
            >
              {list()}
            </Drawer>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Acricristal
            </Typography>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <IconButton
                size="large"
                edge="start"
                onClick={() => redirectToExternalPage("https://www.google.com")}
variant={"MainIcon"}
                aria-label="menu"
              >
                <Twitter />
              </IconButton>

              <IconButton
                size="large"
                edge="start"
                onClick={() => redirectToExternalPage("https://www.google.com")}
                aria-label="menu"
                variant={"MainIcon"}
              >
                <Facebook />
              </IconButton>

              <IconButton
                size="large"
                edge="start"
                onClick={() => redirectToExternalPage("https://www.google.com")}
                aria-label="menu"
                variant={"MainIcon"}
              >
                <WhatsApp />
              </IconButton>
            </motion.div>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

export default MenuResponsive;
