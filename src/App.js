import React from'react';
import { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import CityTabs from './components/CityTaps';
import ThemeSwitch from './components/ThemeSwitch';
import SearchCity from './components/SearchCity';
import LocalWeather from './components/LocalWeather';
import ForecastWeather from './components/ForecastWeather';
import Footer from './components/Footer';
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import {BackgroundImage} from './services'
  
function App() {
  const API_KEY = "6068988c93bdf2961e4cde8b6b1fe395";
  const [city, setCity] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [searchCity, setSearchCity] = useState('');
  const [weather, setWeather] = useState('')
  const weatherData=JSON.parse(localStorage.getItem('weather'))

  //hadle user select city from top city tabs
  useEffect(() => {
    getWeatherData(city)
  }, [city]);
  //hadle user search city from search bar
  useEffect(() => {
    getWeatherData(searchCity)
  }, [searchCity]);

  //handle fetch weather data from API
  useEffect(() => {
  }, [weather]);
  
  //fetch weather data from weather API using input city name
  const getWeatherData = async (location) => {
    if (location){
    setWeather([])
    //define search type is by city name or latitude and longitude
    let how_to_search =
      typeof location === 'string'
        ? `q=${location}`
        : `lat=${location[0]}&lon=${location[1]}`;
        const url = 'https://api.openweathermap.org/data/2.5/forecast?';
    //fetch weather data from weather API using url
    try {
      let res = await fetch(`${url}${how_to_search}&appid=${API_KEY}&units=metric`);
      let data = await res.json();
      //can not fetch data by input city
      if (data.cod !== '200') {
       alert('Location Not Found')
        return;
      }
      //store weather data in local storage
      localStorage.setItem("weather", JSON.stringify(data))
      //pass weather data to weather hook
      setWeather(data)
    } catch (error) {
      console.log(error);
    }
  }
  }

  //get local weather when page load
  window.addEventListener('load', function () {
    setLocalWeather()
  });
  //get local location by latitude and longitude
  const setLocalWeather=()=>{
    navigator.geolocation.getCurrentPosition(localLocation);
  }
  //get local weather data by geolocation
  const localLocation = (location) => {
    if (location){
    const { latitude, longitude } = location.coords;
    getWeatherData([latitude, longitude]);
    } else return
  };

  //customize dark theme
  const darkTheme = createTheme({
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            backgroundImage: `linear-gradient(180deg, rgba(32,20,37,1) 20%, rgba(172,178,186,1) 100%)`,
          },
        },
      },
    },
      palette: {
        mode:'dark',
        background: {
         paper:'#797986', 
        }
      },
  });
  //customize light theme
  const lightTheme = createTheme({
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            backgroundImage: `linear-gradient(180deg, rgba(236,220,242,1) 0%, rgba(198,234,245,1) 100%)`,
          },
        },
      },
    },
    palette: {
      background: {
      paper:'#ffffff',
    }
    },
  });
  
  return (
    <Box id='container' 
      sx={{
        m:'4rem',
        width: 'auto',
        height: '100%',
        borderRadius: '16px',
        backgroundImage:`url(${BackgroundImage(weatherData)})`,
    backgroundRepeat: "no-repeat",
			backgroundPosition: "center center",  
      backgroundSize: "cover",  
    color: '#fff',
        boxShadow:'10px 15px 30px 5px #646464',
        border: 0,
      }}
    >
      <ThemeProvider theme={darkMode? darkTheme:lightTheme}>
         <CssBaseline />
      <Box sx={{ display: 'flex', alignItems:'center',justifyItems:'center' }}>
        <CityTabs onChange={(value)=> setCity(value)} />
        <ThemeSwitch  checked={darkMode}  onChange={()=> setDarkMode(!darkMode)} sx={{ m: 1 }} />
      </Box>
      <SearchCity   onSubmit={(value)=> setSearchCity(value)} onClick={()=> setLocalWeather()}/>       
      <LocalWeather/>
      <ForecastWeather/>
      <Footer/>
      </ThemeProvider>
  </Box>
  );
}

export default App;
