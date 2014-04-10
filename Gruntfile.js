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
					'wizValidation/wizValidation.min.js': ['<%= concat.js.dest %>']
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
				configFile: "node_modules/protractor/referenceConf.js", // Default config file
				keepAlive: false, // If false, the grunt process stops when the test fails.
				noColor: false, // If true, protractor will not use colors in its output.
				args: {
					// Arguments passed to the command
				}
			},
			home_feature: {
				options: {
					configFile: "demo/app/features/home/home.spec.conf.js", // Target-specific config file
					args: {} // Target-specific arguments
				}
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-protractor-webdriver');
	grunt.loadNpmTasks('grunt-protractor-runner');
	grunt.registerTask('test', ['protractor_webdriver:start', 'protractor']);
	grunt.registerTask('default', ['concat', 'uglify']);
};