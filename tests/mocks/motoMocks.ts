import IMotorcycle from '../../src/Interfaces/IMotorcycle';

const model = 'Honda Cb 600f Hornet';

export const notFoundMessage = 'Motorcycle not found';
export const invalidIdMessage = 'Invalid mongo id';
export const id = '634852326b35b59438fbea2f';
export const invalidId = '63c58cf07f3b663d';
export const inexistentId = '63c58cf07f367d16a9b6463d';

export const newMoto: IMotorcycle = {
  model,
  year: 2005,
  color: 'Yellow',
  status: true,
  buyValue: 30.000,
  category: 'Street',
  engineCapacity: 600,
};

export const motoById: IMotorcycle = {
  ...newMoto, id: '634852326b35b59438fbea2f',
};

export const motoArr: IMotorcycle[] = [
  {
    id: '634852326b35b59438fbea2f',
    model,
    year: 2005,
    color: 'Yellow',
    status: true,
    buyValue: 30.000,
    category: 'Street',
    engineCapacity: 600,
  },
  {
    id: '634852326b35b59438fbea31',
    model: 'Honda Cbr 1000rr',
    year: 2011,
    color: 'Orange',
    status: true,
    buyValue: 59.900,
    category: 'Street',
    engineCapacity: 1000,
  },
];