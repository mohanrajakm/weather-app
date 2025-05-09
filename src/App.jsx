import { useState, useEffect } from 'react';
import SearchBar from './services/SearchBar';
import WeatherCard from './services/WeatherCard';
import ComparisonView from './services/ComparisonView';
import FavoritesList from './services/FavoritesList';
import { fetchWeather } from './services/weatherAPI';

function App() {
  const [current, setCurrent] = useState(null);
  const [compare, setCompare] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(saved);
  }, []);

  const handleSearch = async (city) => {
    try {
      const data = await fetchWeather(city);
      setCurrent(data);
    } catch (err) {
      alert(err.message);
    }
  };

  const handleCompare = async (city) => {
    try {
      const data = await fetchWeather(city);
      setCompare((prev) => [...prev.slice(-1), data]); // keep only 2
    } catch (err) {
      alert(err.message);
    }
  };

  const handleSave = (city) => {
    if (!favorites.includes(city)) {
      const updated = [...favorites, city];
      setFavorites(updated);
      localStorage.setItem('favorites', JSON.stringify(updated));
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">🌦 Weather Checker</h1>

      <SearchBar onSearch={handleSearch} />

      {current && <WeatherCard data={current} onSave={handleSave} />}

      <button
        className="mt-4 bg-purple-500 text-white px-3 py-1"
        onClick={() => current && handleCompare(current.name)}
      >
        Add to Compare
      </button>

      <ComparisonView city1={compare[0]} city2={compare[1]} />

      <FavoritesList cities={favorites} onSelect={handleSearch} />
    </div>
  );
}

export default App;
