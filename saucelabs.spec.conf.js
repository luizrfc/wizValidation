exports.config = {
	sauceUser: "gregorypratt",
	sauceKey: "d923613e-2797-4046-b0db-efdf3e9a205b",

	// Capabilities to be passed to the web-driver instance.
	capabilities: {
		'browserName': 'chrome'
	},

	// Spec patterns are relative to the current working directly when
	// protractor is called.
	specs: ['demo/app/features/home/specs/*.spec.js'],

	// Options to be passed to Jasmine-node.
	jasmineNodeOpts: {
		showColors: true,
		defaultTimeoutInterval: 30000
	},

	baseUrl: 'http://localhost:' + (process.env.HTTP_PORT || '8000') + '/ngValidation/'
};