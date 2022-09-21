import { saveWinner } from '../utils/api';
import store from '../utils/state';
import { RaceAll } from '../utils/types';
import { startDriving } from './startDriving';
import { miliSeconds } from '../utils/constants';

export const raceAll = () => {
  document.body.addEventListener('click', async (e) => {
    const message = document.querySelector('.message-wrapper');
    if (e.target && e.target instanceof HTMLElement) {
      if (e.target.classList.contains('race-button')) {
        if (message?.classList.contains('message-visible')) {
          message?.classList.remove('message-visible');
        }
        if (e.target instanceof HTMLButtonElement) {
          e.target.disabled = true;
          const arr: RaceAll[] = [];
          store.cars.forEach(async (car) => {
            const winner = await startDriving(car.id);
            if (winner.success) arr.push(winner);
            arr.sort((a, b) => +a.time - +b.time);
            if (arr.length) {
              await saveWinner(arr[0].id, arr[0].time);
              if (message) {
                message.classList.toggle('message-visible');
                // eslint-disable-next-line array-callback-return
                store.cars.find((item) => {
                  if (item.id === arr[0].id) {
                    message.innerHTML = `${item.name} went first ${arr[0].time / miliSeconds} s!`;
                  }
                });
              }
            }
          });
          const resetBtn = document.getElementById('reset');
          if (resetBtn && resetBtn instanceof HTMLButtonElement) {
            resetBtn.disabled = false;
          }
        }
      }
    }
  });
};
