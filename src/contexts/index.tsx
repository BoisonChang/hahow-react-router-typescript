// import { createContext, useContext, useState } from 'react';
// import { Hero, HeroProfileType } from '../types';

// type AppContextType = {
//   selectedHero: Hero | null;
//   setSelectedHero: (hero: Hero | null) => void;
//   heroProfile: HeroProfileType | null;
//   setHeroProfile: (profile: HeroProfileType | null) => void;
// };

// const AppContext = createContext<AppContextType | undefined>(undefined);

// export const useAppContext = () => {
//   const context = useContext(AppContext);
//   if (!context) {
//     throw new Error('useAppContext must be used within an AppContextProvider');
//   }
//   return context;
// };

// type Props = {
//   children: React.ReactNode;
// };

// export const AppContextProvider: React.FC<Props> = ({ children }) => {
//   const [selectedHero, setSelectedHero] = useState<Hero | null>(null);
//   const [heroProfile, setHeroProfile] = useState<HeroProfileType | null>(null);

//   return (
//     <AppContext.Provider
//       value={{ selectedHero, setSelectedHero, heroProfile, setHeroProfile }}
//     >
//       {children}
//     </AppContext.Provider>
//   );
// };

export default function AppContextProvider() {}
