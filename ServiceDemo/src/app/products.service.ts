import { Products } from "./products";

export class ProductService{
    public getProducts(){
        let products: Products[];
        products =[
            new Products(1,"Ball Pens",500),
            new Products(2,"Soaps",750),
            new Products(3,"Books",345),
        ]
        return products;
    }
}