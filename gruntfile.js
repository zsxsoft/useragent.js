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
                src: ['lib/*.js', 'index.js'],
                dest: 'dist/tmp/',
                expand: true
            },
            asp: {
                expand: true,
                src: "dist/*.js",
                dest: "dist/",
                options: {
                    process: function(content, srcpath) {
                        return '<script language="javascript" runat="server">\n' + content + '\n</script>';
                    }
                },
                rename: function(dest, src) {
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
        uglify: {
            dist: {
                options: {
                    banner: '/*!\n * ' + packageJson.name + '\n * version: ' + packageJson.version + '\n * build: <%= new Date() %>\n * author: zsx<zsx@zsxsoft.com> \n*/',
                    unsafe: true,
                    pure_getters: true,
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
                    from: /root\.(.+)=(.+)/g,
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
            },
            uglify: {
                src: ['dist/useragent.min.js'],
                overwrite: true,
                replacements: [{
                    from: /(\.)image|image(:)|(["'])image(["'])/g,
                    to: "$1$3zz$2$4"
                }, {
                    from: "callback",
                    to: "yy"
                }, {
                    from: /(\.)version|version(:)|(["'])version(["'])/g,
                    to: "$1$3xx$2$4"
                }, {
                    from: /(\.)title|title(:)|(["'])title(["'])/g,
                    to: "$1$3ww$2$4"
                }, {
                    from: /(\.)full|full(:)|(["'])full(["'])/g,
                    to: "$1$3vv$2$4"
                }, {
                    from: /(\.)upper|upper(:)|(["'])upper(["'])/g,
                    to: "$1$3uu$2$4"
                }, {
                    from: /(\.)name|name(:)|(["'])name(["'])/g,
                    to: "$1$3tt$2$4"
                }, {
                    from: /(\.)brand|brand(:)|(["'])brand(["'])/g,
                    to: "$1$3ss$2$4"
                }, {
                    from: /(\.)model|model(:)|(["'])model(["'])/g,
                    to: "$1$3rr$2$4"
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
        eslint: {
            before: {
                options: {
                    configFile: './.eslintrc', 
                    ignore: false, 
                },
                src: ['dist/tmp/*.js']
            },

            concat: {
                options: {
                    configFile: './.eslintrc', 
                    ignore: false, 
                },
                src: ['dist/useragent.js']
            }
        },
        nodeunit: {
            all: ["test/test.js"]
        }

    });


    grunt.loadNpmTasks('grunt-text-replace');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-transcoding');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-eslint');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');


    grunt.registerTask('default', 'useragent.js', function() {
        var tasks = ["nodeunit", "copy:base"];
        if (language === "asp" || language === "wscript") tasks.push('replace:asp');
        tasks.push("eslint:before", "concat", "eslint:concat");
        if (!doNotCompile) {
            tasks.push('uglify');
        }

        tasks.push("transcoding");
        if (language === "asp") {
            tasks.push("copy:asp");
        }
        //tasks.push("replace:uglify");
        tasks.push("clean");

        grunt.task.run(tasks);

    });


};
