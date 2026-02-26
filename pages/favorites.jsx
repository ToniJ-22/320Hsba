import { useSelector } from 'react-redux';
import GameCard from '../components/Gamecard';

export default function Favorites() {
  const favorites = useSelector((state) => state.favorites.items);

  if (!favorites.length) return <p>No favorite games yet.</p>;

  return (
    <div>
      <h2>Your Favorite Games</h2>
      <div className="grid">
        {favorites.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
}
