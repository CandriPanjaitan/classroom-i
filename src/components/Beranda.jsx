import { Link } from "react-router-dom";
import "../css/beranda.css";
import imageFotoBersama from "../assets/image.png";

function Beranda() {
  return (
    <main className="beranda">
      <div className="beranda-nama">
        <h2>Selamat Datang di Kelas XI-i</h2>
      </div>
      <div className="beranda-konten">
        <div className="konten-gambar">
          <img src={imageFotoBersama} alt="Gambar Beranda" />
        </div>
        <div className="konten-teks">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
            explicabo? Harum veniam dolores nulla, necessitatibus esse ipsam,
            libero quibusdam explicabo atque neque corrupti quae cum doloremque
            ad, mollitia ratione suscipit! Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Cum illo voluptas quo fugiat vel
            dolores perferendis atque in modi, animi, itaque ab nam! Atque quae,
            ab doloremque sint hic facilis.
          </p>
        </div>
      </div>
    </main>
  );
}

export default Beranda;
