// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td><td> Playcount: <%= numPlays %></td><td class = "dequeue"> dequeue </td><td class = "upvote"> upvote </td><td class = "downvote"> downvote </td>'),

  events: {
    'click .dequeue': function() {
      this.model.dequeue();
    },
    'click .upvote': function() {
      this.model.upvote();
    },
    'click .downvote': function() {
      this.model.downvote();
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }
});
