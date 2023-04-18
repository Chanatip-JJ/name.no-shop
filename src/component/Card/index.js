import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useState} from 'react' 
import ProductDetail from '../ProductDetail'
import RatingReview from '../Rating';

const ImgMediaCard = ({product,cart,setCart}) => {
  
  let [open,setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  const addToCart = (product) =>{
    let newCart = [...cart]
    let newProduct = newCart.find((item) => item.id === product.id)
  
    if(!newProduct){
      let newProduct = {...product, quantity:1}
      newCart.push(newProduct)
      setCart(newCart)
    }  
  } 
    return (
      <>  
        <Card key={product.id}sx={{ maxWidth: 500 , m:3, mr:3}}>
            <CardMedia
              key={product.id}
              component="img"
              alt={product.title}
              height="300"
              image={`${product.image}`}
              sx={{objectFit: "contain"}}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" >
                  {product.title}
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                  {`AU ${product.price}`} 
              </Typography>
              <RatingReview rating={product.rating}/>
            </CardContent>
            <CardActions>
              <Button  onClick={() => addToCart(product)}size="large" sx={{fontSize:20 ,color:'black'}}>
                  Add to Cart
              </Button>
              <Button onClick={handleOpen} size="large" sx={{fontSize:20 ,color:'black'}}>
                  Detail
                  <ProductDetail
                    product={product}
                    open={open}
                    handleClose={handleClose} 
                  />
              </Button>
            </CardActions>
        </Card>
      </>
    );
  }






export default ImgMediaCard