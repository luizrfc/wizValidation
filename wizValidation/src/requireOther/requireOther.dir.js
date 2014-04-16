angular.module('wiz.validation.requireOther')

	.directive('wizValRequireOther', function () {
		return {
			restrict: 'A',
			require: 'ngModel',
			scope: { elementsToCheck: '=wizValRequireOther' },
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
					var valid = true;
					if (typeof scope.elementsToCheck !== "undefined") {
						for (var i = scope.elementsToCheck.length - 1; i >= 0; i--) {
							if (!scope.elementsToCheck[i].$valid || value == "") {
								valid = false;
								break;
							}
						}
					}
					ngModel.$setValidity('wizValRequireOther', valid);
					return value;
				}
			}
		};
	});