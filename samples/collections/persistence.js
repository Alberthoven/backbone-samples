var Consultants = Backbone.Collection.extend({
    model: Consultant,
    localStorage: new Backbone.LocalStorage('consultant')
});

var cns = new Consultants();
cns.create({name: 'Pepe', surname: 'Pépez', age: 20});
cns.create({name: 'Paco', surname: 'Páquez', age: 23});
cns.create({name: 'Juan', surname: 'Juánez', age: 17});

console.log(cns.length);
cns.at(0).destroy();
console.log(cns.length);