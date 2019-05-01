import React from 'react';
// ReactStrap
import 'bootstrap/dist/css/bootstrap.min.css';

// Vendors
import './vendor/Fontawesome';

// Components
import Weather from './component/Weather';
import Title from './component/Title';

function App() {
  return (
    <div>
      <Title text="Weather App" />
      <Weather />
    </div>
  );
}

export default App;
