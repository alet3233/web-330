/***************************************************************************************
*    Title: Week 6-Enterprise JavaScript II
*    Author: Alex Thomas
*    Date: 02/07/2023
*    File: finance-calculator.js
*    Description: Enterprise JavaScript set up for the class
*    Source Code Attribution: Week 6 instructions
***************************************************************************************/
// exporting class FinanceCalculator
export class FinanceCalculator {
    // setting default months
    static MONTHS_IN_YEAR = 12
    // calculating future value according to formula
    static calculateFutureValue(monthlyPayment, rate, years) {
        let months = years * FinanceCalculator.MONTHS_IN_YEAR
        let interestRate = 1 + rate / 100
        let presentValue = monthlyPayment * months
        let futureValue = presentValue * (Math.pow(interestRate, months))
        return futureValue.toFixed(2)
    }
    // conbverting the price to US currency format
    static convertToCurrency(field) {
        let currencyFormatter = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        });
        return currencyFormatter.format(field);
    }
}