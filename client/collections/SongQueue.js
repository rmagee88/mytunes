// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on("add", this.onAdd);
    this.on("ended", this.onEnd);
    this.on("dequeue", this.onDequeue);
    this.on("upvote", this.upvote);
    this.on("downvote", this.downvote);


  },

  playFirst: function(){
      this.models[0].play();
  },

  onAdd: function() {
    if (this.models.length === 1) this.playFirst();
  },

  onEnd: function(){
    var endedSong = this.shift();
    if(this.models.length){
      this.playFirst();
    } else {
      endedSong.stop();
    }
  },

  onDequeue: function(song){
    var index = this.indexOf(song);
    if(index === 0){
      this.onEnd();
    } else {
      this.remove(song);
    }


  },

  upvote: function(song){
    if(this.models.length < 2){
      return;
    }
    var index = this.indexOf(song);

    if(index === 0) {
      return;
    } else if(index === 1){
      song.play();
    }

    var removedSong = this.remove(song);
    this.add(song, {at: index-1});

  },

  downvote: function(song){
    if(this.models.length === 1){
      return;
    }

    var index = this.indexOf(song);
    if(index === 0) {
      var removedSong = this.remove(song);
      this.add(song, {at: index+1});
      this.playFirst();
    } else if (index === this.models.length-1){
      return;
    } else {
      var removedSong = this.remove(song);
      this.add(song, {at: index+1});
    }

  }

});
