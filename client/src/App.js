import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter as Router, Route,Link} from 'react-router-dom';
import {
  Typography,
  Button,
  Paper,
  IconButton,
  TextField,
  Container,
} from "@material-ui/core";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import './App.css';
import Users from './components/Users.js';
import Github from './components/Github.js';
import MoviesList from './components/MoviesList.js';
import Navbar from "./components/Navbar.js";
import Series from './components/Series.js';
import Footer from './components/Footer.js';
import Blog from "./components/Blog.js";
import Create from "./components/Create.js";

function App() {

  return (
    <div className="App">
      <Router>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
          <ul className="navbar-nav">
            <Link to="/" className="navbar-brand">
              MovieSeed
            </Link>
            <li className="nav-item dropdown">
              <Link
                to="/movies"
                className="nav-link dropdown-toggle"
              >
                Movies
              </Link>            
            </li>
            <li className="nav-item dropdown">
              <Link
                to="/series"
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
              >
                Series
              </Link>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">
                  Horror
                </a>
                <a className="dropdown-item" href="#">
                  Comedy
                </a>
                <a className="dropdown-item" href="#">
                  Comic
                </a>
                <a className="dropdown-item" href="#">
                  Adventure
                </a>
              </div>
            </li>
            <li className="nav-item">
              <Link to="/users" className="nav-link">
                Reviews
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/github" className="nav-link">
                Github
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/blog" className="nav-link">
                Blog
              </Link>
            </li>

            <IconButton color="secondary" aria-label="add to shopping cart">
              <AddShoppingCartIcon />
            </IconButton>
          </ul>
        </nav>

        <form className="d-flex">
          <input
            className="form-control "
            type="search"
            placeholder="Enter title to search here..."
            aria-label="Search"
          />
          <button className="btn btn-outline-success " type="submit">
            Search...
          </button>
        </form>

        <Route exact path="/">
          <Navbar />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/github">
          <Github />
        </Route>
        <Route path="/movies">
          <MoviesList />
        </Route>
        <Route path="/series">
          <Series />
        </Route>
        <Route exact path="/blog">
          <Blog />
        </Route>
        <Route path="/blog/create">
          <Create />
        </Route>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
