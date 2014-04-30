exports.config = {

	seleniumAddress: 'http://localhost:4444/wd/hub',

	multiCapabilities: [{
		'browserName': 'chrome'
	},
	{
		'browserName': 'firefox'
	}],

	specs: ['demo/app/features/home/specs/*.spec.js'],

	jasmineNodeOpts: {
		showColors: true,
		defaultTimeoutInterval: 60000
	},

	baseUrl: 'http://localhost:9001/'
};
