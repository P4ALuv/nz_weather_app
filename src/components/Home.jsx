import React from 'react';

const Home = ({ cities }) => {
  return (
    <div className="row">
      {cities.map((city, index) => (
        <div className="col-sm-4 mb-4" key={index}>
          <div className="card h-100 bg-dark text-white"> 
            <img src={city.imageUrl} className="card-img-top" alt={`${city.name}`} />
            <div className="card-body">
              <h5 className="card-title">{city.name}</h5>
              <h6 className="card-subtitle mb-2">{city.landmark}</h6> 
              <p className="card-text">{city.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;


