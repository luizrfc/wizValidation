module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		/*
		 * Concatinate the JavaScript files into one
		 */
		concat: {
			js: {
				src: ['../src/*.mod.js',
							'../src/**/*.mod.js',
							'../src/**/*.svc.js',
							'../src/**/*.dir.js'],
				dest: '../wizValidation.js'
			}
		},
		/*
		 * Minify the concatinated files
		 */
		uglify: {
			js: {
				files: {
					'../wizValidation.min.js': ['<%= concat.js.dest %>']
				}
			}
		},
		/*
		 * Watch for changes. If any concatinate and minify
		 */
		watch: {
			files: ['<%= concat.js.src %>'],
			tasks: ['concat', 'uglify']
		}
	});
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default', ['concat', 'uglify']);
};