var Consultant = Backbone.Model.extend({
    //url: '/Consultant',
    //urlRoot: '/Consultant',
    localStorage: new Backbone.LocalStorage('consultant'),

    initialize: function() {
        this.listenTo(this, 'change', this.onChange);
        this.listenTo(this, 'change:name', this.onChangeName);
        this.listenTo(this, 'invalid', this.onInvalid);
        this.listenTo(this, 'destroy', this.onDestroy);
    },
    onChange: function(model) {
        console.info('onChange', model._previousAttributes, '->', model.attributes);
    },
    onChangeName: function(model, v) {
        console.info('onChangeName', model._previousAttributes.name || null, '->', v);
    },
    onInvalid: function(model) {
        //TODO
    },
    onDestroy: function(model) {
        console.info('onDestroy', model._previousAttributes);
    }
});

var c = new Consultant({name: 'Lemmy', surname: 'Kilmister', age: 21});
c.save();
c.set("name", "Ian Fraser");
c.save();
c.destroy();
