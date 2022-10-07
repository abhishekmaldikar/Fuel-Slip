import React,{useState} from 'react'
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { Grid } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import LoadingButton from '@mui/lab/LoadingButton';



const StyledTextField = styled(TextField)(({ theme }) => ({
    margin:'1.6rem',
    width: "175px",
    
  }));


const fuelType = [

  {
    value: 'Petrol',
    label: 'Petrol',
  },
  {
    value: 'Diesel',
    label: 'Diesel',
  },

];



const HeroSection = () => {

  const [loading, setLoading] = useState(false);
  function handleClick() {
    setLoading(true);
  }

    return (
        <div className='HeroSection'>
            <Box 

            component='form'
             
                sx={{
                    width: '40%',
                    height: '40%',
                    xs:300,
                    mx:'auto',
                    my:20,
                    backgroundColor: '#bdbdbd',
                   
                    
                }}
                
            >
      <Grid 
      container 
      
      
      justifyContent="space-around"
      alignItems="center"
      
      >
      
            
      <StyledTextField
        
        id="demo-helper-text-aligned-no-helper"
        label="Name"
      />
      <StyledTextField
        
        id="demo-helper-text-aligned-no-helper"
        label="Vehicle no."
      />
      <TextField
          id="filled-select-currency"
          select
          label="Select"
          helperText="Select your FuelType"
          variant="filled"
          sx={{
            margin: "1.6rem",
            width: "175px",
          }}
        >
          
          {fuelType.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
          
        </TextField>
      <StyledTextField
        
        id="demo-helper-text-aligned-no-helper"
        label="Fuel in Ltrs."
      />
      <StyledTextField
    
      id="demo-helper-text-aligned-no-helper"
      label="Cost Center"
      />
      <StyledTextField
    
        id="demo-helper-text-aligned-no-helper"
        label="Authorised Signature"
      />
      <StyledTextField
        
        id="demo-helper-text-aligned-no-helper"
        label="KM Record/Reservation No."
        
      />
      <StyledTextField
      
        id="demo-helper-text-aligned-no-helper"
        label="Signature"
      />
      
      </Grid>
      
      <LoadingButton
          onClick={handleClick}
          loading={loading}
          loadingPosition="end"
          variant="contained"
          justifyContent="space-around"
          alignItems="center"
      >
          Submit
      </LoadingButton>
            
      </Box>
      
        </div>
    )
}

export default HeroSection