/***************************************************************************************
*    Title: Week 4-Enterprise JavaScript II
*    Author: Alex Thomas
*    Date: 1/24/2023
*    File: food-model.js
*    Description: Enterprise JavaScript set up for the class
*    Source Code Attribution: Week 4 instructions
***************************************************************************************/

// creating a class FoodModel and exporting it
export class FoodModel {
    // inititalizing id, name and calories.
    constructor (id, name, calories)
    {
        this.id=id;
        this.name=name;
        this.calories=calories;
    }
}