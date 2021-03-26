'use strict';

module.exports = function (grunt) {

  grunt.config.set('src', '');
  grunt.config.set('dist', '');
  grunt.config.set('useRootPath', false);

  grunt.initConfig({

    conf: {
      src: grunt.config.get('src'),
      dist: grunt.config.get('dist')
    },


    compass: {
      sass: {
        options: {
          spawn: false,
          sourcemap: true,
          noLineComments: true,
          outputStyle: 'expanded',
          sassDir: '<%= conf.src %>scss',
          cssDir: '<%= conf.dist %>css'
        }
      }
    },

    browserSync: {
      dev: {
        options: {
          watchTask: true,
          server: './',
          // startPath: grunt.config.get('useRootPath') ? '<%= conf.dist %>' : process.cwd().replace(/\\/g, '/').split('/').reverse()[1],
          // files: ['<%= conf.dist %>**/*.{html,css,js}', '!<%= conf.src %>'],
        }
      }
    },

    watch: {
      sass: {
        files: ['<%= conf.src %>scss/**/*.scss'],
        tasks: ['compass']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');

  grunt.registerTask('default', [
    'compass',
    'browserSync',
    'watch'
  ]);

};
