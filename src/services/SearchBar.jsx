import { useState } from 'react';

export default function SearchBar({ onSearch }) {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city) {
      onSearch(city);
      setCity('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        type="text"
        placeholder="Enter city"
        className="border p-2 flex-1"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2">Search</button>
    </form>
  );
}
