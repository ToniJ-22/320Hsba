import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGames } from '../redux/games';
import Gamecard from '../components/Gamecard';

export default function Home() {
  const dispatch = useDispatch();
  const games = useSelector((state) => state.games.list);
  const status = useSelector((state) => state.games.status);

  useEffect(() => {
    dispatch(fetchGames());
  }, [dispatch]);

  return (
    <div>
      <h1>Game Night Planner</h1>

      {status === 'loading' && <p>Loading cards...</p>}

      {status === 'succeeded' && games.length === 0 && (
        <p>No cards found. Try refreshing!</p>
      )}

      <div>
        {games.map((game) => (
          <Gamecard key={game.code} game={game} />
        ))}
      </div>
    </div>
  );
}
