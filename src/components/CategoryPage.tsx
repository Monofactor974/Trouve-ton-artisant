import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { Artisan } from "../components/types";
import "bootstrap/dist/css/bootstrap.min.css";
import Servicepik from "/Servicesimage.webp";
import Batimentpik from "/Batimentimage.webp";
import Fabricationpik from "/Fabricationimage.webp";
import Alimentationpik from "/alimentationimage.webp";
import datas from "../assets/datas.json";

interface CategoryPageProps {
  artisans: Artisan[];
}

const CategoryPage: React.FC<CategoryPageProps> = ({ artisans }) => {
  const { category = "" } = useParams<{ category: string }>(); // Pour éviter undefined
  const { pathname } = useLocation();
  const images: { [key: string]: string } = {
    "/category/Batiment": Batimentpik,
    "/category/Services": Servicepik,
    "/category/Fabrication": Fabricationpik,
    "/category/Alimentation": Alimentationpik,
  };
  const rigthCategory = datas.find(
    (data) => `/category/${data.category}` === pathname
  );
  const filteredArtisans = artisans.filter((artisan) =>
    artisan.category.toLowerCase().includes(category.toLowerCase().trim())
  );

  return (
    <div className="container mt-4 categorypage">
      <img
        src={images[pathname] || ""}
        alt={`${category} Image`}
        className="category-image"
      />
      <h2 className="text-center">
        Artisans de la catégorie {rigthCategory?.category}
      </h2>
      {filteredArtisans.length > 0 ? (
        <div className="artisan-cards">
          {filteredArtisans.map((artisan) => (
            <div className="artisan-card-wrapper" key={artisan.id}>
              <Link
                to={`/artisan/${artisan.id}`}
                className="text-decoration-none"
              >
                <div className="card category-card">
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
          ))}
        </div>
      ) : (
        <p>Aucun artisan trouvé dans cette catégorie.</p>
      )}
    </div>
  );
};

export default CategoryPage;
