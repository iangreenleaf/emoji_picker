var PageView = require('./base');
var EmojonView = require('../views/emojon');
var templates = require('../templates');

module.exports = PageView.extend({
    pageTitle: 'Picker',
    template: templates.pages.picker,
    render: function() {
      this.renderWithTemplate();
      this.renderCollection(this.collection, EmojonView, this.queryByHook("emoji-grid"));
    },
});
