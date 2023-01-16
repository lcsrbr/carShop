import {
    Model,
    Schema,
    model,
    models,
} from 'mongoose';
//   import Payment from '../Domain/Payment';
//   import IPayment from '../Interfaces/IPayment';

export default class CarModel {
    private schema: Schema;
    private model: Model<any>;

    constructor() {
        this.schema = new Schema<any>({
            id: { type: String, required: true },
            model: { type: String, required: true },
            year: { type: Number, required: true },
            color: { type: String, required: true },
            status: { type: Boolean, required: true },
            buyValue: { type: Number, required: true },
            doorsQty: { type: Number, required: true },
            seatsQty: { type: Number, required: true },
        });
        this.model = models.Cars || model('Cars', this.schema);
    }

    public async count() {
        const cars = await this.model.countDocuments({})
        return cars
    }

}
