// importing product to use product in this file
import { Product } from "./product.js";

// exporting a class of dessert which will initialize name and price which will use product as it's parent
export class Dessert extends Product
{
    constructor(name, price)
    {
        super(name, price);
    }
}