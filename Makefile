install-deps: 
	npm ci
lint: 
	npx eslint .
gendiff : 
	node bin/gendiff.js