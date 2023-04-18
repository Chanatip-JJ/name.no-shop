import Box from '@mui/material/Box'; 
import BackGround from '../../Static/background.png'
import { Typography } from '@mui/material';
const Banner = () =>{
    return (
        <>
        <Box
            sx={{
                backgroundImage: `url(${BackGround})`,
                backgroundRepeat: "no-repeat",
                backgroundColor: "black",
                backgroundAttachment: "fixed",
                backgroundPosition: "center",
                backgroundSize: "cover",
                height: 400,
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems:'center'
            }}
        >
            <Typography 
                variant='h3'
                sx={{
                fontFamily:'monospace' ,
                fontSize: 50,
                color:'white'
                
                }}>
                WELCOME TO NAME.NO SHOP
            </Typography>
        </Box>
        </>
    )
}

export default Banner 