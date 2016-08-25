import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Nav extends Component {
    render(){
        return(
            <nav id="w0" className="navbar-inverse  navbar" role="navigation">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#w0-collapse">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="/">My React Demo</a>
                    </div>
                    <div id="w0-collapse" className="collapse navbar-collapse">
                        <ul id="w1" className="navbar-nav navbar-right nav">
                            <li className="active"><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                            <li><Link to="/login">Login</Link></li>
                            
                        </ul>
                    </div>
                </div>
            </nav>        
        );
    }
}

