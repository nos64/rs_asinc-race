import { setSortOrder } from './sortingWinners';

export const sortingWinnersBtns = () => {
  document.body.addEventListener('click', async (e) => {
    if (e.target && e.target instanceof HTMLElement) {
      if (e.target.classList.contains('table-wins')) {
        setSortOrder('wins');
      }
      if (e.target.classList.contains('table-time')) {
        setSortOrder('time');
      }
    }
  });
};
