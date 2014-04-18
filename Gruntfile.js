module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		/*
		 * Concatinate the JavaScript files into one
		 */
		concat: {
			js: {
				src: ['wizValidation/src/*.mod.js',
							'wizValidation/src/**/*.mod.js',
							'wizValidation/src/**/*.svc.js',
							'wizValidation/src/**/*.dir.js'],
				dest: 'wizValidation/wizValidation.js'
			}
		},
		/*
		 * Minify the concatinated files
		 */
		uglify: {
			js: {
				files: {
					'wizValidation/wizValidation.min.js': ['<%= concat.js.src %>']
				}
			}
		},
		/*
		 * Watch for changes. If any concatinate and minify
		 */
		watch: {
			files: ['<%= concat.js.src %>'],
			tasks: ['concat', 'uglify']
		},
		/*
		 * Start a new server
		 */
		connect: {
			server: {
				options: {
					hostname: 'localhost',
					port: 9001
				}
			}
		},
		/*
		 * Start a new Selenium Web Driver instance
		 */
		protractor_webdriver: {
			options: {
				// Task-specific options go here.
			},
			start: {
				// Target-specific file lists and/or options go here.
			}
		},
		/*
		 * Run the tests
		 */
		protractor: {
			options: {
				keepAlive: false, // If false, the grunt process stops when the test fails.
				noColor: false // If true, protractor will not use colors in its output.
			},
			local: {
				options: {
					configFile: "protractor.spec.conf.js" // Target-specific config file
				}
			},
			saucelabs: {
				options: {
					configFile: "saucelabs.spec.conf.js", // Target-specific config file
					args: {
						sauceUser: process.env.SAUCE_USERNAME,
						sauceKey: process.env.SAUCE_ACCESS_KEY
					}
				}
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-protractor-webdriver');
	grunt.loadNpmTasks('grunt-protractor-runner');

	grunt.registerTask('test:local', ['connect', 'protractor_webdriver:start', 'protractor:local']);
	grunt.registerTask('test:saucelabs', ['connect', 'protractor:saucelabs']);
	grunt.registerTask('default', ['concat', 'uglify']);
};