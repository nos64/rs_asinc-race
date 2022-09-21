import { getWinners } from '../utils/api';
import store from '../utils/state';
import { firstWinnersPage, limitLinesPerWinnersPage } from '../utils/constants';

export const updateStateWinners = async () => {
  const nextBtn = document.getElementById('next');
  const prevBtn = document.getElementById('prev');
  const { items, count } = await getWinners(store.winnersPage, store.sortBy, store.sortOrder);

  store.winners = items;
  store.winnersCount = count;
  if (store.winnersCount && nextBtn instanceof HTMLButtonElement
    && prevBtn instanceof HTMLButtonElement) {
    nextBtn.disabled = !(store.winnersPage * limitLinesPerWinnersPage < +store.winnersCount);

    prevBtn.disabled = !(store.winnersPage > firstWinnersPage);
  }
};
