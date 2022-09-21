import store from './state';
import {
  models, names, maxColorRange, countGenerateRandomCars,
} from './constants';

function getPositionAtCenter(element: HTMLElement) {
  const {
    top,
    left,
    width,
    height,
  } = element.getBoundingClientRect();
  return {
    x: left + width / 2,
    y: top + height / 2,
  };
}

export function getDistanceBetweenElements(elementOne: HTMLElement, elementTwo: HTMLElement) {
  const elementOnePosition = getPositionAtCenter(elementOne);
  const elementTwoPosition = getPositionAtCenter(elementTwo);
  return Math.hypot(
    elementOnePosition.x - elementTwoPosition.x,
    elementOnePosition.y - elementTwoPosition.y,
  );
}

export function animationCar(car: HTMLElement, distance: number, animationTime: number) {
  let start: number | null = null;
  let requestID = 0;

  function animation(timestamp: number | null) {
    if (!start) {
      start = timestamp;
    }
    if (timestamp && start && car) {
      const progress = timestamp - start;
      const passed = Math.round(progress * (distance / animationTime));
      car.style.transform = `translateX(${Math.min(passed, distance)}px)`;

      if (passed < distance) {
        requestID = window.requestAnimationFrame(animation);
        store.animation.id = requestID;
      }
    }
  }
  requestID = window.requestAnimationFrame(animation);
  return requestID;
}

export const getRandomeName = () => {
  const model = models[Math.floor(Math.random() * models.length)];
  const name = names[Math.floor(Math.random() * names.length)];

  return `${model} ${name}`;
};

const getRandomColor = () => `#${Math.floor(Math.random() * maxColorRange).toString(16)}`;

// eslint-disable-next-line max-len
export const generateRandomCars = (count = countGenerateRandomCars) => new Array(count).fill(1).map(() => (
  {
    name: getRandomeName(),
    color: getRandomColor(),
  }
));
