// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  initialize: function(){
    this.model.on("ended", this.render, this);
  },

  tagName: 'tr',

  template: _.template('<td class="artist">(<%= artist %>)</td> \
                      <td class="title"><%= title %></td> \
                      <td class="playcount"> Playcount: <%= numPlays %></td> \
                      <td class="addQueue btn">Add to Queue</td>'),

  events: {
    'click .addQueue': function() {
      this.model.enqueue();
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
