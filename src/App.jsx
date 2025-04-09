import React, { useState } from 'react';
import Navbar from './components/Navbar';
import CitySelector from './components/CitySelector';
import WeatherCard from './components/WeatherCard';
import Home from './components/Home';

const citiesData = [
  {
    name: "Auckland",
    lat: "-36.8485",
    lon: "174.7633",
    landmark: "Sky Tower",
    description: "The Sky Tower offers breathtaking views of the city.",
    imageUrl: "/images/Auckland.jpg"
  },
  {
    name: "Wellington",
    lat: "-41.2865",
    lon: "174.7762",
    landmark: "Te Papa Museum",
    description: "The national museum of New Zealand, known for its interactive exhibits.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Museum_of_New_Zealand_Te_Papa_Tongarewa.jpg"
  },
  {
    name: "Queenstown",
    lat: "-45.0311",
    lon: "168.6626",
    landmark: "Lake Wakatipu",
    description: "Known for adventure sports, and in winter, snow sports.",
    imageUrl: "/images/Queenstown.jpg"
  },
  {
    name: "Rotorua",
    lat: "-38.1368",
    lon: "176.2497",
    landmark: "Te Puia",
    description: "Home to the Pohutu Geyser, Maori culture, and geothermal wonders.",
    imageUrl: "/images/Rotorua.jpg"
  },
  {
    name: "Christchurch",
    lat: "-43.5320",
    lon: "172.6362",
    landmark: "Christchurch Botanic Gardens",
    description: "These gardens feature an array of plant collections and beautiful scenery.",
    imageUrl: "/images/Christchurch.jpg"
  },
  {
    name: "Dunedin",
    lat: "-45.8788",
    lon: "170.5028",
    landmark: "Larnach Castle",
    description: "New Zealand's only castle offers tours, garden access, and stunning views.",
    imageUrl: "https://cdn.concreteplayground.com/content/uploads/2018/09/larnach-castle-website-1440x1440.jpg"
  },
  {
    name: "Napier",
    lat: "-39.4928",
    lon: "176.9120",
    landmark: "Art Deco Trust",
    description: "Napier is famous for its beautiful art deco architecture.",
    imageUrl: "https://www.artdeconapier.com/wp-content/uploads/2023/06/car-02.jpg"
  },
  {
    name: "Hamilton",
    lat: "-37.7870",
    lon: "175.2793",
    landmark: "Hamilton Gardens",
    description: "A collection of themed gardens from around the world.",
    imageUrl: "https://storage.googleapis.com/hamilton-gardens-prod2-web-assets/public/Uploads/Slide/Website-Header.png"
  },
  {
    name: "Wanaka",
    lat: "-44.7032",
    lon: "169.1321",
    landmark: "That Wanaka Tree",
    description: "Situated on the shores of Lake Wanaka, 'That Wanaka Tree' stands solitary in the water and has become an iconic symbol of the region. It represents the beauty and solitude of Wanaka's landscape and is a must-visit for photographers and nature lovers alike.",
    imageUrl: "/images/Wanaka.jpg"
  }
];


function App() {
  const [selectedComponent, setSelectedComponent] = useState('home');
  const [selectedCity, setSelectedCity] = useState('');

  const handleNavSelect = (component) => {
    setSelectedComponent(component);
    setSelectedCity('');
  };

  return (
    <div className="App">
      <Navbar onSelect={handleNavSelect} />
      <div className="container mt-5">

        <div className="card bg-dark text-white mb-3">
          <div className="card-body">
            <h1 className="card-title">
              {selectedComponent === 'home' ? 'New Zealand Cityscape' : selectedComponent === 'citySelector' ? 'New Zealand Weather Info' : ''}
            </h1>
          </div>
        </div>
        {selectedComponent === 'home' && <Home cities={citiesData} />}
        {selectedComponent === 'citySelector' && <CitySelector onSelectCity={setSelectedCity} />}
        {selectedCity && <WeatherCard city={selectedCity} />}
      </div>
    </div>
  );

}

export default App;
