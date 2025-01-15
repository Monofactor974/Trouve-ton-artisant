import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container text-center">
        <img
          src="/footerImage.png"
          alt="Footer Image"
          className="footer-image"
        />{" "}
        {/* Ajout de l'image */}
        <div className="social-icons mt-3">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/instagram.png" alt="Instagram" className="social-icon" />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/twitter.png" alt="Twitter" className="social-icon" />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/facebook.png" alt="Facebook" className="social-icon" />
          </a>
        </div>
        <div className="row mt-4">
          <div className="col-md-4">
            <h5>Adresse et Contacts :</h5>
            <address>
              101 cours Charlemagne
              <br />
              CS 20033
              <br />
              69269 LYON CEDEX 02
              <br />
              France
              <br />
              Téléphone: +33 (0)4 26 73 40 00
            </address>
          </div>
          <div className="col-md-4">
            <h5>A propos :</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/nos-avis">Nos avis</Link>
              </li>
              <li>
                <Link to="/donnees-personnelles">Données personnelles</Link>
              </li>
              <li>
                <Link to="/qui-sommes-nous">Qui sommes-nous ?</Link>
              </li>
              <li>
                <Link to="/nos-partenaires">Nos partenaires</Link>
              </li>
              <li>
                <Link to="/affiliation">Affiliation</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Liens utiles :</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/nous-contacter">Nous contacter</Link>
              </li>
              <li>
                <Link to="/nous-recrutons">Nous recrutons</Link>
              </li>
              <li>
                <Link to="/mentions-legales">Mentions légales</Link>
              </li>
              <li>
                <Link to="/accessibilite">Accessibilité</Link>
              </li>
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
              <li>
                <Link to="/cookies">Cookies</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
