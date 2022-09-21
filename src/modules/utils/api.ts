import {
  CreateCarInterface,
  UpdateCarInterface,
  Sort,
  Order,
  CreateWinner,
  GetCarsReturn,
  GetWinners,
  CarInterface,
} from './types';
import {
  url, apiResponseStatus, limitLinesPerWinnersPage, limitCarsPerGaragePage,
} from './constants';

const winners = `${url}/winners`;
const garage = `${url}/garage`;
const engine = `${url}/engine`;

/** CARS */
export const getCars = async (page: number, limit = limitCarsPerGaragePage) => {
  const response = await fetch(`${garage}?_page=${page}&_limit=${limit}`);
  const carsArr: GetCarsReturn = {
    items: await response.json(),
    count: response.headers.get('X-Total-Count'),
  };
  return carsArr;
};

export const getCar = async (id: number): Promise<CarInterface> => (await fetch(`${garage}/${id}`)).json();

export const createCar = async (body: CreateCarInterface) => (await fetch(garage, {
  method: 'POST',
  body: JSON.stringify(body),
  headers: {
    'Content-Type': 'application/json',
  },
})).json();

export const deleteCar = async (id: number) => (
  await fetch(`${garage}/${id}`, { method: 'DELETE' })).json();

export const upadateCar = async (id: number, body: UpdateCarInterface) => (await fetch(`${garage}/${id}`, {
  method: 'PUT',
  body: JSON.stringify(body),
  headers: {
    'Content-Type': 'application/json',
  },
})).json();

/** MOOVES */
export const startEngine = async (id: number) => (
  await fetch(
    `${engine}?id=${id}&status=started`,
    {
      method: 'PATCH',
    },
  )
).json();

export const stopEngine = async (id: number) => (
  await fetch(
    `${engine}?id=${id}&status=stopped`,
    {
      method: 'PATCH',
    },
  )
).json();

export const driveCar = async (id: number) => {
  const response = await fetch(`${engine}?id=${id}&status=drive`, { method: 'PATCH' });
  if (response.status !== apiResponseStatus.OK) return { success: false };
  return { ...(await response.json()) };
};

/** SORTING */
const getSortOrder = (sort: Sort, order: Order) => `&_sort=${sort}&_order=${order}`;

/** WINNER */
export const getWinners = async (
  page: number,
  sort: Sort,
  order: Order,
  limit = limitLinesPerWinnersPage,
) => {
  const response = await fetch(`${winners}?_page=${page}&_limit=${limit}${getSortOrder(sort, order)}`);
  const items: GetWinners[] = await response.json();

  return {
    items: await Promise.all(items.map(async (winner) => ({
      ...winner,
      car: await getCar(winner.id),
    }))),
    count: response.headers.get('X-Total-Count'),
  };
};

export const getWinner = async (id: number): Promise<GetWinners> => (await fetch(`${winners}/${id}`)).json();

export const getWinnerStatus = async (id: number) => (await fetch(`${winners}/${id}`)).status;

export const deleteWinner = async (id: number) => (
  await fetch(`${winners}/${id}`, { method: 'DELETE' })
).json();

export const createWinner = async (body: CreateWinner) => (await fetch(winners, {
  method: 'POST',
  body: JSON.stringify(body),
  headers: {
    'Content-Type': 'application/json',
  },
})).json();

export const updateWinner = async (id: number, body: CreateWinner) => (await fetch(`${winners}/${id}`, {
  method: 'PUT',
  body: JSON.stringify(body),
  headers: {
    'Content-Type': 'application/json',
  },
})).json();

export const saveWinner = async (id: number, time: number) => {
  const winnerStatus = await getWinnerStatus(id);
  if (winnerStatus === apiResponseStatus.NOTFOUND) {
    await createWinner({
      id,
      wins: 1,
      time,
    });
  } else {
    const winner = await getWinner(id);
    await updateWinner(id, {
      id,
      wins: winner.wins + 1,
      time: time < winner.time ? time : winner.time,
    });
  }
};
