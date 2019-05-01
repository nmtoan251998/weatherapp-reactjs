import React from 'react';
import { Row, Col, Table } from 'reactstrap';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const WeatherDetails = ({ data }) => {
    const kelvinToCelcius = (tempInKelvin) => Math.round(tempInKelvin-273.15);
    const convertDate = (date) => {
        let displayDate = new Date(date);
        displayDate = displayDate + '';
        return displayDate = displayDate.substring(0, 15);
    };

    if(data) { 
        const displayDate = convertDate(data.dt_txt),
              curTemp = kelvinToCelcius(data.main.temp),
              minTemp = kelvinToCelcius(data.main.temp_min),
              maxTemp = kelvinToCelcius(data.main.temp_max),
              humidity = data.main.humidity,
              cloud = data.clouds.all,
              windSpeed = data.wind.speed,
              seaLevel = data.main.sea_level,
              pressure = data.main.pressure;

        const options = [
            {
                name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
            },
            {
                name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
            },
            {
                name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
            },
            {
                name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
            },
            {
                name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
            },
            {
                name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
            },
            {
                name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
            },
        ];
              
                
        return (
            <Row>
                <Col className="col-4 p-0">
                    <Table borderless striped style={{"fontSize": "14px"}}>
                        <tbody>
                            <tr>
                                <th scope="row">Date: </th>
                                <td colSpan="3">{displayDate}</td>
                            </tr>
                            <tr>
                                <th scope="row">Cloud: </th>
                                <td>{cloud}</td>
                            </tr>
                            <tr>
                                <th scope="row">Temp: </th>
                                <td>Current: {curTemp}<sup>o</sup>C</td>
                                <td>Min: {minTemp}<sup>o</sup>C</td>
                                <td>Max: {maxTemp}<sup>o</sup>C</td>
                            </tr>
                            <tr>
                                <th scope="row">Humidity: </th>
                                <td>{humidity}%</td>
                            </tr>
                            <tr>
                                <th scope="row">Wind: </th>
                                <td colSpan="3">{windSpeed}m/s</td>
                            </tr>
                            <tr>
                                <th scope="row">Sea level: </th>
                                <td colSpan="3">{seaLevel}</td>
                            </tr>
                            <tr>
                                <th scope="row">Pressure: </th>
                                <td colSpan="3">{pressure}</td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
                <Col className="col-8">
                    <LineChart width={300} height={100} data={options}>
                        <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
                    </LineChart>
                </Col>
            </Row>
        )
    } else { 
        return <div></div>
    } 
}

export default WeatherDetails;