var cr = new ConsultantRouter();

// Iniciamos el sistema de enrutado
Backbone.history.start();

// Redirigimos a algunas rutas con trigger
Backbone.history.navigate('consultant/1234', {trigger: true});
Backbone.history.navigate('consultant/add', {trigger: true});

// Redirigimos a algunas rutas sin trigger
Backbone.history.navigate('consultant/12', {trigger: false});
Backbone.history.navigate('consultant/15', {trigger: false});
Backbone.history.navigate('consultant/add', {trigger: false});

// O bien
Backbone.history.navigate('consultant/12');
Backbone.history.navigate('consultant/15');
Backbone.history.navigate('consultant/add');

// Equivalente a
document.location.href = "#consultant/12";
document.location.href = "#consultant/15";
document.location.href = "#consultant/add";

//Backbone.history.navigate('noexiste', {trigger: true});

// {replace: true} => reemplaza la URL del back (en vez de apilar, reemplaza la cima de la pila)