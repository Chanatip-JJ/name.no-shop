import {useParams} from 'react-router-dom'
import { useEffect,useState } from 'react'
import Grid from '@mui/material/Grid'
import ImgCard from '../Card'
import { Box, IconButton, Tooltip } from '@mui/material'
import SortIcon from '@mui/icons-material/Sort';
const Categories = ({cart,setCart}) => {
    let {page} = useParams()
    let [products,setProducts] = useState([])
    useEffect(() => {
      fetch(`https://fakestoreapi.com/products/category/${page}`)
      .then(response => response.json())
      .then(data => setProducts(data))}
      ,[page])
    
    const handleSortPrice = () => {
        let newProducts = [...products].sort((a,b) =>{
            return a.price - b.price
        })
        setProducts(newProducts)
    } 

    return (
            <>  
                <Box>
                    <Tooltip title="lowest to highest price" sx={{m:1}} arrow>
                        <IconButton onClick={() => handleSortPrice(products)}>
                            <SortIcon sx={{fontSize:50}}/>
                        </IconButton >
                    </Tooltip>
                </Box>
                <Grid container spacing={3} sx={{paddingLeft:'20px',paddingRight:'20px' ,paddingTop:'40px'}}>
                    {products.map((product) => (
                        <Grid key={product.id}item xs={12} sm={6} md={4} lg={3}> 
                        <ImgCard product={product} cart={cart} setCart={setCart}/>
                        </Grid>)
                    )}
                </Grid>
            </>
    );
}

export default Categories