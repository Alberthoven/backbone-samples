var ConsultantView = Backbone.View.extend({
    // Indicamos el elemento HTML que usara nuestra vista
    tagName: 'li',

    // Definimos la plantilla
    //template: _.template('<%- surname -%>, <%- name -%>'),
    template: _.template($('#consultant-template').html()),

    // Al hacer doble click sobre un li, se elimina el elemento
    events: {
        'dblclick': 'remove'
    },

    initialize: function () {
        this.listenTo(this.model, 'change', this.render);
        this.render();
    },

    render: function () {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }
});