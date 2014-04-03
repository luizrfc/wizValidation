angular.module('wiz.validation.atLeastOne')

.directive('wizValAtLeastOne', ['wizAtLeastOneSvc', function (wizAtLeastOneSvc) {
	return {
		restrict: 'A',
		require: 'ngModel',
		link: function (scope, elem, attr, ngModel) {

			//For DOM -> model validation
			ngModel.$parsers.unshift(function (value) {
				wizAtLeastOneSvc.addValue({
					name: elem[0].name,
					value: value
				});
				return value;
			});

			//For model -> DOM validation
			ngModel.$formatters.unshift(function (value) {
				wizAtLeastOneSvc.addValue({
					name: elem[0].name,
					value: value
				});
				return value;
			});
			
			function validate() {
				debugger;
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