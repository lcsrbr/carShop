import CarModel from '../Models/CarModel';

export default class CarService {
  private carModel = new CarModel();

  public async count() {
    const cars = await this.carModel.count()
    return cars
  }

}
