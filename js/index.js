import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

import App from './../modules/App'
import About from './../modules/About'
import Contact from './../modules/Contact'
import Login from './../modules/Login'

const Dashboard = React.createClass({
    render:function(){
        return (
            <div>Welcome to the react demo!</div>
        );
    }        
})

/**
 * 使用配置来进行路由
 */
const routeConfig = [
    {
        path: '/',
        component: App,
        indexRoute: {component: Dashboard},
        childRoutes: [
            {path: 'about', component: About},
            {path: 'contact', component: Contact},
            {path: 'Login', component: Login}
        ]
    }
]
ReactDOM.render(<Router routes={routeConfig}/>, document.body)

/*
ReactDOM.render(
    (
        <Router history={hashHistory}>
            <Route path='/' component={App}>
                <IndexRoute commponent={Dashboard} />
                <Route path='/about' component={About}/>
                <Route path='/contact' component={Contact}/>
                <Route path='/login' component={Login}/>
            </Route>
        </Router>
    ),
    document.body
)
*/

