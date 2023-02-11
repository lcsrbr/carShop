import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import CarService from '../../../src/Services/CarService';
import CarDomain from '../../../src/Domains/Car';
import * as M from '../../mocks/carMocks';

describe('Deveria testar as rotas derivadas de /cars', function () {
  describe('Deveria testar as rotas de criação /POST de carros', function () {
    it('Deveria criar um novo carro com sucesso', async function () {
      const expOutput = new CarDomain(M.newCar);
      sinon.stub(Model, 'create').resolves(expOutput);
      const service = new CarService();
      const result = await service.create(M.newCar);
      expect(result).to.be.deep.equal(expOutput);
    });
  });

  describe('Deveria testar as rotas de retorno /GET de carros', function () {
    it('Deveria listar os carros com sucesso', async function () {
      sinon.stub(Model, 'find').resolves(M.carArr);
      const service = new CarService();
      const result = await service.findAll();
      expect(result).to.be.deep.equal(M.carArr);
    });

    it('Deveria exibir um carro por ID', async function () {
      sinon.stub(Model, 'findOne').resolves(M.carById);
      const service = new CarService();
      const result = await service.findById(M.id);
      expect(result).to.be.deep.equal(M.carById);
    });

    it('Deveria gerar um erro na busca de um carro por ID inválido', async function () {
      sinon.stub(Model, 'findOne').resolves({});
      try {
        const service = new CarService();
        await service.findById(M.invalidId);
      } catch (e) {
        expect((e as Error).message).to.be.equal(M.invalidIdMessage);
      }
    });

    it('Deveria gerar um erro na busca de um carro por ID inexistente', async function () {
      sinon.stub(Model, 'findOne').resolves();
      try {
        const service = new CarService();
        await service.findById(M.inexistentId);
      } catch (e) {
        expect((e as Error).message).to.be.equal(M.notFoundMessage);
      }
    });
    afterEach(function () {
      sinon.restore();
    });
  });

  describe('Deveria testar as rotas de deleção /DELETE de carros', function () {
    it('Deveria deletar um carro por ID', async function () {
      sinon.stub(Model, 'findByIdAndDelete').resolves(M.carById);
      sinon.stub(Model, 'findOne').resolves(M.carById);

      const service = new CarService();
      const response = await service.delete(M.id);

      expect(response).to.be.deep.equal(undefined);
    });

    it('Deveria gerar um erro ao tentar deletar um carro por um ID inválido', async function () {
      sinon.stub(Model, 'findByIdAndDelete').resolves();
      sinon.stub(Model, 'findOne').resolves();

      try {
        const service = new CarService();
        await service.delete(M.invalidId);
      } catch (e) {
        expect((e as Error).message).to.be.equal(M.invalidIdMessage);
      }
    });

    it('Deveria gerar um erro ao tentar deletar um carro por um ID inexistente', async function () {
      sinon.stub(Model, 'findByIdAndDelete').resolves();
      sinon.stub(Model, 'findOne').resolves();

      try {
        const service = new CarService();
        await service.delete(M.inexistentId);
      } catch (e) {
        expect((e as Error).message).to.be.deep.equal(M.notFoundMessage);
      }
    });
    afterEach(function () {
      sinon.restore();
    });
  });

  describe('Deveria testar as rotas de atualizar /PUT de carros ', function () {
    it('Deveria atualizar um carro por ID', async function () {
      sinon.stub(Model, 'findByIdAndUpdate').resolves(M.carById);
      const service = new CarService();
      const response = await service.update(M.id, M.newCar);
      expect(response).to.be.deep.equal(M.carById);
    });

    it('Deveria gerar um erro ao tentar atualizar um carro por um ID inválido', async function () {
      sinon.stub(Model, 'findOneAndUpdate').resolves({});
      try {
        const service = new CarService();
        await service.update(M.invalidId, M.newCar);
      } catch (e) {
        expect((e as Error).message).to.be.equal(M.invalidIdMessage);
      }
    });

    it(`Deveria gerar um erro ao
     tentar atualizar um carro por um ID inexistente`, async function () {
      sinon.stub(Model, 'findOneAndUpdate').resolves(undefined);

      try {
        const service = new CarService();
        await service.update(M.inexistentId, M.newCar);
      } catch (e) {
        expect((e as Error).message).to.be.equal(M.notFoundMessage);
      }
    });
    afterEach(function () {
      sinon.restore();
    });
  });
});