var ConsultantRouter = Backbone.Router.extend({
    routes: {
        // Ruta por defecto
        '': 'index',
        'list': 'list',
        'consultant/add': 'add', // #consultant/add
        'consultant/:id': 'view' // #consultant/15
    },

    index: function () {
        console.info('Index');
        Backbone.history.navigate('list', {trigger: true});
    },
    list: function () {
        console.info('Now it should to show a list page');
    },
    add: function () {
        console.info('Now it should to show an add new consultant view');
    },
    view: function (id) {
        console.info('Now it should to show a consultant data with id', id);
    }
});