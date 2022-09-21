import { createHTMLElement } from '../../utils/createHTMLElement';
import { renderCar } from '../renderCar/renderCar';
import store from '../../utils/state';
import { CarInterface } from '../../utils/types';

export const renderGarage = () => {
  const garageWrapper = createHTMLElement('div', 'garage-wrapper');

  const garageTitle = createHTMLElement('h1', 'garage-title');
  garageTitle.textContent = `Garage #${store.carsCount}`;

  const garageTitlePage = createHTMLElement('h2', 'garage-title-page');
  garageTitlePage.textContent = `Page #${store.carsPage}`;
  const garageList = createHTMLElement('ul', 'garage-list');

  if (store) {
    store.cars.forEach((car: CarInterface) => {
      const li = createHTMLElement('li', 'garage-li');

      const carLi = renderCar(car);
      li.append(carLi);
      garageList.append(li);
    });
  }

  garageWrapper.append(garageTitle, garageTitlePage, garageList);
  return garageWrapper;
};
