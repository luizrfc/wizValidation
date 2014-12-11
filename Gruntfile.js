module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		/*
		 * Lint files
		 */
        jshint: {
            src: ['wizValidation/src/*.mod.js',
					'wizValidation/src/**/*.mod.js',
					'wizValidation/src/**/*.svc.js',
					'wizValidation/src/**/*.dir.js'],
            gruntfile: [
                'Gruntfile.js'
            ],
            options: {
                curly: true,
                immed: true,
                newcap: true,
                noarg: true,
                sub: true,
                boss: true,
                eqnull: true
            },
            globals: {}
        },
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
	grunt.loadNpmTasks('grunt-contrib-jshint');

	grunt.registerTask('build', 'Build site', ['concat', 'uglify', 'copy']);
	grunt.registerTask('test', 'Local testing', ['build', 'connect:test', 'protractor_webdriver', 'protractor:local']);
	grunt.registerTask('run', 'Build and run site', ['jshint', 'build', 'connect:open', 'watch']);
	grunt.registerTask('default', 'Build and run site', ['run']);
};
