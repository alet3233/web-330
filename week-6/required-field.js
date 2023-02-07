/***************************************************************************************
*    Title: Week 6-Enterprise JavaScript II
*    Author: Alex Thomas
*    Date: 02/07/2023
*    File: required-field.js
*    Description: Enterprise JavaScript set up for the class
*    Source Code Attribution: Week 6 instructions
***************************************************************************************/
// exporting class export class RequiredField
export class RequiredField{
    constructor (name, field){
        this.name=name
        this.field=field
    }
    // validating if the field is boolean
    validate(){
        return Boolean(this.field)
    }
    // generating error message if he doesn't enter enything in the field
    getMessage(){
        return this.name + " is a required field." 
    }
}