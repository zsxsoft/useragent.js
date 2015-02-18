'use strict';

module.exports = function(grunt) {
	var packageJson = grunt.file.readJSON('package.json');
	var encode = grunt.option('encode') || 'utf8';
	var language = grunt.option('language') || 'node';
	var doNotCompile = grunt.option("without-compile") || false;
	language = language.toLowerCase();

	grunt.initConfig({
		pkg: packageJson,
		copy: {
			base: {
				files: [{
					src: ['lib/*.js', 'index.js'],
					dest: 'dist/tmp/'
				}]
			}, 
			asp: {
				expand: true, 
				src: "dist/*.js",
				dest: "dist/", 
				options: {
					process: function (content, srcpath) {
						console.log(srcpath);
						return '<script language="javascript" runat="server">\n' + content + '\n</script>';
					}
				},
				rename: function (dest, src) {
					return src.replace(/\.js$/, '.asp');
				}
			}
		},
		concat: {
			/*options: {
				separator: ";"
			},*/
			dist: {
				src: ['dist/tmp/lib/*.js', 'dist/tmp/index.js'],
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
		replace: {
			asp: {
				src: ['dist/tmp/lib/*.js', 'dist/tmp/index.js'],
				overwrite: true,
				replacements: [{
					from: '(function(root) {',
					to: 'with (this) { (function() {'
				}, {
					from: /root\.(.+)=(.+)/,
					to: '$1=$2'
				}, {
					from: /\}\)\(this\);$/,
					to: "})(); }"
				}, {
					from: '["\']use strict["\']',
					to: ""
				}]
			},
			aspOutput: {
				replacements: [{

				}]
			}
		},
		clean: {
			build: {
				src: [
					"dist/tmp/",
				]
			}
		},
		transcoding: {
			options: {
				charset: encode
			},
			src: ['dist/*.js']
		},
		jshint: {
			options: {
				"-W084": true,  // if (rep = ret.ua.match())
				'-W085': true   // ASP uses with for global
			},
			before: ['dist/tmp/*'],
			concat: ['dist/useragent.js'],
		}, 
		nodeunit: {
			all: ["test/test.js"]
		}

	});


	grunt.loadNpmTasks('grunt-text-replace');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-closurecompiler');
	grunt.loadNpmTasks('grunt-transcoding');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-nodeunit');


	grunt.registerTask('default', 'useragent.js', function() {
		var tasks = ["nodeunit", "copy:base"];
		if (language === "asp" || language === "wscript") tasks.push('replace:asp');
		tasks.push("jshint:before", "concat", "jshint:concat");
		if (!doNotCompile) {
			tasks.push('closurecompiler');
		}

		tasks.push("transcoding");
		if (language === "asp") {
			tasks.push("copy:asp");
		}
		tasks.push("clean");

		grunt.task.run(tasks);

	});


};