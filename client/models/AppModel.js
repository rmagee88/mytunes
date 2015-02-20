// App.js - Defines a backbone model class for the whole app.
var AppModel = Backbone.Model.extend({

  initialize: function(params){
    this.set('currentSong', new SongModel());
    this.set('songQueue', new SongQueue());

    /* Note that 'this' is passed as the third argument. That third argument is
    the context. The 'play' handler wll always be bound to that context we pass in.
    In this example, we're binding it to the App. This is helpful because otherwise
    the 'this' we use that's actually in the funciton (this.set('currentSong', song)) would
    end up refering to the window. That's just what happens with all JS events. The handlers end up
    getting called from the window (unless we override it, as we do here). */
    this.set('library', params.library);
    this.get('library').on('play', function(song){
      this.set('currentSong', song);
    }, this);

    this.get('library').on('stop', function(song){
      this.set('currentSong', new SongModel());
    }, this);

    this.get('library').on('enqueue', function(song){
      this.get('songQueue').add(song);
    }, this);
  },

  loadLocalStorage: function(){
   if(window.localStorage.getItem('songIds')) {
      var songIds = JSON.parse(window.localStorage.getItem('songIds'));
      songIds.forEach(function(songId){
        this.get('songQueue').add(this.get('library').get(songId));
      }, this);
    }
  }

});
