import { getCars, getWinners } from './api';
import { Store } from './types';

const { items: cars, count: carsCount } = await getCars(1);
const { items: winners, count: winnersCount } = await getWinners(1, 'wins', 'ASC');

const store: Store = {
  carsPage: 1,
  cars,
  carsCount,
  winnersPage: 1,
  winners,
  winnersCount,
  animation: { id: 0 },
  view: 'garage',
  sortBy: 'wins',
  sortOrder: 'ASC',
};

export default store;
