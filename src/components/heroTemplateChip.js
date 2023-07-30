import Box from "@mui/material/Box";
import Grid from '@mui/material/Unstable_Grid2';
import {useMediaQuery} from "@mui/material";
import theme from "../themes/defaultTheme";
import { motion } from "framer-motion";

//Hero section template, in desktop shows two columns of data, in mobile the right-most
//column is hidden to improve responsiveness
function HeroTemplateChip({ componentCrop1, componentCrop2, color }) {
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Box
        sx={{
          width: "100vw",
          minHeight: "65vh",
          backgroundColor: color,
        }}
      >
        {" "}
        <motion.div
          initial={{ opacity: 1, x: -25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Grid container spacing={2}>
            <Grid xl={6} xs={12}>
              {componentCrop1}
            </Grid>

            {isMobile ? null : (
              <Grid xl={6} xs={12}>
                {componentCrop2}
              </Grid>
            )}
          </Grid>{" "}
        </motion.div>
      </Box>
    </>
  );
}

export default HeroTemplateChip;