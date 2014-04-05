module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
	    concat: {
	    	js : {
	    		src : [ '../wizValidation/src/*.mod.js',
	    		        '../wizValidation/src/**/*.mod.js',
	    		        '../wizValidation/src/**/*.svc.js',
	    		        '../wizValidation/src/**/*.dir.js' ],
	    		dest : '../wizValidation/wizValidation.js'
	        }
	    },
	    uglify: {
	    	js: {
	    		files: {
	    			'../wizValidation/wizValidation.min.js': [ '../wizValidation/wizValidation.js' ]
	    		}
	    	}
	    },
	    watch: {
	    	files: [ '../wizValidation/src/**/*.js' ],
	    	tasks: [ 'uglify' ]
	    }
    });
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', [ 'concat:js', 'uglify:js' ]);
};