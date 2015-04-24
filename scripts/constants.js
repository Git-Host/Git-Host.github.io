/*global define*/
define(['underscore'], function (_) {
    'use strict';

    var constants = {};

    constants.VERSION = '0.6.2';
    constants.URL = location.origin + location.pathname.replace('index.html', '');

    // List of hosts and urls where default dropbox API will work
    constants.DEFAULTHOSTS = ['wwwwww.cf', 'git-host.github.io', 'localhost'];

    constants.DROPBOX_KEY = 'cbxjoy3zjx9nose';
    constants.DROPBOX_SECRET = null;

    // Default Dropbox API key will not work
    if ( !_.contains(constants.DEFAULTHOSTS, location.host) ) {
        constants.DROPBOXKEYNEED = true;
    }

    return constants;
});
