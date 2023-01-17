import {
  Schema,
} from 'mongoose';
import ICar from '../Interfaces/ICar';
import AbstractODM from './AbstractODM';

export default class CarModel extends AbstractODM<ICar> {
  constructor() {
    const schema = new Schema<ICar>(
      {
        model: { type: String, required: true },
        year: { type: Number, required: true },
        color: { type: String, required: true },
        status: { type: Boolean, required: false, default: false },
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
    super(schema, 'Cars');
  }

  public async count() {
    const cars = await this.model.countDocuments({});
    return cars;
  }

  public async findAll() {
    const cars = await this.model.find({});
    return cars;
  }

  public async findById(id: string) {
    const cars = await this.model.findById(id);
    return cars;
  }
}
