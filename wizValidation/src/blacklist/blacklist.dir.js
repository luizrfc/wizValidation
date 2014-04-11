angular.module('wiz.validation.blacklist')

.directive('wizValBlacklist', function () {
	return {
		restrict: 'A',
		require: 'ngModel',
		scope: { blacklist: '=wizValBlacklist' },
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
				var testArray = scope.blacklist;
				var valid = true;
				for (var a = 0; a < testArray.length; a++) {
					if (testArray[a].match(value)) {
						valid = false;
						break;
					}
				}
				ngModel.$setValidity('wizValBlacklist', valid);
				return value;
			}
		}
	};
});