// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  tagName: 'tr',

  template: _.template('<td class="artist">(<%= artist %>)</td> \
                      <td class="title"><%= title %></td> \
                      <td class="playcount"> Playcount: <%= numPlays %></td> \
                      <td class = "dequeue btn"> dequeue </td> \
                      <td class = "upvote btn"> upvote </td> \
                      <td class = "downvote btn"> downvote </td>'),

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
