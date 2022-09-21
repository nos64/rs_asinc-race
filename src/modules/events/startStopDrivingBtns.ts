import { startDriving } from './startDriving';
import { stopDriving } from './stopDriving';

export const startStopDriving = () => {
  document.body.addEventListener('click', async (e) => {
    if (e.target && e.target instanceof HTMLElement) {
      if (e.target.classList.contains('start-engine-button')) {
        const id: number = +e.target.id.split('start-engine-car-')[1];
        startDriving(id);
      }
      if (e.target.classList.contains('stop-engine-button')) {
        const id = +e.target.id.split('stop-engine-car-')[1];
        stopDriving(id);
      }
    }
  });
};
