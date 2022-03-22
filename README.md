A common problem I have faced on our Reactjs frontends is how do I fetch data from a server to display it and track the state across all my components?

One of the latest solutions is React Toolkit Query (RTK Query). RTK Query is a powerful data fetching and caching tool, simplifying loading data in a web application.

**How to use RTK Query:**
* Set up the service: The createApi function is where we define our endpoints and allow it to create the API slice. Now, RTK Query will automatically generate hooks for each endpoint query.
* Hook the service into the Redux store: RTK Query creates reducerPath and reducer for us, which we can pass straight into the reducer parameter of configureStore.
* Display the data: We can now use the query hook RTK Query created to fetch anything we want in our React component.

A modern solution that integrates perfectly with Redux state management tools in your client-side environment.

## Usage

Run `npm install` to install all the required packages.

`npm start` runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
