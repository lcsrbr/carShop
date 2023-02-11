import {
  Schema,
} from 'mongoose';
import IMoto from '../Interfaces/IMotorcycle';
import AbstractODM from './AbstractODM';

export default class MotoModel extends AbstractODM<IMoto> {
  constructor() {
    const schema = new Schema<IMoto>(
      {
        model: { type: String, required: true },
        year: { type: Number, required: true },
        color: { type: String, required: true },
        status: { type: Boolean, required: false, default: false },
        buyValue: { type: Number, required: true },
        category: { type: String, required: true },
        engineCapacity: { type: Number, required: true },
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
    super(schema, 'motorcycles');
  }
}
