install-deps: 
	npm ci
test:
	npm test
test-watch:
	npx jest --watch
lint: 
	npx eslint .
gendiff : 
	node bin/gendiff.js
publish:
	npm publish --dry-run