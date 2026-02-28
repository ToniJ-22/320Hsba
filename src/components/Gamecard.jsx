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
    <div className="game-card">
      <img
        src={game.image}
        alt={`${game.value} of ${game.suit}`}
        className="game-card__image"
      />
      <h3>{game.value} of {game.suit}</h3>
      <button
        onClick={handleFavorite}
        className="game-card__button"
      >
        {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
    </div>
  );
}
