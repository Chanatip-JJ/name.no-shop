import { Typography,Box } from "@mui/material";
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import PhoneAndroidRoundedIcon from '@mui/icons-material/PhoneAndroidRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
const ContactUs = () => {
    return (
            <>
              <Box sx={{
                height: 400,
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems:'center'
            }}>
                <Typography 
                    variant='h3'
                    sx={{
                    fontFamily:'monospace' ,
                    fontSize: 100,
                    color:'black'
                    }}>
                    How can I help?
                </Typography>
            </Box>
            <Box sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems:'center'}}
            >
                <EmailRoundedIcon sx={{fontSize:200,mr:2}}/>
                <PhoneAndroidRoundedIcon sx={{fontSize:200, mr:2}}/>
                <HomeRoundedIcon sx={{fontSize:200, mr:2}}/>
                <LocationOnRoundedIcon sx={{fontSize:200, mr:2}}/>
            </Box>
            </>
    );
}

export default ContactUs