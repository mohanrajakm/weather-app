export default function FavoritesList({ cities, onSelect }) {
    return (
      <div className="mt-4">
        <h3 className="font-bold mb-2">Favorites</h3>
        <div className="flex gap-2 flex-wrap">
          {cities.map((city) => (
            <button
              key={city}
              onClick={() => onSelect(city)}
              className="bg-gray-200 px-2 py-1 rounded"
            >
              {city}
            </button>
          ))}
        </div>
      </div>
    );
  }
  