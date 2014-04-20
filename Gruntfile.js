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
		 * Copy files into website
		 */
		copy: {
			main: {
				files: [
					{
						expand: true,
						src: ['wizValidation/wizValidation*.js'],
						dest: 'demo/app/libs/',
						filter: 'isFile'
					}
				]
			}
		},
		/*
		 * Watch for changes. If any concatinate and minify
		 */
		watch: {
			dev: {
				options: {
					livereload: true
				},
				files: ['demo/index.html', '<%= concat.js.src %>'],
				tasks: ['build']
			}
		},
		/*
		 * Start a new server
		 */
		connect: {
			options: {
				hostname: 'localhost',
				port: 9001
			},
			test: {

			},
			open: {
				options: {
					open: true,
					livereload: true
				}
			}
		},
		/*
		 * Start a new Selenium Web Driver instance
		 */
		protractor_webdriver: {
			options: {},
			start: {}
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
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-protractor-webdriver');
	grunt.loadNpmTasks('grunt-protractor-runner');

	grunt.registerTask('build', 'Build site', ['concat', 'uglify', 'copy']);
	grunt.registerTask('test', 'Local testing', ['build', 'connect:test', 'protractor_webdriver', 'protractor:local']);
	grunt.registerTask('travis', 'Start site and run tests on SauceLabs', ['connect:test', 'protractor:saucelabs']);
	grunt.registerTask('default', 'Build and run site', ['build', 'connect:open', 'watch']);
};