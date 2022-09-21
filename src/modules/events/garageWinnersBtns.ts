import store from '../utils/state';
import { renderWinners } from '../page/2.2_renderWinners/renderWinners';
import { updateStateGarage } from './updateStateGarage';
import { updateStateWinners } from './updateStateWinners';

export const garageWinnersBtns = () => {
  const garageView: HTMLElement | null = document.getElementById('garage-view');
  const winnersView: HTMLElement | null = document.getElementById('winners-view');
  const garageBtn = document.querySelector('.garage-menu-button');
  const winnersBtn = document.querySelector('.winners-menu-button');
  document.body.addEventListener('click', async (e) => {
    if (e.target && e.target instanceof HTMLElement) {
      if (e.target.classList.contains('garage-menu-button')) {
        if (garageView) {
          garageView.style.display = 'block';
          garageBtn?.classList.add('view-active');
          winnersBtn?.classList.remove('view-active');
        }
        if (winnersView) {
          winnersView.style.display = 'none';
        }
        store.view = 'garage';
        await updateStateGarage();
      }
      if (e.target.classList.contains('winners-menu-button')) {
        if (winnersView) {
          winnersView.style.display = 'block';
          winnersBtn?.classList.add('view-active');
          garageBtn?.classList.remove('view-active');
        }
        if (garageView) {
          garageView.style.display = 'none';
        }
        store.view = 'winners';
        await updateStateWinners();
        if (winnersView) {
          winnersView.textContent = '';
          winnersView.append(renderWinners());
        }
      }
    }
  });
};
