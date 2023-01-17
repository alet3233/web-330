// importing product to use product in this file
import { Product } from "./product.js";

// exporting a class of main course which will initialize name and price which will use product as it's parent
export class MainCourse extends Product
{
    constructor(name, price)
    {
        super(name, price);
    }
}