# Movie App

## React JS Fundamental

![preview](/img/preview.png)

## [Check out it👆](https://ujunglim.github.io/movie_app/#/)

## App

```
npm install react-router-dom
```

```js
import { HashRouter, Route } from "react-router-dom";

// exact={true} to render only one component
function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie/:id" component={Detail} />
    </HashRouter>
  );
}
```

## Navigation

`<a>` kills react and redirect page. Instead of it, use `<Link>` of react-router-dom.

```js
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div className="nav">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  );
}
```

> ! `<Link>` should be inside of Router<br>
> ! path of `<Route>` and to of `<Link>` should be same each other.

## Movie

```
npm i prop-types
```

```js
import PropTypes from "prop-types";

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
```

## Fetch Movie Data

> Axios is a promise based HTTP client for the browser and Node. js. Axios makes it easy to send asynchronous HTTP requests to REST endpoints and perform CRUD operations.

```
npm i axios
```

> Get Movie data from https://yts.mx/api

```js
getMovies = async () => {
  const {
    data: {
      data: { movies },
    },
  } = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");
  this.setState({ movies, isLoading: false });
};
```

## Github Page

```
npm install gh-pages
```

Don't forget to add Homepage address, deploy.<br>
package.json

```json
"homepage": "https://ujunglim.github.io/movie_app",

"scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "deploy": "gh-pages -d build",
    "predeploy": "npm run build"
  }
```

push to git first, then deploy project to gh-page

```
npm run deploy
```
