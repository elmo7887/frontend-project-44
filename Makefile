install:
		npm ci

brain-games: 
		node bin/brain-games.js

brain-games: 
		node bin/brain-even.js

brain-games: 
		node bin/brain-gcd.js

brain-games: 
		node bin/brain-progression.js

brain-games: 
		node bin/brain-prime.js


publish: 
		npm publish --dry-run

lint: 
		npx eslint .

rec: 
		asciinema rec