import axios from 'axios';
import { API_BASE_URL } from '../const';
import { HeroProfileType } from '../types';

export const fetchHeroProfile = async (
  heroId: string
): Promise<HeroProfileType> => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/heroes/${heroId}/profile`
    );
    return response.data;
  } catch (error) {
    throw new Error();
  }
};

export const updateHeroProfile = async (
  heroId: string,
  profile: HeroProfileType
): Promise<void> => {
  try {
    await axios.patch(`${API_BASE_URL}/heroes/${heroId}/profile`, profile, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    throw new Error();
  }
};
