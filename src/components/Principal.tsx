import '../styles/Principal.css';

export default function Principal() {
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
            <li>
              <img src="https://media.formula1.com/image/upload/f_auto,c_limit,q_75,w_1320/content/dam/fom-website/drivers/2024Drivers/norris" alt="Lando Norris" className="driver-photo" />
              <div className="driver-info">
                <span className="driver-name">1º Lando Norris</span>
                <img src="https://cdn.inspireuplift.com/uploads/images/seller_products/29868/1702914923_McLarenPapayaLogo.png" alt="McLaren Logo" className="team-logo" />
              </div>
            </li>
            <li>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Max_Verstappen_2017_Malaysia_3.jpg/640px-Max_Verstappen_2017_Malaysia_3.jpg" alt="Max Verstappen" className="driver-photo" />
              <div className="driver-info">
                <span className="driver-name">2º Max Verstappen</span>
                <img src="https://brandlogo.org/wp-content/uploads/2024/04/Oracle-Red-Bull-Racing-Logo-300x300.png.webp" alt="Red Bull Logo" className="team-logo" />
              </div>
            </li>
            <li>
              <img src="https://cdn-7.motorsport.com/images/mgl/YMdm7R32/s8/charles-leclerc-ferrari.jpg" alt="Charles Leclerc" className="driver-photo" />
              <div className="driver-info">
                <span className="driver-name">3º Charles Leclerc</span>
                <img src="https://logos-world.net/wp-content/uploads/2020/05/Ferrari-Emblem.png" alt="Ferrari Logo" className="team-logo" />
              </div>
            </li>
          </ul>
        </div>
      </aside>
      <section className="principal">
        <div className="video-container">
          <h2>Highlights de la Carrera</h2>
          <iframe
            width="100%"
            height="315"
            src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.lasexta.com%2Fmotor%2Fnoticias%2Fpaises-bajos-2024-horarios-donde-ver-favoritos_2024072866a3cdc98ec9200001952733.html&psig=AOvVaw0teTvEqRP-th7M2OLuxOzu&ust=1724794991691000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLDSzZjQk4gDFQAAAAAdAAAAABAE"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </main>
  );
}
