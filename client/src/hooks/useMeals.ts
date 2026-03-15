import { useState, useEffect } from 'react';

export interface Meal {
  id: number;
  name: string;
  description: string;
  category: string;
  image: string;
}

export const useMeals = () => {
  const [meals, setMeals] = useState<Meal[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await fetch('/meals-data.json');
        if (!response.ok) {
          throw new Error('Failed to fetch meals data');
        }
        const data = await response.json();
        setMeals(data.meals);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchMeals();
  }, []);

  return { meals, loading, error };
};
