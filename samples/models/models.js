// import Consultant.js

var c1 = new Consultant({name: 'Lemmy', surname: 'Kilmister'});
var c2 = new Consultant({name: 'Lemmy', surname: 'Kilmister', project: 'Proyecto Nemesis'});

console.log('Acceso estatico:', Consultant.MIN_AGE);
console.log('Acceso estatico undefined:', Consultant.MIN_AGE2);
console.log('Acceso por instancia:', c1.MIN_AGE2);
console.log('Acceso estatico por constructor:', c1.constructor.MIN_AGE);
console.log('Acceso por instancia undefined:', c1.MIN_AGE);

console.log('Project c1 (attributes):', c1.attributes.project);
console.log('Project c1 (get):', c1.get('project'));
console.log('Project c2 (attributes):', c2.attributes.project);
console.log('Project c2 (get):', c2.get('project'));

// get, set, unset, has
c1.set('new-attr', 'val-c1');
c1.set({'x1': 'val-x1', 'x2': 'val-x2'});
console.log('new-attr c1:', c1.get('new-attr'));
console.log('x1 c1:', c1.get('x1'));
console.log('x2 c1:', c1.get('x2'));

// clear, attributes, changed

// toJSON

// keys, values
console.log(c1.keys()); // ["name", "surname", "project", "new-attr", "x1", "x2"]
console.log(c1.values()); // ["Lemmy", "Kilmister", "No project", "val-c1", "val-x1", "val-x2"]

// pairs, invert
console.log(c1.pairs());
console.log(c1.invert()); // Object {Lemmy: "name", Kilmister: "surname", No project: "project", val-c1: "new-attr", val-x1: "x1", val-x2, "x2"}

// pick (lista blanca), omit (lista negra)
console.log(c1.pick('name', 'project')); // Object {name: "Lemmy", project: "No project"}
/*
const pickFunction = function(value, key, object) {
    return _.isNumeric(value);
};
console.log(c1.pick({name : 'Lemmy', project: 'Nemesis'}, pickFunction));
*/
console.log(c1.omit('new-attr')); // Object {name: "Lemmy", surname: "Kilmister", project: "No project", x1: "val-x1", x2: "val-x2"}
