'use strict';
module.exports = function (grunt) {
    grunt.util._.mixin({
        read: function (src) {
            grunt.file.read(require('path').join('src/content', src));
        }
    });

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            my_target: {
                files: {
                    'dist/svg-fallback.min.js': [
                        'src/modernizr.svg.js',
                        'src/jquery.svg-fallback.js',
                        'src/svg-fallback.js'
                    ]
                }
            }
        },
        clean: {
            example: ['www']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.registerTask('default', [
        'uglify'
    ]);
};