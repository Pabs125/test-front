import '../styles/Header.css';

export default function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo-container">
          <img src="https://upload.wikimedia.org/wikipedia/commons/f/f2/New_era_F1_logo.png" alt="Logo" className="logo" />
        </div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}


