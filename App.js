import Info from "./componens/Info";
import Form from "./componens/Header/Form";
import Weather from "./componens/Header/Weather";
import React from "react";
import ThisDay from "./componens/ThisDay/ThisDay";
import WeekContainer from "./componens/WeekContainer";
import { API_KEY } from "./config";



class App extends React.Component {
  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    pressure: undefined,
    sunset: undefined,
    error: undefined,
  }
  gettingWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;


    if (city) {
      const api_url = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await api_url.json();

      const sunset = data.sys.sunset;
      const date = new Date();
      date.setTime(sunset);
      const sunset_date = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

      this.setState({
        temp: data.main.temp,
        city: data.name,
        country: data.sys.country,
        pressure: data.main.pressure,
        sunset: sunset_date,
        error: undefined,
      })
    } else {
      this.setState({
        temp: undefined,
        city: undefined,
        country: undefined,
        pressure: undefined,
        sunset: undefined,
        error: "Введите название города",
      })
    }

  };
  render() {
    return (
      <div >

        <div className="header">
          <div className="logo"></div>
          <div className="info"><Info /></div>
         
          <div className="city"><Form weatherMethod={this.gettingWeather} /></div>
        </div>
        <div className="main">
        <div className="this_day">
          <ThisDay
            temp={this.state.temp}
            city={this.state.city}
          />
        </div>
        <div className="weatherThisDay">
        <Weather
          
          city={this.state.city}
          country={this.state.country}
          pressure={this.state.pressure}
          sunset={this.state.sunset}
          error={this.state.error}
        /></div></div>
        <div className="App">
          < WeekContainer />
        </div>
      </div>



    );
  }
}

export default App;
