import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGames } from '../redux/games';
import Gamecard from '../components/Gamecard';

const containerStyle = {
  padding: '20px',
  textAlign: 'center',
};

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
  gap: '16px',
};

export default function Home() {
  const dispatch = useDispatch();
  const games = useSelector((state) => state.games.list);
  const status = useSelector((state) => state.games.status);

  useEffect(() => {
    dispatch(fetchGames());
  }, [dispatch]);

  return (
    <div style={containerStyle}>
      <h1>List Of Games</h1>

      {status === 'loading' && <p>Loading cards...</p>}

      {status === 'succeeded' && games.length === 0 && (
        <p>No cards found. Try refreshing!</p>
      )}

      <div style={gridStyle}>
        {games.map((game) => (
          <Gamecard key={game.code} game={game} />
        ))}
      </div>
    </div>
  );
}

