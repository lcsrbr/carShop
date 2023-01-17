import { isValidObjectId } from 'mongoose';
import MotoModel from '../Models/MotoODM';
import MotoDomain from '../Domains/Motorcycle';
import IMoto from '../Interfaces/IMotorcycle';
import HttpError from '../Utils/HttpError';

export default class MotoService {
  private motoModel = new MotoModel();
  
  private getMotoDomain(Moto: IMoto): MotoDomain {
    return new MotoDomain(Moto);
  }

  public async count() {
    const motos = await this.motoModel.count();
    return motos;
  }

  public async create(param: IMoto) {
    const motos = await this.motoModel.create(param);
    return this.getMotoDomain(motos);
  }

  public async findAll() {
    const motos = await this.motoModel.findAll();
    return motos.map((moto: IMoto) => this.getMotoDomain(moto));
  }

  public async findById(id: string) {
    if (!isValidObjectId(id)) throw new HttpError(422, 'Invalid mongo id');
    const motos = await this.motoModel.findById(id);
    if (!motos) throw new HttpError(404, 'Motorcycle not found');
    return this.getMotoDomain(motos);
  }
}
