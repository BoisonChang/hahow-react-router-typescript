import { useParams } from 'react-router-dom';
import HeroList from '../../components/HeroList';
import HeroProfile from '../../components/HeroProfile';

const HeroProfilePage: React.FC = () => {
  const { heroId } = useParams<{ heroId: string }>();

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-center text-4xl mb-8">英雄資料</h1>
      <HeroList selectedHeroId={heroId} />
      <HeroProfile heroId={String(heroId)} />
    </div>
  );
};

export default HeroProfilePage;
