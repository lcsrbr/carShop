import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import MotoService from '../../../src/Services/MotoService';
import MotoDomain from '../../../src/Domains/Motorcycle';
import * as M from '../../mocks/motoMocks';

describe('Deveria testar as rotas derivadas de /motorcycles', function () {
  describe('Deveria testar as rotas de criação /POST de motos', function () {
    it('Deveria criar uma nova moto com sucesso', async function () {
      const expOutput = new MotoDomain(M.newMoto);
      sinon.stub(Model, 'create').resolves(expOutput);
      const service = new MotoService();
      const result = await service.create(M.newMoto);
      expect(result).to.be.deep.equal(expOutput);
    });
  });

  describe('Deveria testar as rotas de retorno /GET de motos', function () {
    it('Deveria listar as motos com sucesso', async function () {
      sinon.stub(Model, 'find').resolves(M.motoArr);
      const service = new MotoService();
      const result = await service.findAll();
      expect(result).to.be.deep.equal(M.motoArr);
    });

    it('Deveria exibir uma moto por ID', async function () {
      sinon.stub(Model, 'findOne').resolves(M.motoById);
      const service = new MotoService();
      const result = await service.findById(M.id);
      expect(result).to.be.deep.equal(M.motoById);
    });

    it('Deveria gerar um erro na busca de uma moto por ID inválido', async function () {
      sinon.stub(Model, 'findOne').resolves({});
      try {
        const service = new MotoService();
        await service.findById(M.invalidId);
      } catch (e) {
        expect((e as Error).message).to.be.equal(M.invalidIdMessage);
      }
    });

    it('Deveria gerar um erro na busca de uma moto por ID inexistente', async function () {
      sinon.stub(Model, 'findOne').resolves();
      try {
        const service = new MotoService();
        await service.findById(M.inexistentId);
      } catch (e) {
        expect((e as Error).message).to.be.equal(M.notFoundMessage);
      }
    });
    afterEach(function () {
      sinon.restore();
    });
  });

  describe('Deveria testar as rotas de deleção /DELETE de motos', function () {
    it('Deveria deletar uma moto por ID', async function () {
      sinon.stub(Model, 'findByIdAndDelete').resolves(M.motoById);
      sinon.stub(Model, 'findOne').resolves(M.motoById);

      const service = new MotoService();
      const response = await service.delete(M.id);

      expect(response).to.be.deep.equal(undefined);
    });

    it('Deveria gerar um erro ao tentar deletar uma moto por um ID inválido', async function () {
      sinon.stub(Model, 'findByIdAndDelete').resolves();
      sinon.stub(Model, 'findOne').resolves();

      try {
        const service = new MotoService();
        await service.delete(M.invalidId);
      } catch (e) {
        expect((e as Error).message).to.be.equal(M.invalidIdMessage);
      }
    });

    it('Deveria gerar um erro ao tentar deletar uma moto por um ID inexistente', async function () {
      sinon.stub(Model, 'findByIdAndDelete').resolves();
      sinon.stub(Model, 'findOne').resolves();

      try {
        const service = new MotoService();
        await service.delete(M.inexistentId);
      } catch (e) {
        expect((e as Error).message).to.be.deep.equal(M.notFoundMessage);
      }
    });
    afterEach(function () {
      sinon.restore();
    });
  });

  describe('Deveria testar as rotas de atualizar /PUT de motos ', function () {
    it('Deveria atualizar uma moto por ID', async function () {
      sinon.stub(Model, 'findByIdAndUpdate').resolves(M.motoById);
      const service = new MotoService();
      const response = await service.update(M.id, M.newMoto);
      expect(response).to.be.deep.equal(M.motoById);
    });

    it('Deveria gerar um erro ao tentar atualizar uma moto por um ID inválido', async function () {
      sinon.stub(Model, 'findOneAndUpdate').resolves({});
      try {
        const service = new MotoService();
        await service.update(M.invalidId, M.newMoto);
      } catch (e) {
        expect((e as Error).message).to.be.equal(M.invalidIdMessage);
      }
    });

    it(`Deveria gerar um erro ao
     tentar atualizar uma moto por um ID inexistente`, async function () {
      sinon.stub(Model, 'findOneAndUpdate').resolves(undefined);

      try {
        const service = new MotoService();
        await service.update(M.inexistentId, M.newMoto);
      } catch (e) {
        expect((e as Error).message).to.be.equal(M.notFoundMessage);
      }
    });
    afterEach(function () {
      sinon.restore();
    });
  });
});