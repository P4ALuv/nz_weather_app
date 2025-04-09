import React from 'react';

function CitySelector({ onSelectCity }) {
  const cities = [
    "Auckland",
    "Wellington",
    "Christchurch",
    "Hamilton",
    "Tauranga",
    "Dunedin",
    "Palmerston North",
    "Napier",
    "Porirua",
    "New Plymouth",
    "Rotorua",
    "Whangarei",
    "Invercargill",
    "Whanganui",
    "Gisborne",
    "Queenstown"
  ];

  return (
    <div className="input-group mb-3">
      <label className="input-group-text" htmlFor="citySelect">Choose City</label>
      <select className="form-select form-select-lg" id="citySelect" onChange={(e) => onSelectCity(e.target.value)}>
        <option value="">Select a City</option>
        {cities.map(city => (
          <option key={city} value={city}>{city}</option>
        ))}
      </select>
    </div>
  );
}

export default CitySelector;
