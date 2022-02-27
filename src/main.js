// # Build the application
// rollup -c

// # Commit and push the changes
// git add .
// git commit -m "initial gh-pages commit"
// git push origin gh-pages

// # Deploy the code with the gh-pages module
// node ./gh-pages.js
import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		// name: 'warudo'
	}
});

export default app;