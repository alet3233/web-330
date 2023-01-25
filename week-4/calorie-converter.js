/***************************************************************************************
*    Title: Week 4-Enterprise JavaScript II
*    Author: Alex Thomas
*    Date: 1/24/2023
*    File: calorie-converter.js
*    Description: Enterprise JavaScript set up for the class
*    Source Code Attribution: Week 4 instructions
***************************************************************************************/

// importing foodModel using module sytem
import { FoodModel} from "./food-model.js";

// creating a class and exporting it.
export class CalorieConverter {
    // creating a static data by passing values to foodModel to initialize it.
    static data = [
        new FoodModel (1007, "Egg", 78),
        new FoodModel (1008, "Apple", 95),
        new FoodModel (1009, "Hamburger", 354),
        new FoodModel (1010, "Fries", 400),
        new FoodModel (1011, "Banana", 105),
        new FoodModel (1012, "Soda", 150),
    ]
    // making a find  method to which will find for food with its name.
    static find (string) {
        return this.data.filter(food => food.name.toLowerCase().includes(string.toLowerCase()))
    }
}