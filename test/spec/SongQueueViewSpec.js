describe('SongQueueView', function() {
  var view, fakeSongs, model;

  beforeEach(function() {
    fakeSongs = new SongQueue([
      {
        artist: 'data',
        url: '/test/testsong.mp3',
        title:'test song'
      },
      {
        artist: 'data',
        url: '/test/testsong2.mp3',
        title:'test song 2'
      }
    ]);

    model = fakeSongs.models[0];
  });

  it('creates SongQueueEntryViews for each queued song & renders them', function(){
    sinon.spy(SongQueueEntryView.prototype, 'render');
    view = new SongQueueView({collection: fakeSongs});
    view.render();
    expect(SongQueueEntryView.prototype.render).to.have.been.called;
  });

  it('renders when add or remove event fires from the song queue collection', function(){
    sinon.spy(SongQueueView.prototype, 'render');
    view = new SongQueueView({collection: fakeSongs});
    view.collection.add({
      artist: 'data',
      url: '/test/testsong3.mp3',
      title:'test song 3'
    });
    view.collection.pop();
    expect(view.render).to.have.been.called;
  });

  it('dequeues clicked songs', function(){
    debugger;
     sinon.spy(SongModel.prototype, 'dequeue');
     view = new SongQueueView({collection: fakeSongs});
     view.$el.children()[1].click();
     expect(model.dequeue).to.have.been.called;

     SongModel.prototype.dequeue.restore();
   });

});
