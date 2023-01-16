import ICar from '../Interfaces/ICar';

export default class Car {
  protected id: string | undefined; 
  protected model: string; 
  protected year: number; 
  protected color: string; 
  protected status: boolean | undefined; 
  protected buyValue: number; 
  private doorsQty: number; 
  private seatsQty: number; 

  constructor(
    params: ICar,
  ) {
    this.id = params.id;
    this.model = params.model;
    this.year = params.year;
    this.color = params.color;
    this.status = params.status;
    this.buyValue = params.buyValue;
    this.doorsQty = params.doorsQty;
    this.seatsQty = params.seatsQty;
  }
  
  public getId() {
    return this.id;
  }
  
  public getModel() {
    return this.model;
  }
  
  public getYear() {
    return this.year;
  }
  
  public getStatus() {
    return this.status;
  }

  public getColor() {
    return this.color;
  }
  
  public getBuyValue() {
    return this.buyValue;
  }

  public getDoorsQty() {
    return this.doorsQty;
  }

  public getSeatsQty() {
    return this.seatsQty;
  }
}
