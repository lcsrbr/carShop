import { NextFunction, Request, Response } from 'express';
import MotoService from '../Services/MotoService';
import IMoto from '../Interfaces/IMotorcycle';

export default class MotosController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: MotoService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new MotoService();
  }

  public async count() {
    const motos = await this.service.count();
    return this.res.status(201).json({ motos });
  }

  public async create() {
    const moto: IMoto = { ...this.req.body };
    try {
      const motos = await this.service.create(moto);
      return this.res.status(201).json(motos);
    } catch (error) {
      this.next(error);
    }
  }

  public async findAll() {
    try {
      const motos = await this.service.findAll();
      return this.res.status(200).json(motos);
    } catch (error) {
      this.next(error);
    }
  }

  public async findById() {
    try {
      const { id } = this.req.params;
      const motos = await this.service.findById(id);
      return this.res.status(200).json(motos);
    } catch (error) {
      this.next(error);
    }
  }
}
