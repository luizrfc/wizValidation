angular.module('wiz.validation.phone')

	.directive('wizValPhone', function () {
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
					var valid = /(^(((\+|00)44)?)([1-9]{1}[0-9]{9})$)|(^[0][0-9]{10}$)/.test(value);
					ngModel.$setValidity('wizValPhone', valid);
					return value;
				}
			}
		};
	});
