import { isValidObjectId } from 'mongoose';
import MotoModel from '../Models/MotoODM';
import IMoto from '../Interfaces/IMotorcycle';
import HttpError from '../Utils/HttpError';
import Motorcycle from '../Domains/Motorcycle';

export default class Resultervice {
  private motoModel = new MotoModel();
  
  private getMotoDomain(Moto: IMoto): Motorcycle {
    return new Motorcycle(Moto);
  }

  public async create(param: IMoto): Promise<Motorcycle | null> {
    const result = await this.motoModel.create(param);
    return this.getMotoDomain(result);
  }

  public async findAll(): Promise<Motorcycle[] | null> {
    const result = await this.motoModel.findAll();
    return result.map((moto: IMoto) => this.getMotoDomain(moto));
  }

  public async findById(id: string): Promise<Motorcycle | null> {
    if (!isValidObjectId(id)) throw new HttpError(422, 'Invalid mongo id');
    const result = await this.motoModel.findById(id);
    if (!result) throw new HttpError(404, 'Motorcycle not found');
    return this.getMotoDomain(result);
  }

  public async update(id: string, param: IMoto): Promise<Motorcycle | null> {
    if (!isValidObjectId(id)) throw new HttpError(422, 'Invalid mongo id');
    const result = await this.motoModel.update(id, param);
    if (!result) throw new HttpError(404, 'Motorcycle not found');
    return this.getMotoDomain(result);
  }

  public async delete(id: string): Promise<void> {
    const searchById = await this.motoModel.findById(id);
    if (searchById) {
      await this.motoModel.delete(id);
    }
  }
}
