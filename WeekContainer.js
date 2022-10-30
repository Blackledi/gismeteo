import React from 'react';
import Card from '../componens/Card/Card';

const weatherURL = "https://api.openweathermap.org/data/2.5/forecast?q=Kiev&lang=ru&units=metric&APPID=dc0806960961b3a5b2790372c426d5ab";

class WeekContainer extends React.Component {
  state = {
    days: []
  }

  componentDidMount = () => {
    fetch(weatherURL)
    .then(res => res.json())
    .then(data => {
      const dailyData = data.list.filter(reading => reading.dt_txt.includes("12:00:00"))
      this.setState({days: dailyData})
    })
  }

  formatCards = () => {
    return this.state.days.map((day, index) => <Card day={day} key={index}/>)
  }

  render() {
    return (
      <div className="">
      <h1 className="display-4 jumbotron">Прогноз погоды на 5 дней</h1>
      
        <div className="row justify-content-center">

          {this.formatCards()}

        </div>
      </div>
    )
  }
}
export default WeekContainer;