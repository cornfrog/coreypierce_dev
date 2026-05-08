import { Box, Typography } from "@mui/material";

const Footer = () => {
    return (
        <Box
            sx={{
                py: 2,
                borderTop: '1px solid white',
                textAlign: 'center',
                bgcolor: 'black',
                color: 'white'
            }}
        >
            <Typography sx={{fontSize: '1.25rem'}}>Made by Corey Pierce</Typography>
        </Box>
    );
};

export default Footer;