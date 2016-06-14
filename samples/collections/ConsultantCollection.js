var ConsultantCollection = Backbone.Collection.extend({
    model: Consultant,
    localStorage: new Backbone.LocalStorage('consultant')
});