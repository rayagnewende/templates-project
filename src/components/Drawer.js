import { Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import React, { useState } from 'react'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
const DrawerC = () => {
    const [open, setOpen] = useState(false); 
  return (
    <>
        <Drawer open={open} onClose={ () => setOpen(false)}>
            <List>
                <ListItemButton>
                    <ListItemIcon>
                        <ListItemText>Products</ListItemText>
                    </ListItemIcon>
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <ListItemText>Services</ListItemText>
                    </ListItemIcon>
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <ListItemText>Prix</ListItemText>
                    </ListItemIcon>
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <ListItemText>Contacts</ListItemText>
                    </ListItemIcon>
                </ListItemButton>
            </List>
        </Drawer>

        <IconButton sx={{marginLeft:'auto',color:'white'}} onClick={ () => setOpen(!open)}>
        <MenuRoundedIcon  />
        </IconButton>
    </>
  )
}

export default DrawerC