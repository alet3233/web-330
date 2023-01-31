/***************************************************************************************
*    Title: Week 5-Enterprise JavaScript II
*    Author: Alex Thomas
*    Date: 1/31/2023
*    File: cart-component.js
*    Description: Enterprise JavaScript set up for the class
*    Source Code Attribution: Week 5 instructions
***************************************************************************************/

// creating a class Product, extending HTMLElement Interface and exporting it
export class CartComponent extends HTMLElement{
    // Initializing the constructor
    constructor(){
        // calling the super which will call HTMLElement constructor
        super()
    }
    // making a method connectedCallback which will make an HTML containing fa icon and count numner of items
    connectedCallback(){
        this.innerHTML = `
        <i id="cartIcon" class="fa fa-shopping-cart"></i> (<span id="cart-count"></span>)
        `;
    }
}
// defining element as cart-component so that later on it will be referred with this name.
customElements.define("cart-component", CartComponent)
