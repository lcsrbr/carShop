import ICar from '../../src/Interfaces/ICar';

export const notFoundMessage = 'Motorcycle not found';
export const invalidIdMessage = 'Invalid mongo id';
export const id = '634852326b35b59438fbea2f';
export const invalidId = '63c58cf07f3b663d';
export const inexistentId = '63c58cf07f367d16a9b6463d';

export const newCar: ICar = {
  model: 'Marea',
  year: 2002,
  color: 'Black',
  status: true,
  buyValue: 15.990,
  doorsQty: 4,
  seatsQty: 5,
};

export const carById: ICar = {
  ...newCar, id: '634852326b35b59438fbea2f',
};

export const carArr: ICar[] = [{
  id: '634852326b35b59438fbea2f',
  model: 'Marea',
  year: 2002,
  color: 'Black',
  status: true,
  buyValue: 15.990,
  doorsQty: 4,
  seatsQty: 5,
}, {
  id: '63b59438fbea2f4852326b35',
  model: 'Idea',
  year: 2008,
  color: 'Blue',
  status: true,
  buyValue: 19.990,
  doorsQty: 4,
  seatsQty: 5,
}];