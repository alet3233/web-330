/***************************************************************************************
*    Title: Week 6-Enterprise JavaScript II
*    Author: Alex Thomas
*    Date: 02/07/2023
*    File: float-min-field.js
*    Description: Enterprise JavaScript set up for the class
*    Source Code Attribution: Week 6 instructions
***************************************************************************************/
// exporting class FloatMinField
export class FloatMinField{
    constructor (name, field, min){
        this.name=name
        this.field=field
        this.min=min
    }
    // validating if the required field is float as well as greater than default value
    validate(){
        return (parseFloat(this.field)) > this.field
    }
    // generating error message if he doesn't validate against required field is float as well as greater than default value
    getMessage(){
        return this.name + " must be more than " +this.min + ". You entered " + this.field
    }
}