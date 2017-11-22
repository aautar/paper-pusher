# paper-pusher

Small pub/sub messaging component

## Initialize

```javascript
var eventSystem = new PaperPusher();
```

## Publish

```javascript
var eventData = {};
eventSystem.publish('event-name', eventData);
```

## Subscribe

```javascript
eventSystem.subscribe('event-name', function(eventData) {
    // 'event-name' event emitted, do something...
});
```
