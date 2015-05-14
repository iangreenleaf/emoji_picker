var View = require('ampersand-view');
var templates = require('../templates');


module.exports = View.extend({
    template: templates.includes.emojon,
    bindings: {
        'model.desc': {
            type: 'text',
            hook: 'desc',
        },
        'model.char': {
            type: 'text',
            hook: 'code',
        },
    },
    events: {
        'click [data-hook~=action-delete]': 'handleRemoveClick'
    },
    handleRemoveClick: function () {
        this.model.destroy();
        return false;
    }
});
