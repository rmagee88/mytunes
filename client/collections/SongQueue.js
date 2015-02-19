// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    // this.models.on("add", console.log("check"));
    this.on("add", this.onAdd);
    this.on("ended", this.onEnd);
    this.on("dequeue", this.onDequeue);
  },

  playFirst: function(){
      this.models[0].play();
  },

  onAdd: function() {
    if (this.models.length === 1) this.playFirst();
  },

  onEnd: function(){
    this.shift();
    if(this.models.length){
      this.playFirst();
    }
  },

  onDequeue: function(song){
    this.remove(song);
  }

});
