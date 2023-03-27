import HeroCard from '../HeroCard';
import { useFetchHeroes } from '../../hooks';

type HeroListProps = {
  selectedHeroId?: string;
};

const HeroList: React.FC<HeroListProps> = ({ selectedHeroId }) => {
  const { heroes } = useFetchHeroes();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      {heroes?.map((hero) => (
        <HeroCard
          key={hero.id}
          hero={hero}
          isSelected={hero.id === selectedHeroId}
        />
      ))}
    </div>
  );
};

export default HeroList;
