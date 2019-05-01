import React, { Component } from 'react';
import axios from 'axios';

// Components
import WeatherItems from './WeatherItems';

class Weather extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fullDetails: []
        };

        this.fetchData = this.fetchData.bind(this);
    }

    async fetchData() {
        const country = 'Vietnam',
              accessToken = '166592501bdf244e93293cad1bcbee2f',
              url = `https://api.openweathermap.org/data/2.5/forecast?q=${country}&APPID=${accessToken}`;

        
        const fetchedData = await axios.get(url)
            .then(response => response)
            .catch(err => console.log(err));
        // console.log(fetchedData);

        const demanedData = fetchedData.data.list.filter(each => {
            return (each['dt_txt'].includes('12:00:00'))
        });
        // console.log(demanedData);

        return demanedData;
    }

    async componentDidMount() {
        const dataFromAPI = await this.fetchData();
        
        dataFromAPI.forEach((data) => {
            this.setState({
                fullDetails: [...dataFromAPI]
            });
        });
    }
    
    render () {
        return <WeatherItems display={ this.state.fullDetails } />
    }
}

export default Weather;