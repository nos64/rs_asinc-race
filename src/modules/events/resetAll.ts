import store from '../utils/state';
import { stopDriving } from './stopDriving';

export const resetAll = () => {
  document.body.addEventListener('click', async (e) => {
    if (e.target && e.target instanceof HTMLElement) {
      if (e.target.classList.contains('reset-button')) {
        if (e.target instanceof HTMLButtonElement) {
          e.target.disabled = true;
          store.cars.map(({ id }) => stopDriving(id));
        }
        const message = document.querySelector('.message-wrapper');
        if (message) {
          message.classList.toggle('message-visible');
          message.textContent = '';
        }
        const raceBtn = document.getElementById('race');
        if (raceBtn && raceBtn instanceof HTMLButtonElement) {
          raceBtn.disabled = false;
        }
      }
    }
  });
};
