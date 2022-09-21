import { createCarBtn } from './createCarBtn';
import { updateCar, updateCarBtn } from './updateCarBtn';
import { generateRandomCarsBtn } from './generateRandomCarsBtn';
import { paginationBtns } from './paginationBtns';
import { garageWinnersBtns } from './garageWinnersBtns';
import { removeBtn } from './removeBtn';
import { raceAll } from './raceAll';
import { resetAll } from './resetAll';
import { sortingWinnersBtns } from './sortingWinnersBtns';
import { startStopDriving } from './startStopDrivingBtns';

export const eventsListener = () => {
  createCarBtn();
  updateCarBtn();
  updateCar();
  generateRandomCarsBtn();
  paginationBtns();
  garageWinnersBtns();
  removeBtn();
  raceAll();
  resetAll();
  sortingWinnersBtns();
  startStopDriving();
};
