This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
## Notes To Keep In Mind

Modern websites ship a lot of javascript
	-Normally, Bundle scripts into 1 large file then serves through different pages

Code Splitting:
	-Reduce amount of work
	-A minimally functional page the about page
	-Create a vendor file: A file with all our third-party scripts
	
Production Build:
	-A file that is minified and remove tools that comes with third party
	apps
	-npm run build and will remove production

Bundle.js - Is where are components are held and longest time to load.
	-All the javascript we need is in bundle.js

By using the 'import' keyword we are already telling webpack to use this component
when it is needed

In the network tab upon switching pages you will see javascript files being loaded
named as "chunk". These files are sent only when needed by the webpage.

A higher order component is a component that returns a component
	-Similar to a higher order function
	-Similar to connect() -> in redux

Our bundle.js file increases because we are importing "AsyncComponent"
Always question if it is neccessary to load asynchronously.

Route based chunking
	Main way of doing things.
Component based chunking
	-If home page gets really big.
	-Maybe you have a sidebar that exists then pops up
	
React-Router and React-Loadable, makes it really easy to do code
splitting.

PureComponent: Only will re-render when its props wil change;
	-Will do the shouldcomponent update
	-Does shallow checks.

Git-Why-Did-You-Update?
	-Checking for any unessary rendering

How do we optimize our code?
	-Code splitting
	-Tree shaking -> done behind the scenes by webpack, removes any unused code
	-If we are using only one function in a big library we will discard the rest
	-Avoid blocking the main thread
		-Minimizing how much js is being included
	-Avoiding memory leaks
		-We don't keep adding memory to our app	
		-We have a ton of eventlisteners, the browsers will do more things due
		to these eventlisteners.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
