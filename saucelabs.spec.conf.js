exports.config = {

	sauceUser: process.env.SAUCE_USERNAME,
	sauceKey: process.env.SAUCE_ACCESS_KEY,

	multiCapabilities: [{
		'browserName': 'chrome',
		'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER + ': Chrome',
		'build': process.env.TRAVIS_BUILD_NUMBER,
		'name': 'ngValidation Protractor Tests'
	},
	{
		'browserName': 'firefox',
		'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER + ': Firefox',
		'build': process.env.TRAVIS_BUILD_NUMBER,
		'name': 'ngValidation Protractor Tests'
	}],

	specs: ['demo/app/features/home/specs/*.spec.js'],

	jasmineNodeOpts: {
		showColors: true,
		defaultTimeoutInterval: 60000
	},

	baseUrl: 'http://localhost:9001/'
};
