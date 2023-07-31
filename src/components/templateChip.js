import {useMediaQuery} from "@mui/material";
import theme from "../themes/defaultTheme";
import Box from "@mui/material/Box";
import {motion} from "framer-motion";
import Grid from "@mui/material/Unstable_Grid2";
import TemplateChipComponent from "./templateChipComponent";
import FlashOnIcon from '@mui/icons-material/FlashOn';
import {AccessAlarm, AddTask} from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
function TemplateChip({color}) {
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Box
        sx={{
          width: "100vw",
          minHeight: "65vh",
          backgroundColor: color,
        }}
        display="flex" flexDirection="column" alignItems="center"
      >
        {" "}
        <motion.div
          initial={{ opacity: 1, y: 45 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Grid container spacing={2} width="80vw">
            <Grid xl={4} xs={12}>
              <TemplateChipComponent componentIcon={<FlashOnIcon fontSize="large" variant="MainIcon"/>} bodyTitle="Máquina láser" bodyText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae fringilla lacus. In hac habitasse platea dictumst. Vestibulum blandit a." />
            </Grid>
            <Grid xl={4} xs={12}>
                <TemplateChipComponent componentIcon={<AccessAlarm fontSize="large" variant="MainIcon"/>} bodyTitle="Entregas urgentes" bodyText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae fringilla lacus. In hac habitasse platea dictumst. Vestibulum blandit a." />
            </Grid>
            <Grid xl={4} xs={12}>
                <TemplateChipComponent componentIcon={<AddTask fontSize="large" variant="MainIcon"/>} bodyTitle="Excelente calidad" bodyText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae fringilla lacus. In hac habitasse platea dictumst. Vestibulum blandit a." />
            </Grid>
              <Grid xl={12} xs={12}>
                  <Box margin={isMobile ? '3vw' : '5vw'} display="flex" flexDirection="column" alignItems="center">

                      <Typography variant="h3" color={theme.palette.text.primary} margin="2vh">
                          dddd
                      </Typography>
                      <Typography variant="body" color={theme.palette.text.primary}>
                          ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                      </Typography>
                  </Box>
              </Grid>
          </Grid>
        </motion.div>
      </Box>
    </>
  );
}

export default TemplateChip;