// import ConsultantModel.js

var Consultants = Backbone.Collection.extend({
    model: ConsultantModel
});

var col = new Consultants([
    {name: 'Lemmy', surname: 'Kilmister', age: 77},
    {name: 'Ronnie James', surname: 'Dio', age: 68},
    {name: 'Steve', surname: 'Harris', age: 63}
]);
/*
console.log(collection.at(0).isValid());
console.log(collection.at(1).isValid());
console.log(collection.at(2).isValid());
console.log(collection.at(2).validationError);
console.log(collection.at(2).get('age'));
*/

// models, toJSON, add, remove
/*
console.log(collection.models);
console.log(collection.toJSON());
var added = new ConsultantModel({name: 'Rob', surname: 'Halford', age: 70});
console.log(collection.length);
collection.add(added)
console.log(collection.length);
collection.remove(added);
console.log(collection.length);
*/

// reset, set, get, at
/*
console.log(collection.toJSON());
var models = [collection.at(0), collection.at(1)];
//collection.reset();
collection.set(models);
console.log(collection.toJSON());
//collection.set();
console.log(collection.get(collection.at(0).cid));
*/

// push, pop, unshift, shift, slice

// pluck, where
console.log(col.pluck('name')); // ["Lemmy", "Ronnie James", "Steve"]
console.log(col.where('age' > 50));

// findWhere, length
console.log(col.findWhere('age' > 50)); // ¿?
console.log(col.length); // 3