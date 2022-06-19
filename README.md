# paper-pusher

Tiny pub/sub messaging component with no dependencies.

## Install

```bash
npm install paper-pusher
```

## Importing
PaperPusher can be consumed via importing the ES module:
```javascript
import { PaperPusher } from 'paper-pusher'
```

Alternatively, a minified distribution file, for use in all modern browsers is available at `dist/paper-pusher.min.js`


## Initialize

```javascript
const eventSystem = new PaperPusher();
```

## Publish

```javascript
const eventData = {};
eventSystem.publish('event-name', eventData);
```

## Subscribe

```javascript
eventSystem.subscribe('event-name', function(eventData) {
    // 'event-name' event emitted, do something...
});
```
