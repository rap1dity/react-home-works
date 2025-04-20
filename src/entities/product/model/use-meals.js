import { mealsApi } from '@src/shared/api/v1/meals/index.js';
import { useEffect, useState } from 'react';

export const useMeals = (activeCategory, limit = 6) => {
  const [meals, setMeals] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [completed, setCompleted] = useState(false);

  const fetchMeals = async (pageToLoad, reset = false) => {
    try {
      if (reset) {
        setMeals([]);
        setCompleted(false);
        setPage(1);
      }

      setLoading(true);

      const newMeals = await mealsApi.getMeals({
        page: pageToLoad,
        limit,
        category: activeCategory,
      });

      setMeals(prev => reset ? newMeals : [...prev, ...newMeals]);
      setCompleted(newMeals.length < limit);
      setPage(pageToLoad + 1);
    } catch (e) {
      console.error('Failed to load meals:', e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMeals(1, true);
  }, [activeCategory]);

  return {
    meals,
    loading,
    completed,
    loadMore: () => fetchMeals(page),
  };
}