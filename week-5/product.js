/***************************************************************************************
*    Title: Week 5-Enterprise JavaScript II
*    Author: Alex Thomas
*    Date: 1/31/2023
*    File: product.js
*    Description: Enterprise JavaScript set up for the class
*    Source Code Attribution: Week 5 instructions
***************************************************************************************/

// creating a class Product and exporting it
export class Product {
    constructor(name, price){
        // inititalizing id, name and price. and generating random 16 characters long id
        this.id = Math.random().toString(16).slice(2);
        this.name=name;
        this.price=price
    }
}
