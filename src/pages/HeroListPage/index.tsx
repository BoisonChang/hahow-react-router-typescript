import HeroList from '../../components/HeroList';

const HeroListPage: React.FC = () => {
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-center text-4xl mb-8">英雄列表</h1>
      <HeroList />
    </div>
  );
};

export default HeroListPage;
