import React from 'react'
import PageHeader from '../components/PageHeader'
import Table from '../components/table/Table'
import Form from '../components/Form'
var cdata=[
    {id:1, name:'bill zhang', password:'111', email:'bill@126.com'},
    {id:2, name:'bing', password:'222', email:'bing@gmail.com'},
];
var cfields=['id','name','password','email'];
/**
 * About模块
 */
export default React.createClass({
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
    /*表意提交*/
    handleUserSubmit:function(user){
        var users = this.state.data;
        var newUsers = users.concat([user]);
        cdata.push(user);
        this.setState({data:newUsers});
        /*再同步到服务端*/
    },
    /*在组件挂载之前调用一次。返回值将会作为 this.state 的初始值*/
    getInitialState:function(){
        return {data: cdata,fields: cfields};
    },
    render:function(){
        return(
            <div>
                <PageHeader title={'User  '} subTitle={'users informations'}/>
                <Table data={this.state.data} fields={this.state.fields}/>
                <Form onSubmit={this.handleUserSubmit}/>
            </div>
        );       
    },
});
