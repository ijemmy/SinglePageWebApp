module.exports = function (grunt) {
    'use strict';

    grunt.loadNpmTasks('grunt-jslint'); // load the task

    grunt.initConfig({
        jslint: { // configure the task
            // lint your project's server code
            //server: {
            //    src: [ // some example files
            //        'server/lib/*.js',
            //        'server/routes/*.js',
            //        'server/*.js',
            //        'server/test/*.js'
            //    ],
            //    exclude: [
            //        'server/config.js'
            //    ],
            //    directives: { // example directives
            //        node: true,
            //        todo: true
            //    },
            //    options: {
            //        edition: 'latest', // specify an edition of jslint or use 'dir/mycustom-jslint.js' for own path
            //        junit: 'out/server-junit.xml', // write the output to a JUnit XML
            //        log: 'out/server-lint.log',
            //        jslintXml: 'out/server-jslint.xml',
            //        errorsOnly: true, // only display errors
            //        failOnError: false, // defaults to true
            //        checkstyle: 'out/server-checkstyle.xml' // write a checkstyle-XML
            //    }
            //},
            // lint your project's client code
            client: {
                src: [
                    'js/**/*.js'
                ],
                directives: {
                    browser: true,
                    continue: true,
                    devel: true,
                    indent: 2,
                    maxerr: 50,
                    newcap: true,
                    nomen : true,
                    plusplus: true,
                    regexp : true,
                    sloppy: true,
                    vars: false,
                    white: true,
                    predef: [
                        'jQuery'
                    ]
                },
                options: {
                    junit: 'out/client-junit.xml'
                }
            }
        }
    });

    grunt.registerTask('default', 'jslint');
};