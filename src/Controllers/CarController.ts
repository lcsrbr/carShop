import { NextFunction, Request, Response } from 'express';
import CarService from '../Services/CarService';
import ICar from '../Interfaces/ICar';

export default class CarsController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: CarService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new CarService();
  }

  public async create() {
    const car: ICar = { ...this.req.body };
    try {
      const result = await this.service.create(car);
      return this.res.status(201).json(result);
    } catch (error) {
      this.next(error);
    }
  }

  public async update() {
    const { id } = this.req.params;
    const car: ICar = { ...this.req.body };
    try {
      const result = await this.service.update(id, car);
      return this.res.status(200).json(result);
    } catch (error) {
      this.next(error);
    }
  }

  public async findAll() {
    try {
      const result = await this.service.findAll();
      return this.res.status(200).json(result);
    } catch (error) {
      this.next(error);
    }
  }

  public async findById() {
    try {
      const { id } = this.req.params;
      const result = await this.service.findById(id);
      return this.res.status(200).json(result);
    } catch (error) {
      this.next(error);
    }
  }

  public async delete() {
    try {
      const { id } = this.req.params;
      await this.service.delete(id);
      return this.res.status(204).json();
    } catch (error) {
      this.next(error);
    }
  }
}
