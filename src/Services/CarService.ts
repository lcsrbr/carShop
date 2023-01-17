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

  public async count() {
    const cars = await this.carModel.count();
    return cars;
  }

  public async create(param: ICar) {
    const cars = await this.carModel.create(param);
    return this.getCarDomain(cars);
  }

  public async findAll() {
    const cars = await this.carModel.findAll();

    return cars.map((car) => this.getCarDomain(car));
  }

  public async findById(id: string) {
    if (!isValidObjectId(id)) throw new HttpError(422, 'Invalid mongo id');
    const cars = await this.carModel.findById(id);
    if (!cars) throw new HttpError(404, 'Car not found');
    return this.getCarDomain(cars);
  }
}
