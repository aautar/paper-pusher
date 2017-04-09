# paper-pusher

Small pub/sub messaging component

## Initialize

```
var eventSystem = new PaperPusher();
```

## Publish

```
var eventData = {};
eventSystem.publish('event-name', eventData);
```

## Subscribe

```
eventSystem.subscribe('event-name', function(eventData) {
    // 'event-name' event emitted, do something...
});
```
