import React from "react";
import { Link } from "react-router-dom";
import { Artisan } from "../components/types";
import "bootstrap/dist/css/bootstrap.min.css";

interface HomePageProps {
  artisans: Artisan[];
}

const HomePage: React.FC<HomePageProps> = ({ artisans }) => {
  const artisansOfTheMonth = artisans.filter((artisan) => artisan.top);

  return (
    <div className="container mt-4 homepage">
      <img src="/homeimage.jpg" alt="Home Image" className="home-image" />
      <h1 className="text-center">Bienvenue à Trouve Ton Artisan</h1>

      <h2 className="mt-4">Comment trouver mon artisan ?</h2>
      <div className="steps">
        <div className="step">
          <div className="step-number">1</div>
          <p>Choisir la catégorie d’artisanat dans le menu.</p>
        </div>
        <div className="step">
          <div className="step-number">2</div>
          <p>Choisir un artisan.</p>
        </div>
        <div className="step">
          <div className="step-number">3</div>
          <p>Le contacter via le formulaire de contact.</p>
        </div>
        <div className="step">
          <div className="step-number">4</div>
          <p>Une réponse sera apportée sous 48h.</p>
        </div>
      </div>

      <h2 className="mt-4">Artisans du Mois</h2>
      <div className="artisan-cards">
        {artisansOfTheMonth.map((artisan) => (
          <div
            className="artisan-card-wrapper"
            key={artisan.id}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "scale(1.1)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "scale(1)";
            }}
          >
            <Link
              to={`/artisan/${artisan.id}`}
              className="text-decoration-none"
              style={{
                height: "100%",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                className="card homepage-card artisan-card-hovered"
                style={{ height: "350px", width: "60%" }}
              >
                <div className="card-body">
                  <h5 className="card-title">{artisan.name}</h5>
                  <p className="card-text stars">
                    Note: {"★".repeat(Math.floor(Number(artisan.note)))}
                    {"☆".repeat(5 - Math.floor(Number(artisan.note)))}
                  </p>
                  <p className="card-text">Spécialité: {artisan.specialty}</p>
                  <p className="card-text">Localisation: {artisan.location}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
