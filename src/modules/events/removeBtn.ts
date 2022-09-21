import { deleteCar, deleteWinner } from '../utils/api';
import { renderGarage } from '../page/2.1_renderGarage/renderGarage';
import { updateStateGarage } from './updateStateGarage';

export const removeBtn = () => {
  const garage = document.getElementById('garage');
  document.body.addEventListener('click', async (e) => {
    if (e.target && e.target instanceof HTMLElement) {
      if (e.target.classList.contains('remove-button')) {
        const id = +e.target.id.split('remove-car-')[1];
        await deleteCar(id);
        await deleteWinner(id);
        await updateStateGarage();
        if (garage) {
          garage.innerHTML = '';
          garage.append(renderGarage());
        }
      }
    }
  });
};
