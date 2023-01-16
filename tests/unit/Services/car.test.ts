import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import CarService from '../../../src/Services/CarService';
import ICar from '../../../src/Interfaces/ICar';
import CarDomain from '../../../src/Domains/Car';

describe('Deveria criar um novo veículo POST /cars', function () {
  it('Deveria criar um novo veículo com sucesso', async function () {
    // Arrange
    const newCar: ICar = {
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.990,
      doorsQty: 4,
      seatsQty: 5,
    };

    const expOutput = new CarDomain(newCar);
    sinon.stub(Model, 'create').resolves(expOutput);

    const service = new CarService();
    const result = await service.create(newCar);   
    expect(result).to.be.deep.equal(expOutput);
  });
//   afterEach(function () {
//     sinon.restore();
//   });
});
