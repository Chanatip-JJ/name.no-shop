import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import DoNotDisturbAltIcon from '@mui/icons-material/DoNotDisturbAlt';
import {Link} from 'react-router-dom'
import Badge from '@mui/material/Badge';
import { IconButton } from '@mui/material';
const pages = ["men's clothing","women's clothing","jewelery",'Contact us'];

function ResponsiveAppBar({cart}) {
  
  return (
    <AppBar position="static" sx={{ backgroundColor: 'white'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <DoNotDisturbAltIcon sx={{ fontSize: 50, mr: 1 ,color: '#000000'}}/>
          <Typography
            variant="p"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: '#3c3c3c',
              textDecoration: 'none',
              fontSize: 40,
            }}
          >
            NAME.NO
          </Typography>
          <Box sx={{flexGrow: 6, display: { xs: 'flex', md: 'flex' } }}>
            {pages.map((page) => (
              <Link style={{ textDecoration: 'none' }} to={`/${page}`}>
                <Button
                  key={page}
                  sx={{ m:4,my: 2, color: 'white', display: 'block'}}
                  size="large"
                >
                    <Typography sx={{fontSize:25 ,color: '#000000'}}>
                        {page}
                    </Typography>       
                </Button>
              </Link>  
            ))}
          </Box>
          <Box sx={{ flexGrow: 0}}>
              <IconButton sx={{color: 'white'}} size="large" aria-label="cart">
                <Link style={{ textDecoration: 'none' }} to={'/cart'}>
                  <Badge badgeContent={cart.length} color="secondary">
                     <AddShoppingCartIcon sx={{  fontSize: 40 ,color: '#000000'}}/>
                  </Badge>
                </Link>
              </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;