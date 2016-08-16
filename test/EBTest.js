'use strict'

let EB = require('../EB.js'),
    chai = require('chai'),
    expect = chai.expect,
    assert = chai.assert;

describe('test EB', () => {

    let eb = null;

    beforeEach(() => {
        eb = new EB();
    });

    afterEach(() => {
        eb = null;
    });
    
    //getTopic
    it('should get topic A', () => {
        eb.subscribe('A', () => {});
        assert('A' === eb.topicIsExist('A'), 'not get topic A');
    });

    //subscribe
    it('should subscribe topic A', () => {
       eb.subscribe('A', () => {});
       assert.isTrue('A' === eb.topicIsExist('A'), 'can not create topic A');     
    });

    
    //publish
    it('should publish topic A', () => {
        eb.subscribe('A', (v) => {
            assert(1 === v, 'publish method with topic A test 1 failed!');
        });
        eb.subscribe('A', (v) => {
            let vi = v + 2;
            assert(3 === vi, 'publish method with topic A test 2 failed!');
        });
        eb.subscribe('A', () => {
            let v = 'a';
            assert('a' === v, 'publish method with topic A test 3 failed!');
        });

        eb.publish('A', 1);
    });

    //removeTopic
    it('should unsubscribe topic A ', () => {
        eb.subscribe('A', function(){});
        assert.isTrue('A' === eb.topicIsExist('A'), 'can not create topic A');     
        eb.removeTopic('A');
        expect(eb.topicIsExist.bind(this, 'A')).to.throw('not found topic A');
    });

    //getCallbacksForTopic
    it('should get all callbacks for given topic', () => {
        eb.subscribe('A', (v) => {
            assert(1 === v, 'publish method with topic A test 1 failed!');
        });
        eb.subscribe('A', (v) => {
            let vi = v + 2;
            assert(3 === vi, 'publish method with topic A test 2 failed!');
        });
        eb.subscribe('A', () => {
            let v = 'a';
            assert('a' === v, 'publish method with topic A test 3 failed!');
        });
        var cs = eb.getCallbacksForTopic('A');
        assert.isTrue(Array.isArray(cs), 'getCallbacksForTopic failed'); 
       
    });
})



