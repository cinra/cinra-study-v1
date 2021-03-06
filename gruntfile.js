module.exports = function(grunt){

  // 読み込むモジュールの設定

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-open');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');
  //grunt.loadNpmTasks('grunt-csscomb');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-compress');
  //grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-copy');
  //grunt.loadNpmTasks('grunt-svgmin');
  grunt.loadNpmTasks('grunt-image');

  // 各タスクの設定
  grunt.initConfig({
  
	  	//ディレクトリを変数に格納
        dir: {
            src:'files/development',
            dest:'files/dest'
        },

        // SassとCompassをコンパイルします。
        compass: {
            dist: {
                options: {
                    config: 'config.rb'
                }
            }
        },
        watch: {
    			html: {
    			  files: '<%= dir.src %>/*.html',
    				tasks: ['htmlmin'],
              options: {
                //変更されたらブラウザを更新
                livereload: true,
                nospawn: true
              }
    			},
          sass: {
            files: ['<%= dir.src %>/assets/sass/*.scss'],
            tasks: ['compass', 'cssmin', 'autoprefixer', 'compress'],
            options: {
                //変更されたらブラウザを更新
                livereload: true,
                nospawn: true
            }
          },
          js: {
              files: ['<%= dir.src %>/assets/js/*.js'],
              tasks: ['uglify', 'compress'],
              options: {
                  //変更されたらブラウザを更新
                  livereload: true,
                  nospawn: true
              }
          }/*,
    			image: {
    				cwd : ['<%= dir.src %>/assets/images/'],
            files : '**',
    				tasks : ['image'],
            options: {
                //変更されたらブラウザを更新
                livereload: true,
                nospawn: true
            }
    			},
    			font: {
    				files : ['<%= dir.src %>/assets/fonts/*.otf'],
    				tasks : ['copy:main'],
            options: {
                //変更されたらブラウザを更新
                livereload: true,
                nospawn: true
            }
    			}*/
        },
		htmlmin: {
            all: {
                options: {
                    removeComments: true,
                    removeCommentsFromCDATA: true,
                    removeCDATASectionsFromCDATA: true,
                    collapseWhitespace: true,
                    removeRedundantAttributes: true,
                    removeOptionalTags: true
                },
                expand: true,
                cwd: '<%= dir.src %>',
                src: ['**/*.html'],
                dest: '<%= dir.dest %>'
            }
        },
/*        image: {
          static: {
            files: {
              
            }
          },
          dynamic: {
            expand: true,
            cwd: '<%= dir.src %>/assets/images/',
            src: '**',
            dest: '<%= dir.dest %>/assets/images/'
          }
        },*/
        // cssmin: cssをミニファイ、結合
        cssmin: {
            combine: {
                files: {
                    '<%= dir.dest %>/assets/css/common.min.css': ['<%= dir.src %>/assets/css/base.css','<%= dir.src %>/assets/css/style.css']
                }
            },
			minify: {
				expand: true,
				cwd: '<%= dir.src %>/assets/css/',
				src: ['alt.css'],
				dest: '<%= dir.dest %>/assets/css/',
				ext: '.min.css',
				options:{
					noAdvanced: true,
				}
			}
        },
		// autoprefixer: プレフィックス自動付加
		autoprefixer: {
			/* ---------option List-------------
				iOS >= X
				android >= X.X
				ie X
				last 2 version
				other: 'github.com/ai/autoprefixer#browsers'
			------------------------------------ */
		  options: {
		    browsers: ['last 2 version', 'ie 9', 'iOS >= 7.1', 'Android >= 4.4']
		  },
		  file: {
				expand: true,
				flatten: true,
				cwd: '<%= dir.dest %>/assets/css/',
				src: ['*.css'],
				dest: '<%= dir.dest %>/assets/css/'
		  }
		},
        uglify: {
            top: {
				src: ['<%= dir.src %>/assets/js/script.js'],
				dest: '<%= dir.dest %>/assets/js/script.min.js'
            }
        },
        // Live Reload
        connect: {
            livereload: {
                options: {
                port: 9001
                }
            }
        },
        // gruntコマンド実行時にページをブラウザで開く
        open: {
            server: {
                path: 'http://localhost:<%= connect.livereload.options.port %>/files/dest/'
            }
        },
        //gzip化
/*    copy: {
      main: {
        files: {
          expand : true,
					cwd: '<%= dir.src %>/assets/fonts/',
					src: ['*{.ttf,.otf,.woff}'],
					dest: '<%= dir.dest %>/assets/fonts/',
					ext: '**'
        },
      },
    },*/
		compress: {
			main: {
				options: {
					mode: 'gzip'
				},
				files: [
						{
							expand: true,
							cwd: '<%= dir.dest %>/assets/css/',
							src: ['*.min.css'],
							dest: '<%= dir.dest %>/assets/css/',
							ext: '.min.css.gz'
						},
						{
							expand: true,
							cwd: '<%= dir.dest %>/assets/js/',
							src: ['*.min.js'],
							dest: '<%= dir.dest %>/assets/js/',
							ext: '.min.js.gz'
						}
					]
			}/*main*/
		}/*compress*/


  });/*end*/

  // gruntコマンドで実行するタスクの設定
  grunt.registerTask('default', ['connect', 'open', 'watch']);
  //grunt.registerTask('prod', ['uglify', 'htmlmin']);
};