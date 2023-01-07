import React from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

export default function CityTabs(props) {
  const [city, setCity] = React.useState('Sydney');
  const handleChange = (event, selectedCity) => {
    setCity(selectedCity);
    props.onChange(selectedCity);
  };
  return (
    <Box sx={{ mx: 'auto', width: '50%', textAlign: 'center', pt:'2rem', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <Tabs
        value={city}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        aria-label="scrollable tabs "
        sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}
      >
         <Tab sx={{color: '#fff', '&.Mui-selected': {color: '#002884'}}} label="Sydney" value='Sydney'/>
         <Tab sx={{color: '#fff', '&.Mui-selected': {color: '#002884'}}} label="Melbourne" value='Melbourne' />
         <Tab sx={{color: '#fff', '&.Mui-selected': {color: '#002884'}}} label="Brisbane" value='Brisbane'/>
         <Tab sx={{color: '#fff', '&.Mui-selected': {color: '#002884'}}} label="Canberra" value='Canberra'/>
         <Tab sx={{color: '#fff', '&.Mui-selected': {color: '#002884'}}} label="Adelaide" value='Adelaide'/>
         <Tab sx={{color: '#fff', '&.Mui-selected': {color: '#002884'}}} label="Perth" value='Perth'/>
         <Tab sx={{color: '#fff', '&.Mui-selected': {color: '#002884'}}} label="Hobart" value='Hobart'/>
         <Tab sx={{color: '#fff', '&.Mui-selected': {color: '#002884'}}} label="Darwin" value='Darwin' />
      </Tabs>
    </Box>
  );
}