module.exports = function (grunt) {
	grunt.loadNpmTasks('grunt-angular-gettext');

    grunt.initConfig({
	    nggettext_extract: {
		    pot: {
			    files: {
				    'po/template.pot': ['app/*.html', 'app/html/directives/*.html', 'app/html/controllers/*.html']
			    }
		    }
	    },

	    nggettext_compile: {
		    all: {
			    options: {
				    module: 'myApp'
			    },
			    files: {
				    'app/translations.js': ['po/*.po']
			    }
		    }
	    }
    });
    grunt.registerTask('default', []);
    grunt.registerTask('build', ['nggettext_extract','nggettext_compile']);
};
