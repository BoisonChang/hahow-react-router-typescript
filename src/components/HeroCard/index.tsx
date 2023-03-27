import { Link } from 'react-router-dom';
import { Hero } from '../../types';
import { useState } from 'react';

type HeroCardProps = {
  hero: Hero;
  isSelected: boolean;
};

const HeroCard: React.FC<HeroCardProps> = ({ hero, isSelected }) => {
  const { id, name, image } = hero;
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  const imageUrl = imageError ? '/hidden_hero.png' : image;

  return (
    <Link to={`/heroes/${id}`}>
      <div className="w-full pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2 ">
        <div className="bg-white rounded-lg m-h-64 p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300 border-2 border-black-600">
          <figure className="mb-2">
            <img
              src={imageUrl}
              alt={name}
              className="w-full h-full"
              onError={handleImageError}
            />
          </figure>
          <div className="rounded-lg p-4 bg-white flex flex-col">
            <div>
              <h5 className="text-black text-2xl font-bold leading-none break-words">
                {name}
              </h5>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default HeroCard;
