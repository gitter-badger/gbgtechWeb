import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';


require('./style.css');

import App from './App';
import Hello from './Hello';
import NewsPage from './NewsPage';
import SinglePostPage from './SinglePostPage';

const AppRoute = () => (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Hello}/>
            <Route path="news" component={NewsPage}/>
            <Route path="news/:postId" component={SinglePostPage} />
        </Route>
    </Router>
);

ReactDOM.render(<AppRoute/>, document.getElementById('root'));
