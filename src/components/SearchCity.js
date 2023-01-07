import React from 'react'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function SearchCity(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const search = event.target.search.value;
    if (search) {
    props.onSubmit(search)
    event.target.reset();
  }else{
    alert('Please enter a city name.');
  }
}
const handleClick=(event)=>{
  event.preventDefault();
  props.onClick(event.target.clicked)
}
  return (
    <Paper
      component="form"
      sx={{ mx: 'auto', p: '2px 4px', mt:'12px', display: 'flex', alignItems: 'center', width: '50%', border: 0,
      boxShadow: '5px 5px 10px 3px #646464' }}
      onSubmit={handleSubmit}
    >
      <IconButton sx={{ p: '10px' }} aria-label="menu">
        <MenuIcon />
      </IconButton>
      
      <InputBase
        type='text'
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search other cities"
        inputProps={{ 'aria-label': 'search other cities' }}
        id="search"
      />
      <IconButton type="submit"  sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton type="button" onClick={handleClick} color="primary" sx={{ p: '10px' }} aria-label="location">
        <LocationOnIcon />
      </IconButton>
    </Paper>
  );
}