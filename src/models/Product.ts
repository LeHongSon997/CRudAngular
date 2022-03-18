export class Product{
  id!: number;
  price!: number;
  name!: string;
  img!: string;
  status!: boolean;

  constructor(id: number, price: number, name: string, img: string, status: boolean) {
    this.id = id;
    this.price = price;
    this.name = name;
    this.img = img;
    this.status = status;
  }
}
