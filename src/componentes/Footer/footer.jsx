import { Link } from "react-router-dom";

import "../Footer/footer.css";

const Footer = () => {
  return (
    <div className="footerGlobal">
      <img
        className="logoFooter"
        src="img/logo1.jpg"
        alt="logoManosMundoerror"
      />

      <p className="footerText">© 2023 Nicolas Avila, all rights reserved.</p>

      <Link to="https://www.facebook.com/NicolasAvila09/">
        <img className="imgFooter" src="img/Fb.png" alt="iraFacebook" />
      </Link>

      <Link to="https://www.instagram.com/nicolas.avila89/?hl=es-la">
        <img className="imgFooter" src="img/In.png" alt="iraInstagram" />
      </Link>

      <Link to="https://web.whatsapp.com//">
        <img className="imgFooter" src="img/Gh.png" alt="iraWhatsapp" />
      </Link>
    </div>
  );
};

export default Footer;
