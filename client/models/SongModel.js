// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({
  defaults: {
    numPlays: 0,
    url: ''
  },
  play: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  },
  stop: function(){
    this.trigger('stop', this);
  },

  enqueue: function(){
    this.trigger('enqueue', this);
  },

  dequeue: function(){
    this.trigger('dequeue', this);

  },

  ended: function(){
    this.addPlayCount();
    this.trigger('ended', this);
  },

  addPlayCount: function() {
    this.set('numPlays', this.get('numPlays') + 1);
  },

  upvote: function(){
    this.trigger('upvote', this);
  },

  downvote: function(){
    this.trigger('downvote', this);
  }

});
