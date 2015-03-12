module.exports = function(grunt) {



  require('load-grunt-tasks')(grunt);



  grunt.initConfig({



    less: {
      style: {
        files: {
          'css/style.css': ['less/style.less']
        }
      }
    },



    autoprefixer: {
      options: {
        browsers: ['last 2 versions']
      },
      style: {
        src: 'css/style.css'
      }
    },




    watch: {
      style: {
        files: ['less/**/*.less'],
        tasks: ['style'],
        options: {
          spawn: false,
          livereload: true
        },
      },
      html: {
        files: ['*.html'],
        options: {
          spawn: false,
          livereload: true
        },
      },
    }

  });



  grunt.registerTask('default', [
    'less',
    'autoprefixer',
    'watch'
  ]);



  grunt.registerTask('style', [
    'less',
    'autoprefixer',
  ]);

};