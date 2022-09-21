import { getCar, upadateCar } from '../utils/api';
import { renderGarage } from '../page/2.1_renderGarage/renderGarage';
import { updateStateGarage } from './updateStateGarage';

let selectedCar: { name: string; color: string; id: number; } | null = null;

export const updateCarBtn = () => {
  const garage = document.getElementById('garage');
  document.getElementById('update')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const carName: HTMLElement | null = document.getElementById('update-name');
    const carColor: HTMLElement | null = document.getElementById('update-color');
    if (carName instanceof HTMLInputElement && carColor instanceof HTMLInputElement) {
      const car = { name: carName.value, color: carColor.value };
      if (selectedCar) {
        await upadateCar(selectedCar.id, car);
        await updateStateGarage();
        if (garage) {
          garage.textContent = '';
          garage.append(renderGarage());
        }
        const updateName = document.getElementById('update-name');
        if (updateName && updateName instanceof HTMLInputElement) {
          updateName.value = '';
          updateName.disabled = true;
        }
        const updateColor = document.getElementById('update-color');
        if (updateColor instanceof HTMLInputElement) {
          updateColor.disabled = true;
        }
        const updateSubmit = document.getElementById('update-submit');
        if (updateSubmit instanceof HTMLButtonElement) {
          updateSubmit.disabled = true;
        }
        if (updateColor instanceof HTMLInputElement) {
          updateColor.value = '#ffffff';
        }
        selectedCar = null;
      }
    }
  });
};
export const updateCar = () => {
  document.body.addEventListener('click', async (e) => {
    if (e.target && e.target instanceof HTMLElement) {
      if (e.target.classList.contains('select-button')) {
        const updateName = document.getElementById('update-name');
        const updateColor = document.getElementById('update-color');
        const updateSubmit = document.getElementById('update-submit');
        selectedCar = await getCar(+e.target.id.split('select-car-')[1]);
        if (selectedCar && updateName instanceof HTMLInputElement) {
          updateName.value = selectedCar.name;
          updateName.disabled = false;
        }
        if (selectedCar && updateColor instanceof HTMLInputElement) {
          updateColor.value = selectedCar.color;
          updateColor.disabled = false;
        }
        if (updateSubmit instanceof HTMLButtonElement) {
          updateSubmit.disabled = false;
        }
      }
    }
  });
};
