import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Artisan } from "../components/types";

interface SearchPageProps {
  filteredArtisans: Artisan[];
}

const SearchPage: React.FC<SearchPageProps> = ({ filteredArtisans }) => {
  return (
    <div className="container mt-4 searchpage">
      <h2>Résultats de recherche</h2>
      <div className="row search-results">
        {filteredArtisans.length > 0 ? (
          filteredArtisans.map((artisan) => (
            <div className="col-md-4 mb-4" key={artisan.id}>
              <Link
                to={`/artisan/${artisan.id}`}
                className="text-decoration-none"
              >
                <div className="card search-card">
                  <div className="card-body">
                    <h5 className="card-title">{artisan.name}</h5>
                    <p className="card-text stars">
                      Note: {"★".repeat(Math.floor(Number(artisan.note)))}
                      {"☆".repeat(5 - Math.floor(Number(artisan.note)))}
                    </p>
                    <p className="card-text">Spécialité: {artisan.specialty}</p>
                    <p className="card-text">
                      Localisation: {artisan.location}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <p>Aucun résultat trouvé</p>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
