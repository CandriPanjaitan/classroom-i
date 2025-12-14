import { Link } from "react-router-dom";
import "../css/header.css";

const Header = () => {
  const navItems = [
    { name: "Beranda", path: "/" },
    { name: "Struktur", path: "/struktur" },
    { name: "Siswa", path: "/siswa" },
    { name: "Memori", path: "/memori" },
  ];

  return (
    <header className="navbar">
      <div className="navbar-logo">
        <h1>Kelas XI-i</h1>
      </div>
      <nav className="navbar-nav">
        {navItems.map((item) => (
          <Link key={item.name} to={item.path} className="navbar-links">
            {item.name}
          </Link>
        ))}
      </nav>
      {/* Tombol Mobile */}
    </header>
  );
};

export default Header;
