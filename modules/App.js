import React from 'react'
import NavBar from '../components/NavBar'

/**
 * 整体APP模块布局
 */
export default React.createClass({
    render:function(){
        return(
            <div>
                <NavBar />
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        );       
    },
});
