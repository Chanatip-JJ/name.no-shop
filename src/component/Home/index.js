import { Typography} from '@mui/material';
import Banner from '../Banner'
import ImgCard from '../Card'
import Box from '@mui/material/Box'; 
import {useEffect,useState} from 'react'
import Grid from '@mui/material/Grid'

const Home = ({cart,setCart}) => {
    let [products,setProducts] = useState([])
    useEffect(() => {
      fetch("https://fakestoreapi.com/products?limit=8")
      .then(response => response.json())
      .then(data => setProducts(data))}
      ,[])
    return (
        <>
          <Banner/>
          <Box 
            sx={{
                m:6,
                justifyContent:'center',
                display: "flex",
                alignItems:'center'
            }}
           >
            <Typography sx={{fontFamily:'monospace' , fontSize:50,color:'black'}}>
                Our Products    
            </Typography>
          </Box>
          <Grid container spacing={3} sx={{paddingLeft:'20px',paddingRight:'20px'}}>
              {products.map((product) => (
                <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}> 
                  <ImgCard product={product} cart={cart} setCart={setCart}/>
                </Grid>)
              )}
          </Grid>
        </>
    )
}

export default Home