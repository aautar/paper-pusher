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
