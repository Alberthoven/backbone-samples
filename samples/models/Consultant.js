var Consultant = Backbone.Model.extend({
    /* Atributos de instancia */
    // Metodo que se ejecuta al instanciar el modelo
    initialize: function(){
        console.log('Inicializamos el modelo con los atributos', this.attributes);
    },
    // Constantes de instancia
    MIN_AGE2: 16,
    // Atributos por defecto: se define el valor de los atributos si no se le pasan en el constructor
    defaults: {
        project: 'No project'
    }
}, {
    // Atributos estaticos
    MIN_AGE: 18
});
