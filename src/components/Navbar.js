import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import { Toolbar,Grid, Tabs, Tab, Button, Typography, Drawer, useTheme, useMediaQuery } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Box } from '@mui/system';
import DrawerC from './Drawer';

const Navbar = () => {
    const [value,setValue]=useState(false);
    const theme = useTheme(); 
    const isMatch = useMediaQuery(theme.breakpoints.down('sm')); 
 return (
    <>
     <AppBar sx={{background:'linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)'}}>
         <Toolbar>
         {
             isMatch ? 
             <>
              <Typography>
                 <AddShoppingCartIcon />
            </Typography>
             <DrawerC />
             </> :

             <Grid container sx={{placeItems:'center'}}>
             <Grid item xs={2} >
                 <Typography>
                 <AddShoppingCartIcon />
                 </Typography>
             </Grid>
             <Grid item xs={6}>
                 <Tabs 
                    value={value}
                    onChange={ (e,val) => setValue(val)}
                    textColor="inherit"
                    indicatorColor="secondary">

                     <Tab label="PRODUCTS" />
                     <Tab label="SERVICES" />
                     <Tab label="PRICING" />
                     <Tab label="CONTACTS" />
                 </Tabs>
             </Grid>
             <Grid item xs={1}></Grid>
             <Grid item xs={3}>
                 <Box display="flex">
                 <Button  sx={{marginLeft:'auto', background:'linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)'}} variant="contained">Sign in</Button>
                 <Button sx={{marginLeft:1, background:'linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)'}} variant="contained">Sign Up</Button>
                 </Box>
             </Grid>
          </Grid>
         }
            
         </Toolbar>
     </AppBar>
    </>
  )
}

export default Navbar