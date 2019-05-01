import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import WeatherDetails from './WeatherDetails';

class WeatherItems extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fullData: null
        }

        this.convertDate = this.convertDate.bind(this);
        this.kelvinToCelcius = this.kelvinToCelcius.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.calculateTemp = this.calculateTemp.bind(this);
    }

    convertDate = (date) => {
        let displayDate = new Date(date);
        displayDate = displayDate + '';
        return displayDate = displayDate.substring(0, 3);
    };

    kelvinToCelcius = (tempInKelvin) => Math.round(tempInKelvin-273.15);

    calculateTemp = (temp) => {
        let weatherColor, iconSet;

        if(temp >= 30) {
            weatherColor = "red";
            iconSet = "sun";
        } else if(temp >= 26 && temp < 30) {
            weatherColor = "lightblue";
            iconSet = "cloud-sun-rain";
        } else if(temp >= 18 && temp < 26) {
            weatherColor = "#8CA8C1";
            iconSet = "cloud-rain";
        } else if(temp >= 10 && temp < 18) {
            weatherColor = "blue";
            iconSet = "cloud-showers-heavy";
        } else {
            weatherColor = "#D1DCE6";
            iconSet = "snow-flake";
        }

        return {weatherColor, iconSet};
    }

    handleClick = (index) => {
        this.setState({
            fullData: this.props.display[index]
        })
    };
    
    render() {
        const WeatherItem = this.props.display.map((data, index) => {
            const { main, weather, dt_txt } = data,
                    temp = this.kelvinToCelcius(main.temp),
                    status = weather[0].main,
                    description = weather[0].description,
                    date = this.convertDate(dt_txt),
                    { weatherColor, iconSet } = this.calculateTemp(temp);
    
            return <Col key={index} className="text-center">
                        <h4 className="pb-1 mb-1">{date}</h4>
                        <Button color="dark" size="lg" onClick={() => this.handleClick(index)}>
                            <FontAwesomeIcon style={{"color": weatherColor}} icon={iconSet} />
                        </Button> 
                        <p>{temp}<sup>o</sup>C</p>
                        <p>{status} / <span>{description}</span></p>
                    </Col>
        });

        return (
            <div>
                <Container className="p-2 bg-dark text-light rounded">
                    <Row className="mt-1">
                        {WeatherItem}
                    </Row> 
                </Container>
                <p className="text-center mt-2">Data are updated 12:00AM everyday</p>
                <Container>
                    <WeatherDetails data={this.state.fullData} />   
                </Container>
            </div>   
        )
    }
}

export default WeatherItems;