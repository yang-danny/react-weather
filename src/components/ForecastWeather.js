import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import {iconUrlFromCode,formatTime} from '../services'
import CardMedia from '@mui/material/CardMedia';

function ForecastWeather() {
//load weather data from local storage
const weatherDatas=JSON.parse(localStorage.getItem('weather'))
//slice first 6 weather data from data list.
const hourForecast = weatherDatas.list.slice(1,7)
//pick next 5 days weather data from data list
const dayIndex=[7,15,23,31,39]
let dayForecast=weatherDatas.list.filter((_,index)=> dayIndex.includes(index))

  return (
    <Box sx={{ mx: 'auto', width: '75%', textAlign: 'left', pb:'2rem', fontFamily: 'default' }}>
        <Box sx={{ fontSize: 'h5.fontSize', fontWeight: 'light' }}>
          <p >Hourly Forecast</p>
        </Box>
        <Paper  sx={{ mx: 'auto',mb:'auto', p:'5px', width: '100%', border: 0,
      boxShadow: '10px 15px 30px 5px #646464', textAlign: 'center',borderRadius: '16px'  }}>
        <Grid sx={{ mx: 'auto'}} container spacing={{ xs: 1, md: 2 }} display='flex' justifyContent="center" alignItems="center">
           {hourForecast.map((weather, index)=>(
           <Grid  key={index} sx={{textAlign: 'center'}} xs={12} sm={6} md={2} minHeight={60} minWidth={100} >
           <p >{formatTime(weather.dt, weatherDatas.city.timezoon, "hh:mm a")}</p>
           <CardMedia component="img" sx={{mx:'auto', width:'60px'}} image={iconUrlFromCode(weather.weather[0].icon)} alt=''/>
           <p> {weather.weather[0].main}</p>
          <p> {Math.round(weather.main.temp)}°C</p>
          </Grid>
          ))}
      </Grid>
      </Paper>
      
      <Box sx={{ fontSize: 'h5.fontSize', fontWeight: 'light', }}>
          <p >Daily Forecast</p>
        </Box>
        <Paper  sx={{ mx: 'auto',mb:'auto', p:'5px', width: '100%', border: 0,
      boxShadow: '10px 15px 30px 5px #646464', textAlign: 'center',borderRadius: '16px'  }}>
        <Grid sx={{ mx: 'auto'}} container spacing={{ xs: 1, md: 2 }} display='flex' justifyContent="center" alignItems="center">
           {dayForecast.map((weather, index)=>(
           <Grid key={index} sx={{textAlign: 'center'}} xs={12} sm={6} md={2} minHeight={60} minWidth={100} >
           <p >{weather.dt_txt.slice(0, 10)}</p>
           <CardMedia component="img" sx={{mx:'auto', width:'60px'}} image={iconUrlFromCode(weather.weather[0].icon)} alt=''/>
           <p> {weather.weather[0].main}</p>
          <p> {Math.round(weather.main.temp)}°C</p>
          </Grid>
          ))}
      </Grid>
      </Paper>
        </Box>
  )
}

export default ForecastWeather