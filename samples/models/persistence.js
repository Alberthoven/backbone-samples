// fetch, save, destroy

localStorage.clear();

var Consultant = Backbone.Model.extend({
    //url: '/Consultant',
    urlRoot: '/Consultant',
    localStorage: new Backbone.LocalStorage('consultant')
});

var c1 = new Consultant({name: 'Lemmy', surname: 'Kilmister', age: 21});
console.log('c1:', c1.attributes);
c1.save();
console.log('c1:', c1.attributes);
c1.fetch();
console.log('c1:', c1.attributes);
c1.destroy();
console.log(c1.fetch());

/*
 var cn1 = new ConsultantModel({name: 'Pepe', surname: 'Pépez', age: 21});
 cn1.save();
 var id = cn1.get('id');
 var cn2 = new ConsultantModel({id: id});
 cn2.fetch();
*/