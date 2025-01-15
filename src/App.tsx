import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import CategoryPage from "./components/CategoryPage";
import ArtisanDetail from "./components/ArtisanDetail";
import SearchPage from "./components/SearchPage";
import NotFound from "./components/NotFound";
import data from "./assets/datas.json";
import { Artisan } from "./components/types";
import "./styles/styles.scss";

const App: React.FC = () => {
  const [filteredArtisans, setFilteredArtisans] = useState<Artisan[]>([]);
  const navigate = useNavigate();

  const handleSearch = (term: string) => {
    if (term.trim()) {
      const lowercasedTerm = term.toLowerCase();
      console.log("Received search term:", term);
      const filteredData = data.filter(
        (artisan: Artisan) =>
          artisan.name.toLowerCase().includes(lowercasedTerm) ||
          artisan.specialty.toLowerCase().includes(lowercasedTerm) ||
          artisan.location.toLowerCase().includes(lowercasedTerm)
      );
      console.log("Filtered Artisans:", filteredData);
      setFilteredArtisans(filteredData);
      navigate("/search");
    }
  };

  const getArtisansByCategory = (category: string): Artisan[] => {
    return data.filter(
      (artisan) => artisan.category.toLowerCase() === category.toLowerCase()
    );
  };

  return (
    <>
      <Header onSearch={handleSearch} />
      <Routes>
        <Route path="/" element={<HomePage artisans={data} />} />
        <Route
          path="/category/Batiment"
          element={
            <CategoryPage artisans={getArtisansByCategory("Batiment")} />
          }
        />
        <Route
          path="/category/Services"
          element={
            <CategoryPage artisans={getArtisansByCategory("Services")} />
          }
        />
        <Route
          path="/category/Fabrication"
          element={
            <CategoryPage artisans={getArtisansByCategory("Fabrication")} />
          }
        />
        <Route
          path="/category/Alimentation"
          element={
            <CategoryPage artisans={getArtisansByCategory("Alimentation")} />
          }
        />
        <Route path="/artisan/:id" element={<ArtisanDetail />} />
        <Route
          path="/search"
          element={<SearchPage filteredArtisans={filteredArtisans} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
