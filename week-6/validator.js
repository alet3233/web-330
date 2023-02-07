/***************************************************************************************
*    Title: Week 6-Enterprise JavaScript II
*    Author: Alex Thomas
*    Date: 02/07/2023
*    File: validator.js
*    Description: Enterprise JavaScript set up for the class
*    Source Code Attribution: Week 6 instructions
***************************************************************************************/

// importing the required fields using node module system
import { RequiredField } from "./required-field.js";
import { FloatField } from "./float-field.js";
import { FloatMinField } from "./float-min-field.js";
import { FloatMaxField } from "./float-max-field.js";

// exporting class Validator
export class Validator {
    validators = [];
    messages = [];

    constructor(name, field) {
        this.name = name;
        this.field = field;
    }
    // validating the input field and adding it to validators array after the return of respective class call
    addRequiredField(){
        this.validators.push(new RequiredField(this.name, this.field));
    }

    addRequiredFloatField(){
        this.validators.push(new FloatField(this.name, this.field));
    }

    addFloatMinField(min){
        this.validators.push(new FloatMinField(this.name, this.field, min));
    }

    addFloatMaxField(max){
        this.validators.push(new FloatMaxField(this.name, this.field, max));
    }

    // validating if the fields are not valid, adding relevant error messages for them.
    validate(){
        for (const validator of this.validators) {
            if(!validator.validate()){
                this.messages.push(validator.getMessage());
            }
        }
        return this.messages.length === 0;
    }
}