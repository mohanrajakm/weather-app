export default function WeatherCard({ data, onSave }) {
    if (!data) return null;
  
    return (
      <div className="bg-white p-4 rounded shadow w-full md:w-1/2">
        <h2 className="text-xl font-bold mb-2">{data.name}</h2>
        <p>🌡 Temp: {data.main.temp}°C</p>
        <p>💧 Humidity: {data.main.humidity}%</p>
        <p>⛅ Condition: {data.weather[0].description}</p>
        {onSave && (
          <button
            onClick={() => onSave(data.name)}
            className="mt-2 bg-green-500 text-white px-2 py-1"
          >
            Save
          </button>
        )}
      </div>
    );
  }
  