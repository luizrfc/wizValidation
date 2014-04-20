angular.module('wiz.validation.requireOther')

	.directive('wizValRequireOther', function () {
		return {
			restrict: 'A',
			require: 'ngModel',
			scope: {
				elementsToCheck: '=wizValRequireOther'
			},
			link: function (scope, elem, attrs, ngModel) {

				//For DOM -> model validation
				ngModel.$parsers.unshift(function (value) {
					return validate(value);
				});

				//For model -> DOM validation
				ngModel.$formatters.unshift(function (value) {
					return validate(value);
				});

				if (typeof scope.elementsToCheck !== "undefined") {
					scope.$watch('elementsToCheck',
						function () {
							validate(ngModel.$viewValue);
						}, true);
				}

				function validate(value) {
					var valid = true;
					if (typeof value === "undefined") value = "";
					if (typeof scope.elementsToCheck !== "undefined") {
						for (var i = 0; i < scope.elementsToCheck.length; i++) {
							if (scope.elementsToCheck[i] === false || value === "") {
								valid = false;
								break;
							}
						}
					}
					ngModel.$setValidity('wizValRequireOther', valid);
					return value;
				}
			}
		}
	});
