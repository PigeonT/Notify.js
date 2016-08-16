(function(root, factory, undefined) {
    'use strict'
    //commonJS
    if(typeof exports === 'object' && typeof module === 'object') {
        module.exports = factory();
    }
    //es6 
    else if(typeof exports === 'object') {
        exports['EB'] = factory()
    }
    //amd
    else if(typeof define === 'function') {
        define('EB', [], factory)
    }
    //normal window environment
    else {
        root["EB"] = factory();
    }
    
})(this, function(undefined) {
        'use strict'

        var topics = {};

        var EB = function() {
            this.version = '0.0.1';
            this.auther = 'pigeonT';
        } 
        
        EB.prototype = {
            publish : function(topic, data) {
                if(!topics.hasOwnProperty(topic)) {
                    throw new Error('no topic ' + topic);
                }
                var args = [].slice.call(arguments);
                setTimeout(doCallback, 0, args);
            },

            subscribe : function(topic, callback) {
                if(typeof callback !== 'function') {
                    throw new Error('No callback function assigned faile');
                }
                pushTopic(topic, callback);
            },

            removeTopic: function(topic) {
                if(!topics.hasOwnProperty(topic)) {
                    throw new Error('no topic ' + topic);
                }
                delete topics[topic];
                console.info('topic' + topic + 'removed successfully');
            },
            topicIsExist : function(topic) {
                if(!topics.hasOwnProperty(topic))                 
                    throw new Error('not found topic ' + topic);
                return topic;
            },
            getCallbacksForTopic : function(topic) {
                if(!topics.hasOwnProperty(topic))
                    throw new Error('not found topic ' + topic);
                return topics[topic];
            }
        }

        function pushTopic(topic, callback) {
            topics[topic] = topics[topic] || [];
            topics[topic].push(callback);
            console.info('topic ' + topic + ' with ' + callback + 'function created');
        }
        function doCallback(args) {
            topics[args[0]].forEach(function(v, i, a) {
                v(args.slice(1));
            }); 
        }
        return EB;
});
