export interface Carts {
  _id: string;
  carts: Cart[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}
export interface Cart {
  productName: string;
  imgUrl: string;
  price: number;
  quantity: number;
  _id: string;
}
