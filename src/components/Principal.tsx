import { useEffect, useState } from 'react';
import '../styles/Principal.css';

interface Driver {
  id: number;
  name: string;
  position: string;
  team: string;
  imageUrl: string;
  teamLogo: string;
}

export default function Principal() {
  const [drivers, setDrivers] = useState<Driver[]>([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/drivers')
      .then((response) => response.json())
      .then((data) => setDrivers(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <main className="main">
      <aside className="aside">
        <div className="race-description">
          <h2>Resumen de la Carrera</h2>
          <p>La carrera del Gran Premio de Pises Bajos se llevó a cabo el fin de semana pasado, donde los pilotos demostraron un desempeño impresionante. Aquí está el resumen de los primeros tres lugares:</p>
        </div>
        <div className="podium">
          <h3>Resultados del Podio</h3>
          <ul className="podium-list">
            {drivers.map((driver) => (
              <li key={driver.id}>
                <img src={driver.imageUrl} alt={driver.name} className="driver-photo" />
                <div className="driver-info">
                  <span className="driver-name">{driver.position} {driver.name}</span>
                  <img src={driver.teamLogo} alt={`${driver.team} Logo`} className="team-logo" />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </aside>
      <section className="principal">
        <div className="video-container">
          <h2>Highlights de la Carrera</h2>
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/some-video-id"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </main>
  );
}
