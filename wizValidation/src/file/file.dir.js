angular.module('wiz.validation.file')

	.directive('wizValFile', function () {
		return {
			restrict: 'A',
			require: 'ngModel',
			scope: {
				// array of valid file types e.g ['image/jpeg','image/gif']
				fileType: '=wizValFileTypes'
			},
			link: function (scope, elem, attr, ngModel) {

				elem.bind('change', function () {
					validate(elem[0].files);
				});

				function validate(files) {
					var valid = true;

					// if file type attribute exists check it.
					if (scope.fileType) {
						for (var i = 0; i < files.length; i++) {

							if (scope.fileType.indexOf(files[i].type) === -1) {
								valid = false;
							}
						}
					}
					ngModel.$setValidity('wizValFile', valid);
				}
			}
		};
	});