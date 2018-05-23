import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { Map } from 'immutable';
import './index.css';
import App from './App';
import { ConnectedRouter } from 'react-router-redux';
import Comment from './components/Comments';
import Login from './components/Login';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Example from './components/Men';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import index from 'material-ui/Toggle';
import { Tabs } from 'material-ui/Tabs';
import Main from './Main';


const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_LIKE':
      return state.update('likes', likes => likes + 1);
    case 'ADD_DISLIKE':
      return state.update('dislikes', dislikes => dislikes - 1);
    case 'OPEN_SIDE':
      return state.update('opens', opens => !opens);
    case 'THEME_NUMBER':
      return state.update('views', views => views + 1);
    case 'NEXT_POSTS':
      return state.update('nexts', nexts => nexts + 1);
    case 'PUSH_POST':
      const {id, title, text} = action.payload;
      let home = 123;
      const hom = 'hom';
      const mun = 3;
      const num = 1;
      //const posts = hom;
      const fun = () => {
        let homes =+ 1;
        return homes ;};
      fun();
      console.log(fun())
      console.log(num);
      console.log(home);
      console.log(id, title, text, fun);
      return state.update('posts', posts => posts[fun()] );
    default:
      return state;
  }
};
// case 'PUSH_POST':
//       const {id, title, text} = action.payload;
//       const author = state.get('user');
//       const newPost = {id, title, text, author};
//       return state.update('posts', posts => posts.push(newPost));
// chat with redux ???

const initialState = Map({
  likes: 0,
  dislikes: 0,
  nexts: 0,
  views: 0,
  opens: false,
  index: [1, 2, 3, 4, 5],
  posts: [1,'ind-1',3,4],
});
const adder = {
  sum: 0,
  add(numbers) {
    numbers.forEach(element => {
      this.sum += element;
    });
  }
}
console.log(adder.add([1,2,3,4,5]));
const store = createStore(reducer, initialState);
const routes = [
  {
    path: '/',
    exact: true,
    component: App,
  },
  {
    path: '/menu',
    component: Tabs,
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/main',
    component: Main,
  }];
const rootId = document.getElementById('root');
ReactDOM.render(
  <MuiThemeProvider muiTheme={ getMuiTheme (darkBaseTheme) }>
    <Provider store={store}>
        <Router>
          <div>{routes.map((route) => (
            <Route
        key={route.path}
        path={route.path}
        exact={route.exact}
        component={route.component}
        />
    ))}
          </div>
        </Router>
    </Provider>
  </MuiThemeProvider>,
rootId);