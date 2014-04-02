angular.module('wiz.validation.integer')

.directive('wizValidInteger', function () {
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
				var valid = /^-?[0-9]+$/.test(value);
				ngModel.$setValidity('wizInteger', valid);
				return value;
			}
		}
	};
});