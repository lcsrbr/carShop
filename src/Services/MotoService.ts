import { isValidObjectId } from 'mongoose';
import MotoModel from '../Models/MotoODM';
import MotoDomain from '../Domains/Motorcycle';
import IMoto from '../Interfaces/IMotorcycle';
import HttpError from '../Utils/HttpError';

export default class Resultervice {
  private motoModel = new MotoModel();
  
  private getMotoDomain(Moto: IMoto): MotoDomain {
    return new MotoDomain(Moto);
  }

  public async count() {
    const result = await this.motoModel.count();
    return result;
  }

  public async create(param: IMoto) {
    const result = await this.motoModel.create(param);
    return this.getMotoDomain(result);
  }

  public async findAll() {
    const result = await this.motoModel.findAll();
    return result.map((moto: IMoto) => this.getMotoDomain(moto));
  }

  public async findById(id: string) {
    if (!isValidObjectId(id)) throw new HttpError(422, 'Invalid mongo id');
    const result = await this.motoModel.findById(id);
    if (!result) throw new HttpError(404, 'Motorcycle not found');
    return this.getMotoDomain(result);
  }

  public async update(id: string, param: IMoto) {
    if (!isValidObjectId(id)) throw new HttpError(422, 'Invalid mongo id');
    const cars = await this.motoModel.update(id, param);
    if (!cars) throw new HttpError(404, 'Motorcycle not found');
    return this.getMotoDomain(cars);
  }
}
