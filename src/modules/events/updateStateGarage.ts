import { getCars } from '../utils/api';
import store from '../utils/state';
import { limitCarsPerGaragePage, firstGaragePage } from '../utils/constants';

export const updateStateGarage = async () => {
  const prevBtn = document.getElementById('prev');
  const nextBtn = document.getElementById('next');
  const { items, count } = await getCars(store.carsPage);
  store.cars = items;
  store.carsCount = count;

  if (store.carsCount && prevBtn instanceof HTMLButtonElement
      && nextBtn instanceof HTMLButtonElement) {
    nextBtn.disabled = !(store.winnersPage * limitCarsPerGaragePage < +store.carsCount);

    prevBtn.disabled = !(store.carsPage > firstGaragePage);
  }
};
