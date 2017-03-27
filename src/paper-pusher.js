window.PaperPusher =  (function () {

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
         */
        this.publish = function(_eventName, _eventData) {
            var handlers = subscribers.get(_eventName);
            if(handlers) {
                handlers.forEach(function(_h) {
                    _h(_eventData);
                });
            }
        };
    };

    return construct;
    
})();
