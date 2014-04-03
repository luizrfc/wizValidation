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
There are currently 7 validators available with more in the works:

- integer
- decimal
- phone (currently UK only)
- postcode
- zipcode
- at least one
- equal to

All the validators follow the same pattern of prefixing, as an example for **Zipcode**:

- the directive is **wiz-val-zipcode**
- the ngClass is **ng-valid-wiz-val-zipcode** and **ng-invalid-wiz-val-zipcode**
- and the form `$error` property is **formName.inputName.$error.wizValZipcode**

##Use
To use the validators simply add `wiz-val-[validator-name]` as an attribute to HTML inputs:

    <input type="number"
           step=".5"
           name="decimal"
           ng-model="demo.decimal"
           wiz-val-decimal
           ng-class="{invalid: demoForm.decimal.$error.wizValDecimal}" />

###At least one and Equal to
Both of these validators have an extra option. Add the directive `wiz-val-at-least-one` or `wiz-val-equal-to` to each input you want to validate as a group. E.g.

    <input type="text" ng-model="user.email" wiz-val-equal-to />
    <input type="text" ng-model="user.confirmEmail" wiz-val-equal-to />
    
However if you want more than one grouping specify the group name like this: `wiz-val-at-least-one="myGroup"` e.g.

    <input type="text" ng-model="user.email" wiz-val-equal-to="firstSet" />
    <input type="text" ng-model="user.confirmEmail" wiz-val-equal-to="firstSet" />

    <input type="text" ng-model="user.email" wiz-val-equal-to="secondSet" />
    <input type="text" ng-model="user.confirmEmail" wiz-val-equal-to="secondSet" />

##Contributing
Feel free to contribute. That's it.
