module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			build: {
				src: 'src/*.js',
				dest: 'build/*.min.js'
			}
		}
	});

	// Load the plugin that provides the "uglify" task.
	grunt.loadNpmTasks('grunt-contrib-uglify');

	function start_task() {

		// Force task into async mode and grab a handle to the "done" function.
		var done = this.async();
		// Run some sync stuff.
		grunt.log.writeln('Processing task...');

		try {

			require('./src/server.js')();

		} catch (e) {
			console.error(e);

		} finally {
			// done();
		}
	}

	grunt.registerTask('start', start_task);

	// Default task(s).
	grunt.registerTask('default', ['uglify', 'start']);
};