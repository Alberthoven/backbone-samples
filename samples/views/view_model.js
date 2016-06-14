// Creamos los modelos
var cn1 = new ConsultantModel({name: 'Lemmy', surname: 'Kilmister'}),
    cn2 = new ConsultantModel({name: 'Rob', surname: 'Halford'});

// Creamos las vistas
var v1 = new ConsultantView({model: cn1}),
    v2 = new ConsultantView({model: cn2});

// y las incluimos en el DOM
document.body.appendChild(v1.el);
document.body.appendChild(v2.el);

//debugger;
cn1.set({name: 'Ian Fraser'});