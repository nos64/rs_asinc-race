import { stopEngine } from '../utils/api';
import store from '../utils/state';

export const stopDriving = async (id: number) => {
  const stopButton = document.getElementById(`stop-engine-car-${id}`);
  if (stopButton && stopButton instanceof HTMLButtonElement) {
    stopButton.disabled = true;
  }
  await stopEngine(id);
  const startButton: HTMLElement | null = document.getElementById(`start-engine-car-${id}`);
  if (startButton && startButton instanceof HTMLButtonElement) {
    startButton.disabled = false;
  }
  const car: HTMLElement | null = document.getElementById(`car-${id}`);
  if (car) {
    car.style.transform = 'translateX(0)';
  }
  if (store.animation.id) {
    window.cancelAnimationFrame(store.animation.id);
  }
};
