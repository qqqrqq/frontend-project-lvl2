install-deps: 
	npm ci
test:
	npm test
test-coverage:
	npm test -- --coverage --coverageProvider=v8
test-watch:
	npx jest --watch
lint: 
	npx eslint .
gendiff : 
	node bin/gendiff.js
publish:
	npm publish --dry-run
start:
	gendiff __fixtures__/file1.json __fixtures__/file2.json