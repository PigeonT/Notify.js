test:
	./node_modules/mocha/bin/mocha ${find test -type f -name '*.js'} 

.PHONY: test
