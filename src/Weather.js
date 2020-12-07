import React, { Component } from 'react';
import './styles.css';
import axios from 'axios';

class Weather extends Component{
    state = {
        currentWeatherInfo:null
    }

    componentDidMount(){
        axios.get('http://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=63555eb251399294d4f55b6fa76f94d5')
        .then(res => {

            const abc = res.data;
            this.setState({ currentWeatherInfo : abc});
        })
    }

    render() {
        return (
        <div>
        <div class="textDesign2">The current weather</div>

        <div class='box'>
        <div>
        { this.state.currentWeatherInfo?.weather.map((weather,key) => <h1 class="textDesign" key={key}>{weather.description}</h1>)}
        </div>

        <div class="weathercon">{this.state.currentWeatherInfo?.weather.map((weather,key) => <img key={key} src= {`http://openweathermap.org/img/wn/${weather.icon}.png`}/>)}</div>
        <div class='wave -one'></div>
        <div class='wave -two'></div>
        <div class='wave -three'></div>

        <div class="info">
            <h1 class="location">{this.state.currentWeatherInfo?.name}</h1>
            <h1 class="temp">{`${Math.round(this.state.currentWeatherInfo?.main.temp-273.15)}`}C&deg; {`| ${Math.round((this.state.currentWeatherInfo?.main.temp*9/5)- 459.67)}`}F&deg;</h1>
            
            <br/>
            <h3>Feels Like: {`${Math.round(this.state.currentWeatherInfo?.main.feels_like-273.15)}`}C&deg; {`| ${Math.round((this.state.currentWeatherInfo?.main.feels_like*9/5)- 459.67)}`}F&deg;</h3>
            <h3>Humidity: {this.state.currentWeatherInfo?.main.humidity}</h3>
            
            <br/>
        </div>
        </div>



        
        
        </div>
        )
    }
}

export default Weather;