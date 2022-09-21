import store from '../utils/state';
import { driveCar, startEngine } from '../utils/api';
import { RaceAll } from '../utils/types';
import { animationCar, getDistanceBetweenElements } from '../utils/utils';
import { distanceOnFlag } from '../utils/constants';

export const startDriving = async (id: number) => {
  const startButton: HTMLElement | null = document.getElementById(`start-engine-car-${id}`);
  if (startButton && startButton instanceof HTMLButtonElement) {
    startButton.disabled = true;
  }

  const { velocity, distance } = await startEngine(id);
  const time = Math.round(distance / velocity);

  const stopEngBtn = document.getElementById(`stop-engine-car-${id}`);
  if (stopEngBtn && stopEngBtn instanceof HTMLButtonElement) {
    stopEngBtn.disabled = false;
  }

  const car: HTMLElement | null = document.getElementById(`car-${id}`);
  const flag: HTMLElement | null = document.getElementById(`flag-${id}`);
  if (car !== null && flag !== null) {
    const distanceBetweenElements = Math.floor(
      getDistanceBetweenElements(car, flag),
    ) + distanceOnFlag;
    animationCar(car, distanceBetweenElements, time);
  }
  const { success } = await driveCar(id);
  if (!success) {
    window.cancelAnimationFrame(store.animation.id);
  }

  const drivingObj: RaceAll = { success, id, time };

  return drivingObj;
};
