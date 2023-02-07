/***************************************************************************************
*    Title: Week 6-Enterprise JavaScript II
*    Author: Alex Thomas
*    Date: 02/07/2023
*    File: float-field.js
*    Description: Enterprise JavaScript set up for the class
*    Source Code Attribution: Week 6 instructions
***************************************************************************************/
// exporting class FloatField
export class FloatField{
    constructor (name, field){
        this.name=name
        this.field=field
    }
    // validating if the required field is float or not
    validate(){
        return !isNaN(parseFloat(this.field))
    }
    // generating error message if he doesn't enter the float value input
    getMessage(){
        return this.name + " must be a float value. You entered " +this.field
    }
}