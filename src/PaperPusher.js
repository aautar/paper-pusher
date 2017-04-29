PaperPusher =  (function () {

    var subscribers = new Map();

    var construct = function() {

        /**
         * Subscribe to an event
         * 
         * @param {string} _eventName
         * @param {function} _handlerFunction
         */
        this.subscribe = function(_eventName, _handlerFunction) {
            var handlers = subscribers.get(_eventName);
            if(typeof handlers === 'undefined') {
                handlers = [];
            }

            handlers.push(_handlerFunction);
            subscribers.set(_eventName, handlers);
        };

        /**
         * Unsubscribe from an event
         * 
         * @param {string} _eventName
         * @param {function} _handlerFunction
         */
        this.unsubscribe = function(_eventName, _handlerFunction) {
            var handlers = subscribers.get(_eventName);
            if(typeof handlers === 'undefined') {
                return;
            }

            for(var i=0; i<handlers.length; i++) {
                var h = handlers[i];
                if(h === _handlerFunction) {
                    handlers.splice(i, 1);
                    break;
                }
            }

            subscribers.set(_eventName, handlers);
        };

        /**
         * Publish an event
         * 
         * @param {string} _eventName
         * @param {*} _eventData
         * @param {boolean} _deferrable
         */
        this.publish = function(_eventName, _eventData, _deferrable) {
            var handlers = subscribers.get(_eventName);
            if(handlers) {
                handlers.forEach(function(_h) {
                    if(_deferrable) {
                        _h(_eventData);
                    } else {
                        setTimeout(function() { _h(_eventData); }, 0);
                    }
                });
            }
        };
    };

    return construct;
    
})();

if (typeof module !== 'undefined' && module.exports) {
    module.exports = PaperPusher;
}
