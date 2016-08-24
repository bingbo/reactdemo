import React from 'react'
import ReactDOM from 'react-dom'

var cdata=[
    {id:1, name:'bill zhang', password:'111', email:'bill@126.com'},
    {id:2, name:'bing', password:'222', email:'bing@gmail.com'},
];
const UserList = React.createClass({
    render:function(){
        var UserNodes = this.props.data.map(function(user){
            return(
                <User data={user}/>
            );
        });
        return(
            <div className="container-fluid">
                {UserNodes}
            </div>
        );       
    }
});

const UserForm = React.createClass({
    handleSubmit:function(e){
        e.preventDefault();
        var id = this.refs.id.value.trim(),
            name = this.refs.name.value.trim(),
            password = this.refs.password.value.trim(),
            email = this.refs.email.value.trim();
        if(!id || !name){
            return;
        }
        this.props.onUserSubmit({id:id,name:name,password:password,email:email});
        this.refs.id.value = '';
        this.refs.name.value = '';
        this.refs.password.value = '';
        this.refs.email.value = '';
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
});



const User = React.createClass({
    render:function(){
        return (
            <div className="row">
                <div className="col-xs-6 col-sm-3">{this.props.data.id}</div>
                <div className="col-xs-6 col-sm-3">{this.props.data.name}</div>
                <div className="col-xs-6 col-sm-3">{this.props.data.password}</div>
                <div className="col-xs-6 col-sm-3">{this.props.data.email}</div>
            </div>
        );       
    }
});

/*创建一个组件类，并作出定义。组件实现了 render() 方法，该方法返回一个子级*/
const UserBox = React.createClass({
    
    loadUsersFromServer:function(){
        /*
        $.ajax({
            url:this.props.url,
            dataType:'jsonp',
            jsonp:'jsoncallback',
            cache:false,
            success:function(data){
                this.setState({data:data});
            }.bind(this),
            error:function(xhr,status,err){
                console.error(this.props.url,status,err.toString());
            }.bind(this)
        });                  
        */
        this.setState({data: cdata});
    },
    handleUserSubmit:function(user){
        var users = this.state.data;
        var newUsers = users.concat([user]);
        cdata.push(user);
        this.setState({data:newUsers});
        /*再同步到服务端*/
    },
    /*在组件挂载之前调用一次。返回值将会作为 this.state 的初始值*/
    getInitialState:function(){
        return {data: []};
    },
    /*在组件类创建的时候调用一次，然后返回值被缓存下来*/
    getDefaultProps:function(){},
    /*挂载，在初始化渲染执行之后立刻调用一次，仅客户端有效*/
    componentDidMount:function(){
        this.loadUsersFromServer();                  
        setInterval(this.loadUsersFromServer, this.props.pollInterval);
    },
    /*移除，在组件从 DOM 中移除的时候立刻被调用*/
    componentWillUnmount:function(){},
    /*更新，在接收到新的 props 或者 state 之前立刻调用。在初始化渲染的时候该方法不会被调用*/
    componentWillUpdate:function(){},
    /*更新，在组件的更新已经同步到 DOM 中之后立刻被调用,该方法不会在初始化渲染的时候调用*/
    componentDidUpdate:function(){
    
    },
    /*该方法是必须的，可以返回null或false表示不渲染任何东西*/
    render:function(){
        return (
            <div clasName="userBox">
                <div className="page-header">
                    <h1>Users<small>所有的用户列表</small></h1>
                </div>
                <UserList data={this.state.data}/>
                <UserForm onUserSubmit={this.handleUserSubmit}/>
            </div>);       
    }
});
