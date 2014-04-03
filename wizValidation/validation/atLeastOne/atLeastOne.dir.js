angular.module('wiz.validation.atLeastOne')

.directive('wizValAtLeastOne', ['wizAtLeastOneSvc', function (wizAtLeastOneSvc) {
	return {
		restrict: 'A',
		require: 'ngModel',
		link: function (scope, elem, attr, ngModel) {

			//For DOM -> model validation
			ngModel.$parsers.unshift(function (value) {
				addValue(value);
				return value;
			});

			//For model -> DOM validation
			ngModel.$formatters.unshift(function (value) {
				addValue(value);
				return value;
			});
			
			function addValue(value) {
				wizAtLeastOneSvc.addValue({
					name: elem[0].name,
					value: value
				});
			}

			function validate() {
				valid = false;
				if (!wizAtLeastOneSvc.isEmpty()) valid = true;
				ngModel.$setValidity('wizValAtLeastOne', valid);
			}

			scope.$watch(function () { return wizAtLeastOneSvc.values; }, function () {
				validate();
			}, true);

			scope.$on('$destroy', function () {
				wizAtLeastOneSvc.cleanup();
			});
		}
	};
}]);