import { isValidObjectId } from 'mongoose';
import CarModel from '../Models/CarModel';
import CarDomain from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import HttpError from '../Utils/HttpError';

export default class CarService {
  private carModel = new CarModel();

  public async count() {
    const cars = await this.carModel.count();
    return cars;
  }

  public async create(param: ICar) {
    let newCar = new CarDomain(param);
    if (!param.status) {
      const newParam = { ...param, status: false }; 
      newCar = new CarDomain(newParam);
    }
    const cars = await this.carModel.create(newCar);
    return cars;
  }

  public async findAll() {
    const cars = await this.carModel.findAll();
    return cars;
  }

  public async findById(id: string) {
    if (!isValidObjectId(id)) throw new HttpError(422, 'Invalid mongo id');
    const cars = await this.carModel.findById(id);
    if (!cars) throw new HttpError(404, 'Car not found');
    return cars;
  }
}
