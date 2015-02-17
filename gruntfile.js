'use strict';

module.exports = function(grunt) {
	var packageJson = grunt.file.readJSON('package.json');

	grunt.initConfig({
		pkg: packageJson,
		concat: {
			options: {
				separator: ";"
			},
			dist: {
				src: ['lib/*.js', 'index.js'],
				dest: 'dist/useragent.js'
			}
		},
		closurecompiler: {
			dist: {
				options: {
					banner: '/*!\n * ' + packageJson.name + '\n * version: ' + packageJson.version + '\n * build: <%= new Date() %>\n * author: zsx<zsx@zsxsoft.com> \n*/',
				},
				src: 'dist/useragent.js',
				dest: 'dist/useragent.min.js',

			}
		},

	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-closurecompiler');

	grunt.registerTask('default', 'useragent.js', function() {
		var tasks = ['concat', 'closurecompiler'];
		grunt.task.run(tasks);

	});


};