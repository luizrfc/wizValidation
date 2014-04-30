exports.config = {
	// The address of a running selenium server.
	seleniumAddress: 'http://localhost:4444/wd/hub',

	// multiCapabilities to be passed to the web-driver instance.
	multiCapabilities: [
	{
		'browserName': 'chrome'
	},
	{
		'browserName': 'firefox'
	}
	],

	// Spec patterns are relative to the current working directly when
	// protractor is called.
	specs: ['demo/app/features/home/specs/*.spec.js'],

	// Options to be passed to Jasmine-node.
	jasmineNodeOpts: {
		showColors: true,
		defaultTimeoutInterval: 60000
	},

	baseUrl: 'http://localhost:9001/'
};
