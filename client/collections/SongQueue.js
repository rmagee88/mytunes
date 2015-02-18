// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    // this.models.on("add", console.log("check"));
    this.on("add", function() { if (this.models.length === 1) this.playFirst();})
    this.on("ended", function(){
      this.shift();
      if(this.models.length){
        this.playFirst();
      }
    });
    this.on("dequeue", function(song){
      this.remove(song);
    });
  },

  playFirst: function(){
      this.models[0].play();
  }

});
