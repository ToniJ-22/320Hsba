import { useDispatch, useSelector } from 'react-redux';
import { fetchGames } from '../redux/games';
import SearchBar from '../components/searchBar';
import GameCard from '../components/Gamecard';

export default function Home() {
  const dispatch = useDispatch();
  const games = useSelector((state) => state.games.list);
  const status = useSelector((state) => state.games.status);

  return (
    <div>
      <SearchBar onSearch={(query) => dispatch(fetchGames(query))} />
      {status === 'loading' && <p>Loading games...</p>}
      <div className="grid">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
}
