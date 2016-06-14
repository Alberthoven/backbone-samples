var notifier = {name: "Notifier"},
    listener = {name: "Listener"};

_.extend(notifier, Backbone.Events);
_.extend(listener, Backbone.Events);

listener.logEvent = function() {
    console.info('Event received within this context name:', this.name);
}

listener.listenTo(notifier, 'one_event', listener.logEvent());
notifier.trigger('one_event');
listener.stopListening('one_event');

notifier.trigger();