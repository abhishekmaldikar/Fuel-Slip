import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { createTheme } from '@mui/material/styles';
import blue from '@mui/material/colors/blue';


const Header = () => {

    const theme = createTheme({
        palette: {
          primary: blue,
        },
      });
    return (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar >
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Mahindra
                        </Typography>
                        <Button color="inherit">Login</Button>
                        
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    )
}

export default Header