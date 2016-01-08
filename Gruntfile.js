/*
 * schepp-grunt-angular-template-inline-js
 * https://github.com/Schepp/grunt-angular-template-inline-js
 *
 * Copyright (c) 2014 Schepp
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp']
    },

    // Configuration to be run (and then tested).
    schepp_angular_template_inline_js: {
      simple: {
        src: 'test/fixtures/simple.js',
        dest: 'tmp/fixtures/simple.js'
      },
      multi_file: {
        files: [{
          cwd: 'test',
          expand: true,
          src: [ 'fixtures/**/*.js' ],
          dest: 'tmp'
        }]
      },
      key: {
        options: {
          key: 'inlineTemplate'
        },
        src: 'test/fixtures/key.js',
        dest: 'tmp/fixtures/key.js'
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-release');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'schepp_angular_template_inline_js', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
