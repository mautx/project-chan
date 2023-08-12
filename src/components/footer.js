import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import theme from "../themes/defaultTheme";
import * as React from "react";
import { Facebook, WhatsApp } from "@mui/icons-material";
import { useMediaQuery } from "@mui/material";

//State of menu bar
function Footer() {
  const redirectToExternalPage = (url) => {
    window.location.href = url;
  };
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    //Main surface of the menu bar. It has three icons redirecting to social media networks
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" variant={"MainNav"}>
        <Toolbar>
          {isMobile ? (
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Acricristal
            </Typography>
          ) : (
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Acricristal
            </Typography>
          )}

          {/* New menu begins */}
          <Box flexDirection={"row"} sx={{ marginRight: "2vw" }}>
            {isMobile ? null :
                (
                    <Typography variant="body1" color={theme.palette.text.secondary}>Láminas y domos AGH SA de CV Todos los derechos reservados. | Página realizada por: github.com/mautx</Typography>
                )
            }



          </Box>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >


            {isMobile ? (
              <IconButton
                size="xl"
                onClick={() =>
                  redirectToExternalPage(
                    "https://api.whatsapp.com/send?phone=525518370248"
                  )
                }
                variant={"MainIcon"}
              >
                <WhatsApp />
              </IconButton>
            ) : (
              <>
                {" "}
                <IconButton
                  onClick={() =>
                    redirectToExternalPage(
                      "https://www.facebook.com/LAMINASDOMOSAGH/"
                    )
                  }
                  variant={"MainIcon"}
                >
                  <Facebook />
                </IconButton>
                <IconButton
                  onClick={() =>
                    redirectToExternalPage(
                      "https://api.whatsapp.com/send?phone=525518370248"
                    )
                  }
                  variant={"MainIcon"}
                >
                  <WhatsApp />
                </IconButton>
              </>
            )}
          </motion.div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Footer;