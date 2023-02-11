import { isValidObjectId } from 'mongoose';
import CarModel from '../Models/CarODM';
import CarDomain from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import HttpError from '../Utils/HttpError';

export default class CarService {
  private carModel = new CarModel();
  
  private getCarDomain(car: ICar): CarDomain {
    return new CarDomain(car);
  }

  public async create(param: ICar) {
    const result = await this.carModel.create(param);
    return this.getCarDomain(result);
  }
  
  public async update(id: string, param: ICar) {
    if (!isValidObjectId(id)) throw new HttpError(422, 'Invalid mongo id');
    const result = await this.carModel.update(id, param);
    if (!result) throw new HttpError(404, 'Car not found');
    return this.getCarDomain(result);
  }

  public async findAll() {
    const result = await this.carModel.findAll();

    return result.map((car) => this.getCarDomain(car));
  }

  public async findById(id: string) {
    if (!isValidObjectId(id)) throw new HttpError(422, 'Invalid mongo id');
    const result = await this.carModel.findById(id);
    if (!result) throw new HttpError(404, 'Car not found');
    return this.getCarDomain(result);
  }

  public async delete(id: string): Promise<void> {
    const searchById = await this.carModel.findById(id);
    if (searchById) {
      await this.carModel.delete(id);
    }
  }
}
