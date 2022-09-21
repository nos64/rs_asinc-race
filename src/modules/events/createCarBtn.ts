import { createCar } from '../utils/api';
import { renderGarage } from '../page/2.1_renderGarage/renderGarage';
import { updateStateGarage } from './updateStateGarage';

let carCount = 1;
export const createCarBtn = () => {
  const garage = document.getElementById('garage');
  document.getElementById('create')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const carName: HTMLElement | null = document.getElementById('create-name');
    const carColor: HTMLElement | null = document.getElementById('create-color');
    if (carName instanceof HTMLInputElement && carColor instanceof HTMLInputElement) {
      if (carName.value === '') {
        carName.value = `New Car-${carCount++}`;
      }
      const car = { name: carName.value, color: carColor.value };
      await createCar(car);
      await updateStateGarage();
    }
    if (garage) {
      garage.innerHTML = '';
      garage.append(renderGarage());
    }
    const createName = document.getElementById('create-name');
    if (createName && createName instanceof HTMLInputElement) {
      createName.value = '';
    }
    if (e.target instanceof HTMLButtonElement) {
      e.target.disabled = true;
    }
  });
};
