var app = require('ampersand-app');
var Router = require('ampersand-router');
var HomePage = require('./pages/home');
var CollectionDemo = require('./pages/collection-demo');
var InfoPage = require('./pages/info');
var EmojiPage = require('./pages/picker');
var PersonAddPage = require('./pages/person-add');
var PersonEditPage = require('./pages/person-edit');
var PersonViewPage = require('./pages/person-view');


module.exports = Router.extend({
    routes: {
        '': 'home',
        'collections': 'collectionDemo',
        'emoji': 'emoji',
        'info': 'info',
        'person/add': 'personAdd',
        'person/:id': 'personView',
        'person/:id/edit': 'personEdit',
        '(*path)': 'catchAll'
    },

    // ------- ROUTE HANDLERS ---------
    home: function () {
        app.trigger('page', new HomePage({
            model: app.me
        }));
    },

    collectionDemo: function () {
        app.trigger('page', new CollectionDemo({
            model: app.me,
            collection: app.people
        }));
    },

    emoji: function () {
        app.trigger('page', new EmojiPage({
            model: app.me,
            collection: app.emoji
        }));
    },

    info: function () {
        app.trigger('page', new InfoPage({
            model: app.me
        }));
    },

    personAdd: function () {
        app.trigger('page', new PersonAddPage());
    },

    personEdit: function (id) {
        app.trigger('page', new PersonEditPage({
            id: id
        }));
    },

    personView: function (id) {
        app.trigger('page', new PersonViewPage({
            id: id
        }));
    },

    catchAll: function () {
        this.redirectTo('');
    }
});
