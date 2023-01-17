import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import MotoService from '../../../src/Services/MotoService';
import MotoDomain from '../../../src/Domains/Motorcycle';
import IMotorcycle from '../../../src/Interfaces/IMotorcycle';

describe('Deveria criar um novo veículo POST /motorcycle', function () {
  it('Deveria criar um novo veículo com sucesso', async function () {
    // Arrange
    const newMoto: IMotorcycle = {
      model: 'Honda Cb 600f Hornet',
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30.000,
      category: 'Street',
      engineCapacity: 600,
    };

    const expOutput = new MotoDomain(newMoto);
    sinon.stub(Model, 'create').resolves(expOutput);

    const service = new MotoService();
    const result = await service.create(newMoto);   
    expect(result).to.be.deep.equal(expOutput);
  });

  it('Deveria listar os veículos com sucesso', async function () {
    // Arrange
    const motoArr: IMotorcycle[] = [
      {
        id: '634852326b35b59438fbea2f',
        model: 'Honda Cb 600f Hornet',
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

    sinon.stub(Model, 'find').resolves(motoArr);
    const service = new MotoService();
    const result = await service.findAll();   
    expect(result).to.be.deep.equal(motoArr);
  });
  afterEach(function () {
    sinon.restore();
  });
});
