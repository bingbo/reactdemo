import React from 'react'
export default React.createClass({
    render(){
        return (
            <div className="page-header">
                <h1>{this.props.title}<small>{this.props.subTitle}</small></h1>
            </div>
        );
    }
})
