import { Button, Container, Typography,Grid } from '@mui/material';
import { Stack } from '@mui/material';
import { Box } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import DeleteIcon from '@mui/icons-material/Delete';
import ClearIcon from '@mui/icons-material/Clear';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
const Cart = ({cart,setCart}) => {

    const removeItem = (product) => {
        let existingCart = [...cart]
        let newCart = existingCart.filter((item) => item.id !== product.id)
        setCart(newCart);
    }
    const ClearCart = () => {
        setCart([])
    }

    const AddQuantity = (product) =>{
        let existingCart = [...cart]
        let index = existingCart.findIndex((item) => item.id === product.id)
        existingCart[index].quantity ++;
        setCart(existingCart)
    }

    const reduceQuantity = (product) =>{
        let existingCart = [...cart]
        let index = existingCart.findIndex((item) => item.id === product.id)
        if(existingCart[index].quantity === 1){
            existingCart.splice(index, 1);
        }else{
            existingCart[index].quantity --; 
        }   
        setCart(existingCart)
    }

    const sum = cart.reduce((accumulator, item) => {
        return accumulator + (item.price * item.quantity) ;
      }, 0);

    return (
            <>
                <Container maxWidth="xl" sx={{ mt:6}}>

                    <Box sx={{
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
                            color:'black'
                            }}>
                            My Cart
                        </Typography>
                        <Tooltip title="Clear Cart" arrow>
                            <IconButton onClick={() => ClearCart()}sx={{ml:5}}>
                                <ClearIcon sx={{fontSize:50,color:'black'}}/>
                            </IconButton>
                        </Tooltip>
                    </Box>
                    <Box>
                        <Card sx={{m:2,display: { xs: 'flex', md: 'flex'}}}>
                            <CardContent>
                                <Typography 
                                variant="body1"
                                sx={{
                                fontSize: 25,
                                color:'text.primary'
                                }}>
                                    Summary (Order.no #XXXXXX)
                                </Typography>
                                <Typography 
                                variant="body2"
                                sx={{
                                fontSize: 25,
                                color:'text.secondary'
                                }}
                                >
                                Items : {cart.length}
                                </Typography>
                                <Typography 
                                variant="body2"
                                sx={{
                                fontSize: 25,
                                color:'text.secondary'
                                }}
                                >
                                Total (AU) : {new Intl.NumberFormat('en-AU').format(sum)}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Box>
                    <Stack>    
                        {cart.map((product) => 
                            <Card sx={{m:2,display: { xs: 'flex', md: 'flex' }}}>
                                <Box sx={{mr:4, width:300}}>
                                    <CardMedia 
                                        key={product.id}
                                        component="img"
                                        alt={product.title}
                                        height="250"
                                        image={product.image}
                                        sx={{objectFit: "contain"}}
                                    />
                                </Box>
                                <CardContent>
                                    <Box sx={{width:750}}>
                                        <Typography sx={{fontSize:25 }}>
                                            {product.title}
                                        </Typography >
                                        <Typography sx={{fontSize:25}}>
                                            AU {product.price}
                                        </Typography>
                                        <Typography sx={{fontSize:25}}>
                                            Quantity (Units) : {product.quantity}
                                        </Typography>
                                        <Typography sx={{fontSize:25}}>
                                            Total : {new Intl.NumberFormat('en-AU').format((product.quantity * product.price))}
                                        </Typography>
                                    </Box>
                                </CardContent>
                                <CardActions>
                                    <Box sx={{justifyContent:'center'}}>
                                        <Tooltip title="Reduce" arrow>
                                            <IconButton onClick={() => reduceQuantity(product)} aria-label="reduce">        
                                                <RemoveIcon sx={{fontSize:50,color:'black'}}/>
                                            </IconButton>
                                        </Tooltip>
                                        <Tooltip title="Add" arrow>
                                            <IconButton onClick={() => AddQuantity(product)} aria-label="increase">        
                                                <AddIcon sx={{fontSize:50,color:'black'}}/>
                                            </IconButton>
                                        </Tooltip>
                                        <Tooltip title="Remove" arrow>
                                            <IconButton onClick={() => removeItem(product)} aria-label="remove">        
                                                <DeleteIcon sx={{fontSize:50,color:'black'}}/>
                                            </IconButton>
                                        </Tooltip>
                                    </Box>
                                </CardActions>
                            </Card>
                        )}
                    </Stack>
                </Container>
            </>
    );
}

export default Cart