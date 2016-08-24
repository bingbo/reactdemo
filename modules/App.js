import React from 'react'
import Nav from '../components/Nav'

export default React.createClass({
    render:function(){
        return(
            <div>
                <Nav />
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        );       
    },
});
