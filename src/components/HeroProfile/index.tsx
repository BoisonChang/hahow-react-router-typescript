import { useEffect, useState } from 'react';
import { HeroProfileType } from '../../types';
import { fetchHeroProfile, updateHeroProfile } from '../../helper';

type HeroProfileProps = {
  heroId: string;
};

const HeroProfile: React.FC<HeroProfileProps> = ({ heroId }) => {
  const [heroProfile, setHeroProfile] = useState<HeroProfileType | null>(null);
  const [remainingPoints, setRemainingPoints] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const profileData = await fetchHeroProfile(heroId);
        setHeroProfile(profileData);
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.error(error.message);
        }
      }
    };
    fetchData();
  }, [heroId]);

  const handleChange = (field: keyof HeroProfileType, delta: number) => {
    if (!heroProfile) return;
    const newProfile = { ...heroProfile, [field]: heroProfile[field] + delta };
    setHeroProfile(newProfile);
    setRemainingPoints(remainingPoints - delta);
  };

  const handleSave = async () => {
    if (!heroProfile) return;
    try {
      await updateHeroProfile(heroId, heroProfile);
      alert('Hero profile updated successfully!');
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(error.message);
      }
    }
  };
  return (
    <div className="mt-4 border-2 border-black-600 mx-2.5 p-10">
      {heroProfile ? (
        <div className="flex flex-col sm:flex-row justify-between">
          <div className="flex-col">
            {Object.entries(heroProfile).map(([key, value]) => (
              <div
                key={key}
                className="text-2xl flex items-center justify-between py-4"
              >
                <div className="pr-5">{key.toUpperCase()}</div>
                <div className="flex justify-start  w-32">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded w-8"
                    disabled={remainingPoints <= 0}
                    onClick={() =>
                      handleChange(key as keyof HeroProfileType, 1)
                    }
                  >
                    +
                  </button>
                  <span className="mx-2 w-10 flex justify-center items-center">
                    {value}
                  </span>
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded w-8"
                    disabled={value <= 0}
                    onClick={() =>
                      handleChange(key as keyof HeroProfileType, -1)
                    }
                  >
                    -
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full flex justify-center text-2xl sm:w-auto sm:self-end sm:text-left">
            <div className="mt-4 lg:mt-0 flex flex-col items-center justify-center">
              <div className="mb-4">剩餘點數: {remainingPoints}</div>
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded w-60 "
                onClick={handleSave}
              >
                儲存
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div>載入中...</div>
      )}
    </div>
  );
};

export default HeroProfile;
