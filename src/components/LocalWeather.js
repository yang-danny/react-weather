import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import WbTwilightIcon from '@mui/icons-material/WbTwilight';
import InvertColorsIcon from '@mui/icons-material/InvertColors';
import UmbrellaIcon from '@mui/icons-material/Umbrella';
import WindPowerIcon from '@mui/icons-material/WindPower';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Grid from '@mui/material/Unstable_Grid2';
import formatToLocalTime, { iconUrlFromCode,formatTime } from '../services'

function LocalWeather() {
  //load weather data from local storage
 const weatherData=JSON.parse(localStorage.getItem('weather'))

  return (
    <Box sx={{ textAlign: 'center', fontFamily: 'default', }}>
      <Box sx={{  mx: 'auto', mb:'auto', width: '75%', textAlign: 'left', fontSize: 'h4.fontSize', fontWeight: 'light' }}>
      <p> Location</p> 
        </Box>
      <Paper  sx={{ mx: 'auto',mb:'auto', p:'5px', width: '75%', border: 0,
      boxShadow: '10px 15px 30px 5px #646464', textAlign: 'center',borderRadius: '16px'  }}>
        <Box sx={{ fontSize: 'h4.fontSize', fontWeight: 'light' }}>
         <p>{weatherData.city.name}, {weatherData.city.country} </p> 
        </Box>
        <Box sx={{ fontWeight: 'medium', }}>
       <p>Local Time: {formatToLocalTime(weatherData.city.timezone)} </p>
        </Box> 
        </Paper>
        <Box sx={{  mx: 'auto', mb:'auto', width: '75%', textAlign: 'left', fontSize: 'h4.fontSize', fontWeight: 'light' }}>
      <p> Local Weather</p> 
        </Box>
        <Paper  sx={{ mx: 'auto', p: '2px 4px', mt:'12px', width: '75%', border: 0,
      boxShadow: '10px 15px 30px 5px #646464', textAlign: 'center',borderRadius: '16px'  }}>
      <Grid container spacing={1}>
        <Grid xs={4}>
        <Box sx={{textAlign: 'right',lineHeight: 8  }}>
          <img src={iconUrlFromCode(weatherData.list[0].weather[0].icon)} alt=''/>
        </Box>
        </Grid>
        <Grid xs={4}>
        <Typography variant="h5" gutterBottom>
        <p >{weatherData.list[0].weather[0].main}</p>
      </Typography>
      <Typography variant="h6" gutterBottom>
        <p >{weatherData.list[0].weather[0].description}</p>
      </Typography>
        </Grid>
        <Grid xs={4}>
        <Box sx={{ textAlign: 'left', fontSize: 'h4.fontSize', fontWeight: 'light' }}>
          <p >{Math.round(weatherData.list[0].main.temp)}°C</p>
        </Box>
        </Grid>
           <Grid sx={{ mx: 'auto'}} container spacing={{ xs: 1, md: 2 }} >
           <Grid xs={12} sm={6} md={3} minHeight={60} minWidth={100} display='flex' justifyContent="center" alignItems="center">
          <ThermostatIcon/><p>Body feel: {Math.round(weatherData.list[0].main.feels_like)}°</p>
          </Grid>
          <Grid xs={12} sm={6} md={3} minHeight={60} minWidth={100} display='flex' justifyContent="center" alignItems="center">
          <InvertColorsIcon/><p>Humidity: {weatherData.list[0].main.humidity}%</p>
          </Grid>
          <Grid xs={12} sm={6} md={3} minHeight={60} minWidth={100} display='flex' justifyContent="center" alignItems="center">
          <ArrowDownwardIcon/><p>Low: {Math.round(weatherData.list[0].main.temp_min)}°C</p>
          </Grid>
          <Grid xs={12} sm={6} md={3} minHeight={60} minWidth={100} display='flex' justifyContent="center" alignItems="center">
          <ArrowUpwardIcon/><p>High: {Math.round(weatherData.list[0].main.temp_max)}°C</p>
          </Grid>
          <Grid xs={12} sm={6} md={3} minHeight={60} minWidth={100} display='flex' justifyContent="center" alignItems="center">
          <WindPowerIcon/><p>Wind: {Math.round(weatherData.list[0].wind.speed*10)/10} km/h</p>
          </Grid>
          <Grid xs={12} sm={6} md={3} minHeight={60} minWidth={100} display='flex' justifyContent="center" alignItems="center">
          <UmbrellaIcon/><p>Precipitation: {weatherData.list[0].pop*100}%</p>
          </Grid>
          <Grid xs={12} sm={6} md={3} minHeight={60} minWidth={100} display='flex' justifyContent="center" alignItems="center">
          <WbSunnyIcon/><p>Rise: {formatTime( weatherData.city.sunrise, weatherData.city.timezoon, "hh:mm a")} </p>
          </Grid>
          <Grid xs={12} sm={6} md={3} minHeight={60} minWidth={100} display='flex' justifyContent="center" alignItems="center">
          <WbTwilightIcon/><p>Set: {formatTime( weatherData.city.sunset, weatherData.city.timezoon, "hh:mm a")}</p>
          </Grid>
      </Grid>
      </Grid>
    </Paper>
        </Box>
  )
}


export default LocalWeather