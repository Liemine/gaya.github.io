module.exports = function(grunt) {
	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		watch: {
			js: {
				files: ['src/**/*.js'],
				tasks: ['concat:js']
			}
		},

		concat: {
			options: {
				separator: '\n\n',
				banner: "/* Grunt is cool! */",
				footer: ""
			},
			js: {
				src: [
					'src/js/**/!(<%= pkg.name %>).js',
					'src/js/**/<%= pkg.name %>.js'
				],
				dest: 'dist/js/<%= pkg.name %>.js'
			}
		},

		uglify: {
			options: {
				banner: "/* <%= pkg.name %> */\n"
			},
			js: {
				src: 'dist/js/<%= pkg.name %>.js',
				dest: 'build/js/<%= pkg.name %>.min.js'
			}
		}
	});

	//load npm tasks
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	//register the task
	grunt.registerTask('build', ['concat:js', 'uglify:js']);
};