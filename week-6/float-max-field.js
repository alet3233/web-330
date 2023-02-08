/***************************************************************************************
*    Title: Week 6-Enterprise JavaScript II
*    Author: Alex Thomas
*    Date: 02/07/2023
*    File: float-max-field.js
*    Description: Enterprise JavaScript set up for the class
*    Source Code Attribution: Week 6 instructions
***************************************************************************************/
// exporting class FloatMaxField
export class FloatMaxField{
    constructor (name, field, max){
        this.name=name
        this.field=field
        this.max=max
    }
    // validating if the required field is float as well as less than default value
    validate(){
        return (parseFloat(this.field)) < this.max
    }
    // generating error message if he doesn't validate against required field is float as well as less than default value
    getMessage(){
        return this.name + " must be less than " +this.max + ". You entered " + this.field
    }
}