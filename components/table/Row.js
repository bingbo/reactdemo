import React from 'react'
import Column from './Column'

export default React.createClass({
    render:function(){
        var colNodes = this.props.data.map(function(cls){
            return(
                <Column key={cls} data={cls} />
            );
        });
        return(
            <tr>
                {colNodes}
            </tr>
        );
    }
})
