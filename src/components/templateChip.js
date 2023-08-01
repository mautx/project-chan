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
function TemplateChip({ color }) {
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

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
            <Grid xl={4} xs={12} lg={4}>
              <TemplateChipComponent
                componentIcon={
                  <FlashOnIcon fontSize="large" variant="MainIcon" />
                }
                bodyTitle="Máquina láser"
                bodyText="Sumérgete en un mundo de posibilidades en nuestro taller de acrílico con tecnología láser de última generación, que ofrece ventajas inigualables: precisión milimétrica, velocidad en los procesos y acabados impecables que maravillarán tus sentidos."
              />
            </Grid>
            <Grid xl={4} xs={12} lg={4}>
              <TemplateChipComponent
                componentIcon={
                  <AccessAlarm fontSize="large" variant="MainIcon" />
                }
                bodyTitle="Entregas urgentes"
                bodyText="Ofrecemos entregas urgentes para que obtengas tus proyectos en tiempo récord, sin comprometer la calidad y el detalle."
              />
            </Grid>
            <Grid xl={4} xs={12} lg={4}>
              <TemplateChipComponent
                componentIcon={<AddTask fontSize="large" variant="MainIcon" />}
                bodyTitle="Excelente calidad"
                bodyText="No solo garantizamos entregas urgentes, sino que también te ofrecemos una excelente calidad en cada proyecto, superando tus expectativas con acabados impecables."
              />
            </Grid>
            <Grid xl={12} xs={12}>
              <Box
                margin={isMobile ? "1vw" : "1vw"}
                display="flex"
                flexDirection="column"
                alignItems="center"
              >
                <img
                  height="300vh"
                  src="/images/laser-machine.svg"
                  srcSet="/images/laser-machine.svg"
                  alt="laser-machine-svg"
                  loading="lazy"
                />
              </Box>
            </Grid>
            <Grid xl={12} xs={12}>
              <Box
                margin={isMobile ? "3vw" : "2vw"}
                display="flex"
                flexDirection="column"
                alignItems="center"
              >
                <Typography
                  variant="h3"
                  color={theme.palette.text.primary}
                  margin="2vh"
                >
                  <span
                    style={{
                      color: theme.palette.text.secondary,
                      fontWeight: "bold",
                    }}
                  >
                    Bienvenido
                  </span>{" "}
                  a nuestra página web.
                </Typography>
                <Typography variant="h5" color={theme.palette.text.primary} margin="2vh">
                  La{" "}
                  <span
                    style={{
                      color: theme.palette.text.secondary,
                      fontWeight: "bold",
                    }}
                  >
                    calidad profesional{" "}
                  </span>{" "}
                  es nuestro compromiso principal. Nos enorgullecemos de ofrecer
                  productos de acrílico de primera calidad, fabricados con
                  precisión y cuidado para satisfacer las necesidades de
                  nuestros clientes. Estamos ubicados en{" "}
                  <span
                    style={{
                      color: theme.palette.text.secondary,
                      fontWeight: "bold",
                    }}
                  >
                    Naucalpan
                  </span>
                  , lo que nos permite servir eficientemente a clientes locales
                  y brindar un servicio rápido y confiable. Nuestro equipo{" "}
                  <span
                    style={{
                      color: theme.palette.text.secondary,
                      fontWeight: "bold",
                    }}
                  >
                    altamente capacitado{" "}
                  </span>{" "}
                  y nuestra experiencia en el campo nos permiten cumplir
                  rigurosamente con los tiempos de entrega, garantizando que
                  recibas tus productos de acrílico justo a tiempo. Ya sea para
                  proyectos comerciales o personales, estamos aquí para
                  ofrecerte soluciones a medida con{" "}
                  <span
                    style={{
                      color: theme.palette.text.secondary,
                      fontWeight: "bold",
                    }}
                  >
                    diseños personalizados
                  </span>{" "}
                  que se adapten perfectamente a tus requerimientos.
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
