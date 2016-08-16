# Notify.js 

This project aims to provide event bus for javascript. It can be integrated in any framework for your convinience. 

## Installation

git clone https://github.com/pigeonT/Notify.js

## Usage

```javascript
var eventBus = new Notify();

eventBus.subscribe('mTopic', function(data) {

    console.log('My name is ' + data + ' and I am doing awesome cool stuff!');
});

eventBus.publish('mTopic', 'Bob');
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## History

## Credits

## License
GNU GPL
