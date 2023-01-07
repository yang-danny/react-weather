import React from'react';
import { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import CityTabs from './components/CityTaps';
import './App.css';

function App() {
  const [city, setCity] = useState("");
  useEffect(() => {

  }, [city]);
  return (
    <Box id='container' 
      sx={{
        m:'4rem',
        width: 'auto',
        height: '100%',
        borderRadius: '16px',
    //   backgroundImage:`url(${BackgroundImage(weatherData)})`,
    backgroundRepeat: "no-repeat",
			backgroundPosition: "center center",  
      backgroundSize: "cover",  
    color: '#fff',
        boxShadow:'10px 15px 30px 5px #646464',
        border: 0,
      }}
    >
     
      
            <Box sx={{ display: 'flex', alignItems:'center',justifyItems:'center' }}>
                <CityTabs onChange={(value)=> setCity(value)} />
                
            </Box>
             
   
  </Box>
  );
}

export default App;
