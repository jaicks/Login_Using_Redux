import React from 'react';
import './App.css';
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './component/Login';
import UserList from './component/UserList';
import store from './Store';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Route exact path="/" component={Login} />
          <Route exact path="/userlist" component={UserList} />
        </div>
      </Router>
    </Provider>

  );
}

export default App;
