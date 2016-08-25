import React from 'react'

/**
 * 用extends Component的方式不能获取this.refs的值
 */
//export default class Form extends React.Component{
export default React.createClass({
    /*提交处理*/
    handleSubmit:function(e){
        e.preventDefault();
        var data={};
        for(var ref in this.refs){
            data[ref] = this.refs[ref].value.trim();
            this.refs[ref].value='';
        }

        this.props.onSubmit(data);
        return;
    },
    render:function(){
        return(
            <form className="form-inline" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Id" ref="id"/>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Name" ref="name"/>
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" placeholder="Password" ref="password"/>
                </div>
                <div className="form-group">
                    <input type="email" className="form-control" placeholder="Email" ref="email"/>
                </div>
                <input type="submit" className="btn btn-default" value="Post"/>
			</form>        
        );
    }
})
