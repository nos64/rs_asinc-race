import { createHTMLElement } from '../../utils/createHTMLElement';
import './renderCar.scss';
import { CarInterface } from '../../utils/types';
import '../../../img/flag.png';
import { getCarImage } from './getCarImage';

export const renderCar = (data: CarInterface) => {
  const carWrapper = createHTMLElement('div', 'car-wrapper');

  const btnWrapper = createHTMLElement('div', 'car-buttuns-wrapper');

  const selectBtn = createHTMLElement('button', ['button', 'select-button']);
  selectBtn.textContent = 'Select';
  selectBtn.id = `select-car-${data.id}`;

  const removeBtn = createHTMLElement('button', ['button', 'remove-button']);
  removeBtn.textContent = 'Remove';
  removeBtn.id = `remove-car-${data.id}`;

  const nameSpan = createHTMLElement('span', 'car-name');
  nameSpan.textContent = data.name;

  const road = createHTMLElement('div', 'road');
  const launchPad = createHTMLElement('div', 'launch-pad');
  const controlPanel = createHTMLElement('div', 'control-panel');
  const startEngineBtn = createHTMLElement('button', ['icon', 'start-engine-button']);
  startEngineBtn.id = `start-engine-car-${data.id}`;

  startEngineBtn.textContent = 'Start';
  const stopEngineBtn = createHTMLElement('button', ['icon', 'stop-engine-button']);
  stopEngineBtn.id = `stop-engine-car-${data.id}`;
  if (stopEngineBtn instanceof HTMLButtonElement) {
    stopEngineBtn.disabled = true;
  }
  stopEngineBtn.textContent = 'Stop';
  const car = createHTMLElement('div', 'car');
  car.id = `car-${data.id}`;

  car.innerHTML = `${getCarImage(data.color)}`;

  const flag = createHTMLElement('img', 'flag');
  if (flag instanceof HTMLImageElement) {
    flag.src = './img/flag.png';
  }
  flag.id = `flag-${data.id}`;

  btnWrapper.append(selectBtn, removeBtn, nameSpan);
  controlPanel.append(startEngineBtn, stopEngineBtn);
  launchPad.append(controlPanel, car);
  road.append(launchPad, flag);
  carWrapper.append(btnWrapper, road);

  return carWrapper;
};
