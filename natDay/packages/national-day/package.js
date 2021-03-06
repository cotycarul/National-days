Package.describe({
    name: 'national-day',
    version: '0.0.1',
    // Brief, one-line summary of the package.
    summary: '',
    // URL to the Git repository containing the source code for this package.
    git: '',
    // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
    documentation: 'README.md'
});

Package.onUse(function (api) {
    api.versionsFrom('1.3');
    var packages = [
        'meteor-base',
        'mobile-experience',
        'mongo',
        'blaze-html-templates',
        'reactive-var',
        'jquery',
        'tracker',

        'standard-minifier-css',
        'standard-minifier-js',
        'es5-shim',
        'ecmascript',
        'materialize:materialize',
        'momentjs:moment'
    ];
    api.use(packages);
    api.imply(packages);
    //Database
    api.export('NationalDB');
    //server files
    api.addFiles([
        'server/startup.js',
        'server/publications.js',
        'lib/collections.js'
    ], 'server');
    //client files
    api.addFiles([
        'index.html',
        'client/index.js'

    ], 'client');


    //client and server files


});


