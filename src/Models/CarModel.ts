import {
  Model,
  Schema,
  model,
  models,
} from 'mongoose';
import CarsDomain from '../Domains/Car';
import ICar from '../Interfaces/ICar';

export default class CarModel {
  private schema: Schema;
  private model: Model<ICar>;

  constructor() {
    this.schema = new Schema<ICar>(
      {
        model: { type: String, required: true },
        year: { type: Number, required: true },
        color: { type: String, required: true },
        status: { type: Boolean, required: false },
        buyValue: { type: Number, required: true },
        doorsQty: { type: Number, required: true },
        seatsQty: { type: Number, required: true },
      },
      {
        versionKey: false,
        toJSON: {
          transform(_doc, ret) {
            const elt = ret;
            elt.id = ret._id;
            delete elt._id;
          },
        },
      },
    );
    this.model = models.Cars || model('Cars', this.schema);
  }

  public async count() {
    const cars = await this.model.countDocuments({});
    return cars;
  }

  public async create(car: CarsDomain): Promise<ICar> {
    return this.model.create({
      id: car.getId(),
      model: car.getModel(),
      year: car.getYear(),
      color: car.getColor(),
      status: car.getStatus(),
      buyValue: car.getBuyValue(),
      doorsQty: car.getDoorsQty(),
      seatsQty: car.getSeatsQty(),
    });
  }
}
