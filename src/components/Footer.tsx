import '../styles/Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="contact-info">
        <a href="https://www.facebook.com/pablo.ocampo25/" target="_blank" rel="noopener noreferrer">
          <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" className="social-icon" />
        </a>
        <a href="https://github.com/Pabs125/test-front" target="_blank" rel="noopener noreferrer">
          <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" className="social-icon" />
        </a>
        <a href="https://www.instagram.com/pabloocampo125/" target="_blank" rel="noopener noreferrer">
          <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" className="social-icon" />
        </a>
      </div>
    </footer>
  );
}
