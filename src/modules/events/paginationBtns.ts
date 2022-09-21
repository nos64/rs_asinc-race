import store from '../utils/state';
import { renderGarage } from '../page/2.1_renderGarage/renderGarage';
import { renderWinners } from '../page/2.2_renderWinners/renderWinners';
import { updateStateGarage } from './updateStateGarage';
import { updateStateWinners } from './updateStateWinners';

export const paginationBtns = () => {
  const garage = document.getElementById('garage');
  const winnersView: HTMLElement | null = document.getElementById('winners-view');
  document.body.addEventListener('click', async (e) => {
    if (e.target && e.target instanceof HTMLElement) {
      if (e.target.classList.contains('prev-button')) {
        // eslint-disable-next-line default-case
        switch (store.view) {
          case 'garage': {
            store.carsPage--;
            await updateStateGarage();
            if (garage) {
              garage.textContent = '';
              garage.append(renderGarage());
            }
            break;
          }
          case 'winners': {
            store.winnersPage--;
            await updateStateWinners();
            if (winnersView) {
              winnersView.textContent = '';
              winnersView.append(renderWinners());
            }
            break;
          }
        }
      }
      if (e.target.classList.contains('next-button')) {
        // eslint-disable-next-line default-case
        switch (store.view) {
          case 'garage': {
            store.carsPage++;
            await updateStateGarage();
            if (garage) {
              garage.innerHTML = '';
              garage.append(renderGarage());
            }
            break;
          }
          case 'winners': {
            store.winnersPage++;
            await updateStateWinners();
            if (winnersView) {
              winnersView.textContent = '';
              winnersView.append(renderWinners());
            }
            break;
          }
        }
      }
    }
  });
};
