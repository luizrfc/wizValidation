exports.config = {
	// The address of a running selenium server.
	seleniumAddress: 'http://localhost:4444/wd/hub',

	// Capabilities to be passed to the web-driver instance.
	capabilities: {
		'browserName': 'chrome'
	},

	// Spec patterns are relative to the current working directly when
	// protractor is called.
	specs: ['specs/*.spec.js'],

	// Options to be passed to Jasmine-node.
	jasmineNodeOpts: {
		showColors: true,
		defaultTimeoutInterval: 30000
	},

	baseUrl: 'http://localhost:63342/' // Change this to whatever server you're running on locally
};