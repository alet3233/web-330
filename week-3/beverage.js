// importing product to use product in this file
import { Product } from "./product.js";

// exporting a class of beverage which will initialize name and price which will use product as it's parent
export class Beverage extends Product
{
    constructor(name, price)
    {
        super(name, price);
    }
}