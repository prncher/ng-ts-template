module.exports = function (grunt) {

    grunt.registerMultiTask('cleanjs', 'Log stuff.', function () {
        grunt.file.recurse(this.data, function (abspath, rootdir, subdir, filename) {
            if (filename) {
                var ext = filename.split('.')[1];
                if (ext == 'js') {
                    var message = 'Deleting ' + filename;
                    grunt.log.writeln(message);
                    grunt.file.delete(abspath);
                }
            }
        });
    });

    grunt.initConfig({
        cleanjs: {
            folder: "Scripts"
        },
        typescript: {
            base: {
                src: ['Scripts/**/*.ts', "!typings/**/*.ts", "!node_modules/**/*.ts"],
                options: {
                    module: 'amd',
                    target: 'es5',
                    removeComments: true,
                    references: ["typings/main.d.ts"]
                }
            }
        }
    });

    grunt.loadNpmTasks("grunt-typescript");

    grunt.registerTask('default', ['typescript']);
}