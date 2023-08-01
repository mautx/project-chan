import { useMediaQuery } from "@mui/material";
import theme from "../themes/defaultTheme";
import Box from "@mui/material/Box";
import { motion } from "framer-motion";
import Grid from "@mui/material/Unstable_Grid2";
import TemplateChipComponent from "./templateChipComponent";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import { AccessAlarm, AddTask } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import TitlebarImageList from "./imageList";
function TemplateChip({ color }) {
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Box
        sx={{
          width: "100vw",
          minHeight: "65vh",
          backgroundColor: color,
        }}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        {" "}
        <motion.div
          initial={{ opacity: 1, y: 45 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Grid container spacing={2} width="80vw">
            <Box display="flex" flexDirection="column" alignItems="center">
              <TitlebarImageList></TitlebarImageList>
            </Box>
          </Grid>
        </motion.div>
      </Box>
    </>
  );
}

export default TemplateChip;
