import WeatherCard from './WeatherCard';

export default function ComparisonView({ city1, city2 }) {
  return (
    <div className="flex flex-col md:flex-row gap-4 mt-6">
      <WeatherCard data={city1} />
      <WeatherCard data={city2} />
    </div>
  );
}
