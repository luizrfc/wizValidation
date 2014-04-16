angular.module('wiz.validation.file')

	.directive('wizValFile', function () {
		return {
			restrict: 'A',
			require: 'ngModel',
			scope: {
				// array of valid file types e.g ['image/jpeg','image/gif']
				fileTypes: '=wizValFileTypes'
			},
			link: function (scope, elem, attrs, ngModel) {

				elem.bind('change', function () {
					validate(elem[0].files);
				});

				function validate(files) {
					var valid = true;

					// if file type attribute exists check it.
					if (scope.fileTypes) {
						for (var i = 0; i < files.length; i++) {
							if (scope.fileTypes.indexOf(files[i].type) === -1) {
								valid = false;
							}
						}
					}
					ngModel.$setValidity('wizValFile', valid);
				}
			}
		};
	});