import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route index path="hero" element={<HeroPage />} />
      <Route path="*" element={<Navigate to="hero" replace />} />
    </Routes>
  );
}

function HeroPage() {
  const [selectedHero, setSelectedHero] = useState("");

  const heroes = [
    { id: 1, name: "Superman" },
    { id: 2, name: "Wonder Woman" },
    { id: 3, name: "Spider-Man" },
    { id: 4, name: "Batman" },
  ];

  const handleHeroClick = (heroName) => {
    setSelectedHero(heroName);
  };

  return (
    <div>
      <h1>My Heroes</h1>
      <ul>
        {heroes.map((hero) => (
          <li key={hero.id} onClick={() => handleHeroClick(hero.name)}>
            {hero.id}. {hero.name}
          </li>
        ))}
      </ul>
      <h2>
        My hero is{" "}
        <span
          style={{ textDecoration: "underline", textUnderlineOffset: "8px" }}
        >
          {selectedHero}
        </span>
      </h2>
    </div>
  );
}

export default App;
