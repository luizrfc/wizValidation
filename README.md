#ngValidation
An AngularJS library for easier form validation.

##Install it
1. Grab the `wizValidation.min.js` file and drop it into your application
2. Add `'wiz.validation'` as a required module

Example:

    angular.module('myApp', [
      'wiz.validation'
    ]);


##Validators
There are currently 5 validators available with more in the works:

- integer
- decimal
- phone (currently UK only)
- postcode
- zipcode

All the validators follow the same pattern of prefixing, as an example for **Zipcode**:

- the directive is **wiz-val-zipcode**
- the ngClass is **ng-valid-wiz-val-zipcode**
- and the form `$error` property is **formName.inputName.$error.wizValZipcode**

##Use
To use the validators simply add `wiz-val-[validator-name]` as an attribute to HTML inputs:

    <input type="number"
           step=".5"
           name="decimal"
           ng-model="demo.decimal"
           wiz-val-decimal
           ng-class="{invalid: demoForm.decimal.$error.wizValDecimal}" />
