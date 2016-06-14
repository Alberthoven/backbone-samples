var Chapter = Backbone.Model,

    Chapters = Backbone.Collection.extend({
        model: Chapter,
        comparator: 'page'
    }),

    Chapters1 = Backbone.Collection.extend({
        model: Chapter,
        comparator: function (Consultant) {
            return Consultant.get('page');
        }
    }),

    chapters = new Chapters(),
    chapters1 = new Chapters1();

chapters.add(new Chapter({page: 9, title: "The End"}));
chapters.add(new Chapter({page: 5, title: "The Middle"}));
chapters.add(new Chapter({page: 1, title: "The Beginning"}));

console.log(chapters.pluck('title'));
chapters.sort();
console.log(chapters.pluck('title'));

chapters1.add(new Chapter({page: 9, title: "The End"}));
chapters1.add(new Chapter({page: 5, title: "The Middle"}));
chapters1.add(new Chapter({page: 1, title: "The Beginning"}));

chapters1.push(new Chapter({page: 2, title: "The ReBeginning"}));

console.log(chapters1.pluck('title'));
chapters1.sort();
console.log(chapters1.pluck('title'));