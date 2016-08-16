'use strict'

let Notify = require('../Notify.js'),
    chai = require('chai'),
    expect = chai.expect,
    assert = chai.assert;

describe('test Notify', () => {

    let notify = null;

    beforeEach(() => {
        notify = new Notify();
    });

    afterEach(() => {
        notify = null;
    });
    
    //getTopic
    it('should get topic A', () => {
        notify.subscribe('A', () => {});
        assert('A' === notify.topicIsExist('A'), 'not get topic A');
    });

    //subscribe
    it('should subscribe topic A', () => {
       notify.subscribe('A', () => {});
       assert.isTrue('A' === notify.topicIsExist('A'), 'can not create topic A');     
    });

    
    //publish
    it('should publish topic A', () => {
        notify.subscribe('A', (v) => {
            assert(1 === v, 'publish method with topic A test 1 failed!');
        });
        notify.subscribe('A', (v) => {
            let vi = v + 2;
            assert(3 === vi, 'publish method with topic A test 2 failed!');
        });
        notify.subscribe('A', () => {
            let v = 'a';
            assert('a' === v, 'publish method with topic A test 3 failed!');
        });

        notify.publish('A', 1);
    });

    //removeTopic
    it('should unsubscribe topic A ', () => {
        notify.subscribe('A', function(){});
        assert.isTrue('A' === notify.topicIsExist('A'), 'can not create topic A');     
        notify.removeTopic('A');
        expect(notify.topicIsExist.bind(this, 'A')).to.throw('not found topic A');
    });

    //getCallbacksForTopic
    it('should get all callbacks for given topic', () => {
        notify.subscribe('A', (v) => {
            assert(1 === v, 'publish method with topic A test 1 failed!');
        });
        notify.subscribe('A', (v) => {
            let vi = v + 2;
            assert(3 === vi, 'publish method with topic A test 2 failed!');
        });
        notify.subscribe('A', () => {
            let v = 'a';
            assert('a' === v, 'publish method with topic A test 3 failed!');
        });
        var cs = notify.getCallbacksForTopic('A');
        assert.isTrue(Array.isArray(cs), 'getCallbacksForTopic failed'); 
       
    });
})



