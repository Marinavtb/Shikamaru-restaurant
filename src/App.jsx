import "./styles/settings.scss";
import React from "react";
import { Link } from "react-scroll";
import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";
import Menu from "./components/Menu";
import Infos from "./components/Animation";
import useScrollAnimation from "./components/animatio2";

const App = () => {
  useScrollAnimation(); // Ajout du hook d'animation

  return (
    <div>
      {/* NAVIGATION */}
      <nav className="navbar">
        <div className="nav-container">
          {/* Titre avec logo en after */}
          <h1 className="titre">Shikamaru</h1>

          {/* Liens */}
          <ul className="nav-links">
            <li>
              <Link to="home" smooth={true} duration={500}>
                Accueil
              </Link>
            </li>
            <li>
              <Link to="story" smooth={true} duration={500}>
                Notre Histoire
              </Link>
            </li>
            <li>
              <Link to="menu" smooth={true} duration={500}>
                Menu
              </Link>
            </li>
            <li>
              <Link to="contact" smooth={true} duration={500}>
                Contact
              </Link>
            </li>
          </ul>

          {/* Icônes sociales */}
          <div className="social-icons">
            <a href="https://instagram.com">
              <FaInstagram />
            </a>
            <a href="https://facebook.com">
              <FaFacebook />
            </a>
            <a href="https://tiktok.com">
              <FaTiktok />
            </a>
          </div>
        </div>
      </nav>

      {/* SECTION ACCUEIL */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1 className="animated-title">
            <span>S</span>
            <span>H</span>
            <span>I</span>
            <span>K</span>
            <span>A</span>
            <span>M</span>
            <span>A</span>
            <span>R</span>
            <span>U</span>
          </h1>
          <p className="slogan">
            Le goût authentique du Japon, servi avec passion.
          </p>
          <Link to="menu" smooth={true} duration={500} className="btn">
            VOIR LE MENU
          </Link>
        </div>
      </section>

      {/* SECTION HISTOIRE */}
      <section id="story" className="story-section">
        {/* Première partie */}
        <div className="story-container">
          <div className="story-image left">
            <img
              src="/close-up-view-delicious-ramen-concept.jpg"
              alt="Story 1"
            />
          </div>
          <div className="story-text">
            <div className="story-block">
              <h2>Une Passion, Une Tradition</h2>
              <p>
                Tout a commencé avec une simple passion : l’amour des ramens
                authentiques et du partage. Inspirés par la richesse culinaire
                du Japon, nous avons voulu créer un lieu où chaque bol raconte
                une histoire.
              </p>
            </div>
            <div className="story-block">
              <h2>Un Lieu de Convivialité</h2>
              <p>
                Chez Shikamaru, nous croyons que la nourriture est un instant de
                plaisir et de partage. Nous avons conçu un espace chaleureux,
                inspiré des <strong>yokocho</strong>, ces petites ruelles
                japonaises pleines de vie.
              </p>
            </div>
          </div>
        </div>

        {/* Deuxième partie */}
        <div className="story-container reverse">
          <div className="story-text">
            <div className="story-block">
              <h2>Un Savoir-Faire Unique</h2>
              <p>
                Nos ramens sont préparés avec des ingrédients sélectionnés avec
                soin, des bouillons mijotés pendant des heures et des nouilles
                fraîches pour une expérience gustative inoubliable.
              </p>
            </div>
            <div className="story-block">
              <h2>Un Voyage Culinaire</h2>
              <p>
                Que vous soyez amateur de <strong>tonkotsu onctueux</strong>, de{" "}
                <strong>shoyu raffiné</strong> ou de{" "}
                <strong>miso réconfortant</strong>, nous avons à cœur de vous
                faire voyager à travers le Japon sans quitter votre chaise.
              </p>
            </div>
          </div>
          <div className="story-image right">
            <img src="/pexels-photo-11245019.webp" alt="Story 2" />
          </div>
        </div>
      </section>

      {/* SECTION MENU */}
      <section id="menu" className="section">
        <Menu />
      </section>

      {/* INFOS */}
      <Infos />

      <section id="info2" className="info2">
        <div className="info-container">
          <h2 className="info-title">INFOS PRATIQUES</h2>

          <div className="info-details">
            <div className="info-section">
              <h3>Adresse et téléphone :</h3>
              <p>123 Rue des Samouraïs, 75001 Paris, France</p>
              <p>01 23 45 67 89</p>
            </div>

            <div className="info-section">
              <h3>Nos horaires d'ouverture :</h3>
              <p>Lundi au Vendredi : 11h30 - 14h30 / 18h30 - 23h00</p>
              <p>Samedi - Dimanche : 12h00 - 23h00</p>
            </div>

            <div className="info-section">
              <h3>Services :</h3>
              <p>Terrasse extérieure - Accès handicapé </p>
              <p>Wi-Fi gratuit - parking gratuit</p>
            </div>
          </div>
        </div>
        {/* SECTION CONTACT */}
        <section id="contact" className="section1">
          <div className="sectionform">
            <h2>CONTACT</h2>
            <p>Vous désirez nous contacter ?</p>
            <p>Remplissez le formulaire ci-dessous !</p>
          </div>
        </section>

        <section id="contact-form" className="contact-form">
          <div className="form-container">
            <form>
              <div className="form-group">
                <label htmlFor="nom">Nom :</label>
                <input type="text" id="nom" name="nom" required />
              </div>

              <div className="form-group">
                <label htmlFor="prenom">Prénom :</label>
                <input type="text" id="prenom" name="prenom" required />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email :</label>
                <input type="email" id="email" name="email" required />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message :</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn">
                Envoyer
              </button>
            </form>
          </div>
        </section>

        <footer className="footer">
          <div className="footer-container">
            <p>© 2024 Shikamaru Ramen - Tous droits réservés.</p>
            <p>
              Suivez-nous sur :<a href="#">Facebook</a> |
              <a href="#">Instagram</a> | <a href="#">Tiktok</a>
            </p>
          </div>
        </footer>
      </section>
    </div>
  );
};

export default App;
