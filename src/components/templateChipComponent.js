import Box from "@mui/material/Box";
import {Paper, useMediaQuery} from "@mui/material";
import theme from "../themes/defaultTheme";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";


function TemplateChipComponent({componentIcon,bodyText, bodyTitle}){

    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    return (

        <Box margin={isMobile ? '3vw' : '5vw'} display="flex" flexDirection="column" alignItems="center">
            <IconButton variant="MainIcon">{componentIcon}</IconButton>
            <Typography variant="h5" color={theme.palette.text.primary} margin="2vh">
                {bodyTitle}
            </Typography>
            <Typography variant="body" color={theme.palette.text.primary}>
                {bodyText}
            </Typography>
        </Box>


    )
}

export default TemplateChipComponent