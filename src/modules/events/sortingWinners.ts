import { renderWinners } from '../page/2.2_renderWinners/renderWinners';
import store from '../utils/state';
import { Sort } from '../utils/types';
import { updateStateWinners } from './updateStateWinners';

export const setSortOrder = async (sortBy: Sort) => {
  const winnersView: HTMLElement | null = document.getElementById('winners-view');
  store.sortOrder = store.sortOrder === 'ASC' ? 'DESC' : 'ASC';
  store.sortBy = sortBy;
  await updateStateWinners();
  if (winnersView) {
    winnersView.innerHTML = '';
    winnersView.append(renderWinners());
  }
};
