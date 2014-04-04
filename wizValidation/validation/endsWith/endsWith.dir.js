angular.module('wiz.validation.endsWith')

.directive('wizValEndsWith', function () {
	return {
		restrict: 'A',
		require: 'ngModel',
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
				var valid = value.indexOf(attrs.wizValEndsWith, value.length - attrs.wizValEndsWith.length) !== -1;
				ngModel.$setValidity('wizValEndsWith', valid);
				return value;
			}
		}
	};
});