import React from 'react'
import Row from './Row'

export default React.createClass({
    
    render:function(){
        var fields = this.props.fields;
        var datas = this.props.data.map(function(item){
            var arr=[];
            for(var i=0;i<fields.length;i++){
                arr.push(item[fields[i]]);
            }
            return arr;
        });
        /**说是数组每个元素得有一个key属性**/
        var i=0;
        var rowNodes = datas.map(function(row){
            return(<Row key={i++} data={row}/>);
        });
        return(
            <table className="table table-striped">
                <thead>
                    <Row data={this.props.fields} />
                </thead>
                <tbody>
                    {rowNodes}
                </tbody>
            </table>
        );
    }
})
