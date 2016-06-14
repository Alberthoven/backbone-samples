var Consultants = Backbone.Collection.extend({
    model: Consultant,
    localStorage: new Backbone.LocalStorage('consultant'),
    initialize: function() {
        this.listenTo(this, 'change:age add', this.onChange);
    },
    onChange: function(m, v) {
        console.info('Changing age from', m._previousAttributes.age, 'to', v);
    }
});

var cns = new Consultants();
cns.create({name: 'Pepe', surname: 'Pépez', age: 20});
cns.create({name: 'Paco', surname: 'Páquez', age: 23});
cns.create({name: 'Juan', surname: 'Juánez', age: 17});

console.log(cns.at(2).get('age'));
cns.at(2).set({age: 18});
console.log(cns.at(2).get('age'));