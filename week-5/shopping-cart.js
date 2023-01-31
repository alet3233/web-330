/***************************************************************************************
*    Title: Week 5-Enterprise JavaScript II
*    Author: Alex Thomas
*    Date: 1/31/2023
*    File: shopping-cart.js
*    Description: Enterprise JavaScript set up for the class
*    Source Code Attribution: Week 5 instructions
***************************************************************************************/
// exporting class ShoppingCart
export class ShoppingCart{
    constructor(){
        // initializing the products as an empty array.
        this.products=[]
    }
    // creating a method count that will return total number of products
    count(){
        return this.products.length
    }
    // creating a method add() that will add new product to products array 
    add(product){
        this.products.push(product)
    }
    // iterating through all the products and returning each product using iterator
    *[Symbol.iterator](){
        for (const iterator of this.products) {
            yield iterator;
        }
    }
}