import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import Stack from '@mui/material/Stack'
import RatingReview from '../Rating';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    height: 950,
    width: 800,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };


const ProductDetail = ({product,open,handleClose}) => {
    
    return (
        <>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography 
                    id="modal-modal-title" 
                    variant="h6" 
                    component="h2"
                    sx={{
                        fontSize: 35
                    }}>
                    {product.title}
                </Typography>
                <Stack direction="row" spacing={2}>
                    <Box
                        key={product.id} 
                        component="img"
                        src={`${product.image}`}
                        sx={{
                            height: 400,
                            width: 400,
                            objectFit: "contain",
                            mt:3
                        }}
                    />
                    <Box>
                        <Typography sx={{ mt: 3 ,fontSize:30}}>
                            Category : {product.category}
                        </Typography>
                        <Typography sx={{ mt: 1 ,fontSize:30}}>
                           AU {product.price}
                        </Typography>
                        <RatingReview rating={product.rating}/>
                    </Box>
                </Stack>
                <Typography 
                    id="modal-modal-description" 
                    sx={{ mt: 2, fontSize: 23 }}>
                    {product.description}
                </Typography>
            </Box>
        </Modal>
        </>
    )
}

export default ProductDetail