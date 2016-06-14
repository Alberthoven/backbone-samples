// Creamos una coleccion y una vista sobre la misma
var collection = new ConsultantCollection(),
    view = new ConsultantsView({collection: collection});

// La incluimos en el DOM
document.body.appendChild(view.el);

function describeCollection(col) {
    for (var i = 0; i < col.length; i++) {
        var elem = col.at(i);
        console.info(elem.attributes.name, 'cid:', elem.cid, 'id:', elem.id);
    }
}
collection.create({name: "Juan", surname: "Perez", age: 21});
describeCollection(collection);
collection.create({name: "Pepito", surname: "Ruiz", age: 22});
describeCollection(collection);
collection.create({name: "Pepito2", surname: "Perez2", age: 22});
describeCollection(collection);

/*
collection.add({name: "Juan", surname: "Perez", age: 21});
collection.add({name: "Pepito", surname: "Ruiz", age: 22});
collection.add({name: "Pepito2", surname: "Perez2", age: 22});
*/

//collection.save();

//debugger;
//collection.at(0).destroy();