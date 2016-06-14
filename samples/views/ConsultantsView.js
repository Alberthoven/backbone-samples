var ConsultantsView = Backbone.View.extend({
    initialize: function () {
        this.listenTo(this.collection, "add remove reset", this.render);
        this.render();
    },
    render: function () {
        this.$el.empty();
        this.collection.each(function (model) {
            var v = new ConsultantView({model: model});
            this.el.appendChild(v.el);
        }, this);
        return this;
    }
});