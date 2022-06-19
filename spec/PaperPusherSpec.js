import { PaperPusher } from '../src/PaperPusher.js'

describe("PaperPusher", function() {
  jasmine.clock().install();
  
  it("calls and passes correct data to handlers", function() {
    var handlerFunc = jasmine.createSpy('handlerFunc');

    var eventSys = new PaperPusher();
    eventSys.subscribe('event', handlerFunc);
    eventSys.publish('event', {"data":"blah"});

    jasmine.clock().tick(1);

    expect(handlerFunc).toHaveBeenCalledWith({"data":"blah"});
    expect(handlerFunc.calls.count()).toBe(1);
  });

  it("calls and passes correct data to handlers for non-deferrable publish", function() {
    var handlerFunc = jasmine.createSpy('handlerFunc');

    var eventSys = new PaperPusher();
    eventSys.subscribe('event', handlerFunc);
    eventSys.publish('event', {"data":"blah"}, false);

    expect(handlerFunc).toHaveBeenCalledWith({"data":"blah"});
    expect(handlerFunc.calls.count()).toBe(1);
  });

  it("calls handler once", function() {
    var handlerFunc = jasmine.createSpy('handlerFunc');

    var eventSys = new PaperPusher();
    eventSys.subscribe('event', handlerFunc);
    eventSys.publish('event', {"data":"blah"});

    jasmine.clock().tick(1);

    expect(handlerFunc.calls.count()).toBe(1);
  });  

  it("does not call handler after unsubscribe", function() {
    var handlerFunc = jasmine.createSpy('handlerFunc');

    var eventSys = new PaperPusher();
    eventSys.subscribe('event', handlerFunc);
    eventSys.unsubscribe('event', handlerFunc);
    eventSys.publish('event', {"data":"blah"});

    expect(handlerFunc).not.toHaveBeenCalled();
  });

});
