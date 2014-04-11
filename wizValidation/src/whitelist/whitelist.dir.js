angular.module('wiz.validation.whitelist')

.directive('wizValWhitelist', function () {
	return {
		restrict: 'A',
		require: 'ngModel',
		scope: { whitelist: '=wizValWhitelist' },
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
				var testArray = $scope.whitelist;
				var valid = false;
				for (var a = 0; a < testArray.length; a++) {
					if (testArray[a].match(value)){
						valid = true;
						break;
					}
				}
				ngModel.$setValidity('wizValWhitelist', valid);
				return value;
			}
		}
	};
});
