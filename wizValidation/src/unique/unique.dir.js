angular.module('wiz.validation.unique')

.directive('wizValUnique', ['wizUniqueSvc', function (wizUniqueSvc) {
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
				wizUniqueSvc.addValue({
					name: attr.ngModel,
					group: attr.wizValUnique,
					value: value
				});
			}

			function validate() {
				var valid = wizUniqueSvc.isUnique(attr.wizValUnique);
				ngModel.$setValidity('wizValUnique', valid);
			}

			scope.$watch(function () { return wizUniqueSvc.values; }, function () {
				validate();
			}, true);

			scope.$on('$destroy', function () {
				wizUniqueSvc.cleanup();
			});
		}
	};
}]);