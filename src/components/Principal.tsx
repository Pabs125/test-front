import { useEffect, useState } from 'react';
import '../styles/Principal.css';

interface Driver {
  id: number;
  name: string;
  position: number;
  team: string;
  nationality: string;
  points: number;
  imageUrl: string;
  teamLogo: string;
}

export default function Principal() {
  const [drivers, setDrivers] = useState<Driver[]>([]);

  //Consumo de api
  useEffect(() => {
    fetch('http://localhost:5000/api/drivers')
      .then(response => response.json())
      .then(data => setDrivers(data))
      .catch(error => console.error('Error fetching drivers:', error));
  }, []);

  return (
    <main className="main">
      <section className="driver-cards">
        <h2>Drivers</h2>
        <div className="cards-container">
          {drivers.length === 0 ? (
            <p>Loading drivers...</p>
          ) : (
            drivers.map(driver => (
              <div key={driver.id} className="card">
                <img src={driver.imageUrl} alt={driver.name} className="driver-photo" />
                <div className="card-info">
                  <h3>{driver.position}. {driver.name}</h3>
                  <p>{driver.team}</p>
                  <p>{driver.nationality}</p>
                  <img src={driver.teamLogo} alt={`${driver.team} logo`} className="team-logo" />
                </div>
              </div>
            ))
          )}
        </div>
      </section>
    </main>
  );
}
