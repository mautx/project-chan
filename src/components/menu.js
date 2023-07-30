import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";

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



//State of menu bar
function MenuResponsive() {
  const [state, setState] = useState(false);

  //Function to redirect to an external page
  const redirectToExternalPage = (url) => {
    window.location.href = url;
  };

  //Function to modify the state of the menu drawer within parameters
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState(open);
  };

  //The list that shows in the drawer menú section. I map the list and assign icon within the list index.
  const list = () => (
    <List variant={"MainList"}>
      {["Inicio", "Productos", "Servicios", "Galería", "Contacto"].map(
        (text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon variant={"MainIcon"}>
                {index === 0 ? <Home color={"secondary"} /> : undefined}
                {index === 1 ? <Category color={"secondary"} /> : undefined}
                {index === 2 ? <HomeRepairService color={"secondary"} /> : undefined}
                {index === 3 ? <Collections color={"secondary"} /> : undefined}
                {index === 4 ? <ContactPhone color={"secondary"} /> : undefined}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        )
      )}
    </List>
  );

  return (

      //Main surface of the menu bar. It has three icons redirecting to social media networks
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" variant={"MainNav"}>
        <Toolbar>
          <IconButton onClick={toggleDrawer(true)} variant={"MainIcon"}>
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
              onClick={() => redirectToExternalPage("https://www.google.com")}
              variant={"MainIcon"}
            >
              <Twitter />
            </IconButton>

            <IconButton
              onClick={() => redirectToExternalPage("https://www.google.com")}
              variant={"MainIcon"}
            >
              <Facebook />
            </IconButton>

            <IconButton
              onClick={() => redirectToExternalPage("https://www.google.com")}
              variant={"MainIcon"}
            >
              <WhatsApp />
            </IconButton>
          </motion.div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default MenuResponsive;
