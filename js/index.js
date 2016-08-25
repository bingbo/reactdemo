import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

import App from './../modules/App'
import About from './../modules/About'
import Contact from './../modules/Contact'
import Login from './../modules/Login'
import User from './../modules/User'
import PageHeader from '../components/PageHeader'


/*
 * 首页默认展现组件
 */
const Dashboard = React.createClass({
    render:function(){
        return (
            <div>
                <PageHeader title={'Home  '} subTitle={'react demo'}/>

            </div>
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
            {path: 'login', component: Login},
            {path: 'user', component: User}
        ]
    }
]
ReactDOM.render(<Router history={hashHistory} routes={routeConfig}/>, document.getElementById('container'))

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

