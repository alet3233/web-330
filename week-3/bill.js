// exporting bill class
export class Bill
{
    // initializing beverages, appetizers, maincourses and desserts
    constructor(_beverages, _appetizers, _mainCourses, _desserts)
    {
        this._beverages = [];
        this._appetizers = [];
        this._mainCourses = [];
        this._desserts = [];
    }

    // making addFunctions for each menu which will take one parameter and push values from checkbox to the arrays that we initialized above 
    addBeverage(beverage) {
        this._beverages.push(beverage);
    }
    
    addAppetizer(appetizer) {
        this._appetizers.push(appetizer);
    }

    addMainCourse(mainCourse) {
        this._mainCourses.push(mainCourse);
    }

    addDessert(dessert) {
        this._desserts.push(dessert);
    }

    // making a getTotal method which will calculate the sum of all the checked items and return the sum up to 2 decimal places
    getTotal(){
        let total = 0;
        let beverageTotal = this._beverages.forEach(function(beverage)
        {
            total += parseFloat(beverage.price);
        })
        let appetizerTotal = this._appetizers.forEach(function(appetizer)
        {
            total += parseFloat(appetizer.price);
        })
        let mainCourseTotal = this._mainCourses.forEach(function(mainCourse)
        {
            total += parseFloat(mainCourse.price);
        })
        let dessertsTotal = this._desserts.forEach(function(dessert)
        {
            total += parseFloat(dessert.price);
        })

        return total.toFixed(2);
    }
}