angular.module('wiz.validation', [
	'wiz.validation.integer'
]);
angular.module('wiz.validation.integer', []);
angular.module('wiz.validation.integer')

.directive('wizValidInteger', ['$http', function ($http) {
	return {
		restrict: 'A',
		require: 'ngModel',
		link: function (scope, elem, attr, ngModel) {			

			//For DOM -> model validation
			ngModel.$parsers.unshift(function (value) {
				return validate(value);
			});

			//For model -> DOM validation
			ngModel.$formatters.unshift(function (value) {
				return validate(value);
			});

			function validate(value) {
				console.log(value);
				// Check if value is whole number: http://stackoverflow.com/questions/3885817/how-to-check-if-a-number-is-float-or-integer
				var valid = /^\+?(0|[1-9]\d*)$/.test(value);
				ngModel.$setValidity('wizInteger', valid);
				return value;
			}
		}
	};
});
