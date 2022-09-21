import { createCar } from '../utils/api';
import { renderGarage } from '../page/2.1_renderGarage/renderGarage';
import { generateRandomCars } from '../utils/utils';
import { updateStateGarage } from './updateStateGarage';

export const generateRandomCarsBtn = () => {
  const garage = document.getElementById('garage');
  document.body.addEventListener('click', async (e) => {
    if (e.target && e.target instanceof HTMLElement) {
      if (e.target.classList.contains('generate-button')) {
        if (e.target instanceof HTMLButtonElement) {
          e.target.disabled = true;

          const cars = generateRandomCars();
          await Promise.all(cars.map(async (car) => createCar(car)));
          await updateStateGarage();
          if (garage) {
            garage.textContent = '';
            garage.append(renderGarage());
          }
          e.target.disabled = false;
        }
      }
    }
  });
};
