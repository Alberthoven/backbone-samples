var o = {};
_.extend(o, Backbone.Events);

var event1 = 'firstEvent';
var event1Handler = function (message) {
    alert(event1 + message);
};

o.on(event1, event1Handler)
o.trigger(event1, ' evento 1 [1]');
o.off(event1)
o.trigger(event1, ' evento 1 [2]');

var event2 = 'secondEvent';
var event2Handler = function (message) {
    alert(event2 + message);
};
o.once(event2, event2Handler)
o.trigger(event2, ' evento 2 [1]');
o.trigger(event2, ' evento 2 [2]');