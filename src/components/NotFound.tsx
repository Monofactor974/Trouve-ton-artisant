import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const NotFound: React.FC = () => {
  return (
    <div className="container mt-4 text-center">
      {" "}
      <h1>404</h1> <p>Oups ! La page que vous recherchez n'existe pas.</p>{" "}
      <a href="/" className="btn btn-primary">
        Retour à la page d'accueil
      </a>{" "}
    </div>
  );
};
export default NotFound;
