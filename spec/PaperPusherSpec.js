describe("PaperPusher", function() {
  var PaperPusher = require('../src/paper-pusher.js');
  
  it("call and passes correct data to handlers", function() {

    jasmine.clock().install();
    var handlerFunc = jasmine.createSpy('handlerFunc');

    var eventSys = new PaperPusher();
    eventSys.subscribe('event', handlerFunc);
    eventSys.publish('event', {"data":"blah"});

    jasmine.clock().tick(1);

    expect(handlerFunc).toHaveBeenCalledWith({"data":"blah"});

  });
  
});
