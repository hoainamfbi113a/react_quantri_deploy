import React, { Component } from 'react'
import {Link}  from 'react-router-dom'
export default class ItemQuestion extends Component {
    render() {
        let {item,index} = this.props;
        return (
                <tr>
                        <td>{item.socaudung}</td>
                        <td>{item.socausai}</td>
                        <td>{item.examinationid}</td>
                        <td>{item.memberid}</td>
                       
                </tr>
        )
    }
}
