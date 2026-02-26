import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../redux/favorites';

export default function GameCard({ game }) {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.items);

  const isFavorite = favorites.some((g) => g.id === game.id);

  return (
    <div className="card">
      <img src={game.image_url} alt={game.name} />
      <h3>{game.name}</h3>
      <p>{game.min_players} - {game.max_players} players</p>
      <p>{game.playing_time} min</p>
      {isFavorite ? (
        <button onClick={() => dispatch(removeFavorite(game.id))}>
          Remove from Favorites
        </button>
      ) : (
        <button onClick={() => dispatch(addFavorite(game))}>
          Add to Favorites
        </button>
      )}
    </div>
  );
}
