import axios from 'axios';
import { apiUrl, routes } from '../../../constants';

export const fetchDashboardData = async () => {
  try {
    const [booksCount, authorsCount, genresCount, usersCount, genreDistribution] = await Promise.all([
      axios.get(apiUrl('dashboard', 'book/count')),
      axios.get(apiUrl('dashboard', 'author/count')),
      axios.get(apiUrl('dashboard', 'genre/count')),
      axios.get(apiUrl('dashboard', 'user/count')),
      axios.get(apiUrl('dashboard', 'genre/distribution')),
    ]);

    return {
      booksCount: booksCount.data.count,
      authorsCount: authorsCount.data.count,
      genresCount: genresCount.data.count,
      usersCount: usersCount.data.count,
      genreDistribution: genreDistribution.data,
    };
  } catch (error) {
    console.error('Error fetching dashboard data:', error);
    throw error;
  }
};