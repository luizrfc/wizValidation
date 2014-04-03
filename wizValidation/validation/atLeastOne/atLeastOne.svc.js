angular.module('wiz.validation.atLeastOne')

.service('wizAtLeastOneSvc', ['$filter', function ($filter) {
	this.values = [];

	this.cleanup = function () {
		this.values = [];
	};

	this.addValue = function (value) {
		var existingValue = false;
		for (var i = 0; i < this.values.length; i++) {
			if (this.values[i].name === value.name) {
				this.values[i] = value;
				existingValue = true;
				break;
			}
		}
		if (!existingValue) this.values.push(value);
	};

	this.isEmpty = function () {
		var isEmpty = true;
		for (var i = 0; i < this.values.length; i++) {
			if (this.values[i].value && this.values[i].value.length > 0) {
				isEmpty = false;
				break;
			}
		}
		return isEmpty;
	};
}]);