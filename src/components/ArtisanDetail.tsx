import React from "react";
import { useParams } from "react-router-dom";
import data from "../assets/datas.json";
import "bootstrap/dist/css/bootstrap.min.css";
import { Artisan } from "../components/types"; // Vérifiez que le chemin est correct

const ArtisanDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const artisan = data.find((artisan) => artisan.id === id) as
    | Artisan
    | undefined;

  if (!artisan) {
    return <div>Artisan non trouvé</div>;
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    fetch("http://localhost:3001/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.get("name"),
        subject: formData.get("subject"),
        message: formData.get("message"),
        to: artisan.email,
      }),
    })
      .then((response) => response.text())
      .then((result) => alert(result))
      .catch((error) => console.error("Erreur :", error));
  };

  return (
    <div className="container mt-4 artisan-detail">
      <h2>{artisan.name}</h2>
      <p className="stars">
        Note : {"★".repeat(Math.floor(Number(artisan.note)))}
        {"☆".repeat(5 - Math.floor(Number(artisan.note)))}
      </p>
      <p>Spécialité : {artisan.specialty}</p>
      <p>Localisation : {artisan.location}</p>
      <div className="tab-content">
        <h4>À propos</h4>
        <p>{artisan.about}</p>
      </div>
      <div className="card mt-4">
        <div className="card-body">
          <h4>Contactez cet artisan</h4>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Nom
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="subject" className="form-label">
                Objet
              </label>
              <input
                type="text"
                className="form-control"
                id="subject"
                name="subject"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                rows={5}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Envoyer
            </button>
          </form>
        </div>
      </div>
      {artisan.website && (
        <p className="mt-4">
          <a href={artisan.website} target="_blank" rel="noopener noreferrer">
            Visiter le site web
          </a>
        </p>
      )}
    </div>
  );
};

export default ArtisanDetail;
