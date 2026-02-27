import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../redux/favorites';

export default function Gamecard({ game }) {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.items);

  const isFavorite = favorites.some((fav) => fav.code === game.code);

  const handleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(game.code));
    } else {
      dispatch(addFavorite(game));
    }
  };

  return (
    <div className="game-card" style={cardStyle}>
      <img
        src={game.image}
        alt={`${game.value} of ${game.suit}`}
        style={imageStyle}
      />
      <h3>{game.value} of {game.suit}</h3>
      <button onClick={handleFavorite} style={buttonStyle}>
        {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
    </div>
  );
}