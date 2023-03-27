import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../const';
import { Hero } from '../types';
import data from '../data/fake';

export const useFetchHeroes = (): {
  heroes: Hero[] | null;
  isLoading: boolean;
  error: any;
} => {
  const [heroes, setHeroes] = useState<Hero[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchHeroes = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`${API_BASE_URL}/heroesSSS`);
        setHeroes(response.data);
        setError(null);
      } catch (err) {
        setHeroes(data);
      }
      setIsLoading(false);
    };

    fetchHeroes();
  }, []);

  return { heroes, isLoading, error };
};
