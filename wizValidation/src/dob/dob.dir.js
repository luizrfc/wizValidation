angular.module('wiz.validation.dob')

.directive('wizValDob', function () {
	return {
		restrict: 'A',
		require: 'ngModel',
		scope: { dobFromDate: '=wizValDobFromDate', dobToDate: '=wizValDobToDate' },
		link: function (scope, elem, attrs, ngModel) {

			//For DOM -> model validation
			ngModel.$parsers.unshift(function (value) {
				return validate(value);
			});

			//For model -> DOM validation
			ngModel.$formatters.unshift(function (value) {
				return validate(value);
			});

			function validate(value) {
				if (typeof value === "undefined") value = "";
				var dobFromDate = Date.parse($scope.dobFromDate);
				var dobToDate = Date.parse($scope.dobToDate);
				var dateToTest = Date.parse(value);
				var valid = true;
				if (dateToTest < dobFromDate || dateToTest > dobToDate) {
					valid = false;
				}
				ngModel.$setValidity('wizValDob', valid);
				return value;
			}
		}
	};
});