import React, { Component } from 'react'
import {Link}  from 'react-router-dom'
export default class ItemLession extends Component {
    render() {
        let {item,index} = this.props;
        return (
                <tr>
                        <td>{item.lessionContentSubjects}</td>
                        <td>{item.lessionContentTitle}</td>
                        <td><img width="50px" src={`http://localhost:5000/${item.lessionContentImg}`} alt="not display"></img></td>
                </tr>
        )
    }
}
