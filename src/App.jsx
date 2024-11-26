import { Provider } from 'react-redux';
import './App.scss';
import store from './redux/store';
import Header from './components/header/Header';
import Home from './components/home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Details from './components/content/details/Details';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Header />
          <div className="app">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/:id/:name/details" component={Details} />
            </Switch>
          </div>
        </Router>
      </Provider>
    </>
  );
};

export default App;
