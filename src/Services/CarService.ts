import CarModel from '../Models/CarModel';
import CarDomain from '../Domains/Car';
import ICar from '../Interfaces/ICar';

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
}
