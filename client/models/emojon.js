var AmpersandModel = require('ampersand-model');

module.exports = AmpersandModel.extend({
    props: {
        code: 'string',
        desc: 'string',
    },
    session: {
        selected: ['boolean', true, false]
    },
    derived: {
        char: {
            deps: ['code'],
            fn: function () {
              return String.fromCodePoint(parseInt(this.code, 16));
            }
        }
    }
});
