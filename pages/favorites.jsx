import React from 'react';
import { useSelector } from 'react-redux';
import Gamecard from '../components/Gamecard';

export default function Favorites() {
  const favorites = useSelector((state) => state.favorites.items);

  if (!favorites.length)
    return <p style={{ textAlign: 'center', marginTop: '20px' }}>No favorite cards yet.</p>;

  return (
    <div style={containerStyle}>
      <h2>Your Favorite Cards</h2>
      <div style={gridStyle}>
        {favorites.map((game) => (
          <Gamecard key={game.code} game={game} />
        ))}
      </div>
    </div>
  );
}


