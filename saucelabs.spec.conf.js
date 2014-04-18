exports.config = {
	sauceUser: process.env.SAUCE_USERNAME,
	sauceKey: process.env.SAUCE_ACCESS_KEY,

	// Capabilities to be passed to the web-driver instance.
	capabilities: {
		'browserName': 'chrome',
		'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
		'build': process.env.TRAVIS_BUILD_NUMBER,
		'name': 'ngValidation Protractor Tests'
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